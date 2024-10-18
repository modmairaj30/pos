package com.webapp.apis.transactions.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import javax.inject.Inject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.webapp.apis.domian.TblAutonumberLocation;
import com.webapp.apis.repository.TblAutoNumberLocationRepository;
import com.webapp.apis.transaction.constants.TransactionConstants;
import com.webapp.apis.transactions.domain.StockInfo;
import com.webapp.apis.transactions.domain.PurchaseInvoive;
import com.webapp.apis.transactions.domain.PurchaseInvoiveDet;
import com.webapp.apis.transactions.domain.Purchasereturns;
import com.webapp.apis.transactions.domain.PurchasereturnsDetail;
import com.webapp.apis.transactions.domain.Salesreturns;
import com.webapp.apis.transactions.domain.SalesreturnsDetail;
import com.webapp.apis.transactions.mapper.SalesreturnsMapper;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockObjects;
import com.webapp.apis.transactions.model.SalesreturnsFormBean;
import com.webapp.apis.transactions.repository.StockInfoRepository;
import com.webapp.apis.transactions.repository.SalesreturnsRepository;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.repository.specs.SalesreturnsSpecification;
import com.webapp.apis.transactions.service.SalesreturnsService;
import com.webapp.apis.utility.SessionUtility;
@Service
public class SalesreturnsServiceImpl implements SalesreturnsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(SalesreturnsServiceImpl.class);
	@Inject
	private SalesreturnsRepository salesreturnsRepository;
	@Inject
	private TblAutoNumberLocationRepository tblAutoNumberLocationRepository;
	

	@Inject
	private StockInfoRepository stockInfoRepository;

	@Inject
	private SessionUtility sessionUtility;

	

	@Transactional
	@Override
	public String saveSalesReturns(SalesreturnsFormBean salesreturnsFormBean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (salesreturnsFormBean.getId() == null) {
			TblAutonumberLocation autoNumber=	 tblAutoNumberLocationRepository.findByTxnIdAndLocationId(55,salesreturnsFormBean.getLocationId());
			salesreturnsFormBean.setDocNo(autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			salesreturnsFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			salesreturnsFormBean.setCreatedDate(new Date());
			tblAutoNumberLocationRepository.updateNumber(55,salesreturnsFormBean.getLocationId());
		} else {
			salesreturnsFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			salesreturnsFormBean.setUpdatedDate(new Date());
		}
	
		Salesreturns obj = salesreturnsRepository
				.save(SalesreturnsMapper.mapFormToDomain(salesreturnsFormBean));
		stockInfoRepository.deleteRowsByDocNo(obj.getDocNo());
		List<StockInfo> stockInfoList = new ArrayList<>();
		HashMap<Integer, BigDecimal> prodQty = new HashMap<Integer, BigDecimal>();
		HashMap<Integer, BigDecimal> prodCumQty = new HashMap<Integer, BigDecimal>();
		List<Integer> ids = new ArrayList<>();
List<StockInfo> previousStockInfoList = stockInfoRepository.findByDocNo1(obj.getDocNo());
		
		
		/*List<Integer> productIds = new ArrayList<>();
		for (PurchaseInvoiveDet e : obj.getPurchaseInvoiveDetList()) productIds.add(e.getId());*/
		if (previousStockInfoList.size() > 0) {
			StockObjects stockUpdateObj=stockUpdate(previousStockInfoList,obj);
			StockObjects stockObjects =stockInsert(stockUpdateObj.getSalesreturns());
			if(stockObjects.getStockInfoUpdateList()!=null)
			stockInfoRepository.saveAll(stockUpdateObj.getStockInfoUpdateList());
			if(stockObjects.getStockInfoProductListLastRowFalse()!=null)
			stockInfoRepository.saveAll(stockObjects.getStockInfoProductListLastRowFalse());
			if(stockObjects.getStockInfoList()!=null)
			stockInfoRepository.saveAll(stockObjects.getStockInfoList());
			if(stockObjects.getStockInfoDeleteList()!=null)
			stockInfoRepository.deleteAll(stockUpdateObj.getStockInfoDeleteList());
			if(stockObjects.getStockInfoLastRowTrueList()!=null)
			stockInfoRepository.saveAll(stockObjects.getStockInfoLastRowTrueList());
			
		} else {
			StockObjects stockObjects =stockInsert(obj);
			if(stockObjects.getStockInfoProductListLastRowFalse()!=null)
			stockInfoRepository.saveAll(stockObjects.getStockInfoProductListLastRowFalse());
			if(stockObjects.getStockInfoList()!=null)
			stockInfoRepository.saveAll(stockObjects.getStockInfoList());
					
		}
		if (obj != null) {
			return TransactionConstants.SAVE;
		}
		return TransactionConstants.FAIL;
	}

	@Override
	public List<SalesreturnsFormBean> getAllSalesreturns(ServerSidePagination serverSidePagination) {
		// TODO Auto-generated method stub
		Page<Salesreturns> salesreturnsList = null;
		salesreturnsRepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(",")).mapToInt(Integer::parseInt)
				.toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		salesreturnsList = salesreturnsRepository.findByLocationAll(list, requestedPage);
		// salesreturnsRepository.findAll(example, requestedPage)
		return SalesreturnsMapper.mapDomainListToFormList(salesreturnsList.toList());
	}

	@Override
	public List<SalesreturnsFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		SalesreturnsSpecification msTitleRating = new SalesreturnsSpecification();
         msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
        // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
         List<Salesreturns> salesreturnsList = salesreturnsRepository.findAll(msTitleRating);
		//List<Salesreturns> salesreturnsList = salesreturnsRepository.findByWhereCondition(where);
		return SalesreturnsMapper.mapDomainListToFormList(salesreturnsList);
	}

	@Override
	public String saveSalesreturns(SalesreturnsFormBean salesreturnsFormBean) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public StockObjects stockInsert(Salesreturns obj) {
		StockObjects stockObjests= new StockObjects();
		// int i= stockInfoRepository.deleteRowsByDocNo(obj.getDocNo());
		List<StockInfo> stockInfoList = new ArrayList<>();
		HashMap<Integer, BigDecimal> prodQty = new HashMap<Integer, BigDecimal>();
		HashMap<Integer, BigDecimal> prodCumQty = new HashMap<Integer, BigDecimal>();
		List<Integer> ids = new ArrayList<>();
		// obj.getPurchaseInvoiveDetList().stream().map(entity->ids.add(entity.getProductId()));
		for (SalesreturnsDetail sd : obj.getInvoiceDetList()) {
			StockInfo stockInfo = new StockInfo();
			stockInfo.setBaseId(obj.getId());
			stockInfo.setDetailId(sd.getId());
			stockInfo.setScreenId(20);
			stockInfo.setTxnId(55);
			stockInfo.setDocDt(obj.getDocDt());
			stockInfo.setDocNo(obj.getDocNo());
			stockInfo.setBatchNo("0");
			stockInfo.setTxnFunction("PLUS");
			stockInfo.setLastRow("TRUE");
			stockInfo.setUserId(sessionUtility.getUserSession().getId());
			stockInfo.setLocationId(obj.getLocationId());
			stockInfo.setProductId(sd.getProductId());
			stockInfo.setProductCode(sd.getProductCode());
			stockInfo.setQty(sd.getQty());
			stockInfo.setCumQty(sd.getQty());
			stockInfo.setRate(sd.getRate());
			// stockInfo.setFldBin(sd.getFldBin());
			ids.add(sd.getProductId());
			prodQty.put(sd.getProductId(), sd.getQty());
			// prodRate.put(sd.getProductId(), sd.getRate());
			stockInfoList.add(stockInfo);

		}
		
		
		List<StockInfo> stockInfoProductListLastRowFalse = new ArrayList<>();
		stockInfoProductListLastRowFalse = stockInfoRepository.getStockProductsLastRowTrue(ids,
				obj.getLocationId());

		for (StockInfo obj1 : stockInfoProductListLastRowFalse) {
			BigDecimal qty = prodQty.get(obj1.getProductId()).add(obj1.getCumQty());
			prodCumQty.put(obj1.getProductId(), qty);
			obj1.setLastRow("FALSE");
		}
		for (StockInfo obj2 : stockInfoList) {
			if (prodCumQty.get(obj2.getProductId()) != null)
				obj2.setCumQty(prodCumQty.get(obj2.getProductId()));

		}
		stockObjests.setStockInfoList(stockInfoList);
		stockObjests.setStockInfoProductListLastRowFalse(stockInfoProductListLastRowFalse);
		return stockObjests;
	}

	public StockObjects stockUpdate(List<StockInfo> previousStockInfoList,Salesreturns obj) {
		StockObjects stockObjests= new StockObjects();
		Salesreturns newProducts= new Salesreturns();
		//List<StockInfo> previousProductsList=  new ArrayList<>();
		//previousProductsList=previousStockInfoList1;
		List<StockInfo> stockInfoProductListLastRowTrue = new ArrayList<>();
		List<Integer> ids = new ArrayList<>();
		List<SalesreturnsDetail> stockInfoInsertList= new ArrayList<SalesreturnsDetail>();
		newProducts=obj;
		 List<StockInfo> stockInfoUpdateList = new ArrayList<StockInfo>();
		 List<StockInfo> stockInfoDeleteList= new ArrayList<StockInfo>();
		 HashMap<Integer, SalesreturnsDetail> purchasMap = new HashMap<Integer, SalesreturnsDetail>();
			HashMap<Integer, StockInfo> stockMap = new HashMap<Integer, StockInfo>();
			HashMap<Integer, BigDecimal> stockMap1 = new HashMap<Integer, BigDecimal>();
			for (SalesreturnsDetail purchaseInvoiveDet : obj.getInvoiceDetList()) {
				purchasMap.put(purchaseInvoiveDet.getProductId(), purchaseInvoiveDet);
			}
			for (StockInfo preStock : previousStockInfoList) {
				stockMap.put(preStock.getProductId(),preStock );
				stockMap1.put(preStock.getProductId(),preStock.getQty());
				}
			
			
			
		for (SalesreturnsDetail purchaseInvoiveDet : obj.getInvoiceDetList()) {
		if(stockMap.containsKey(purchaseInvoiveDet.getProductId())) {
			StockInfo stockInfo=stockMap.get(purchaseInvoiveDet.getProductId());
			stockInfo.setQty(purchaseInvoiveDet.getQty());
			//stockInfo.setCumQty(sd.getQty());
			stockInfo.setRate(purchaseInvoiveDet.getRate());
			ids.add(stockInfo.getProductId());
			stockInfoUpdateList.add(stockInfo);
		}
		else {
			
			stockInfoInsertList.add(purchaseInvoiveDet);
		}
		}

		
		stockInfoProductListLastRowTrue = stockInfoRepository.getStockProductsLastRowTrue(ids,
				obj.getLocationId());
		
		for (StockInfo objnew : stockInfoProductListLastRowTrue) {
			
			BigDecimal newQty = purchasMap.get(objnew.getProductId()).getQty();
			BigDecimal oldQty = stockMap1.get(objnew.getProductId());
			if(newQty.intValue()>oldQty.intValue()) {
				BigDecimal qty2=newQty.subtract(oldQty);	
				objnew.setCumQty(objnew.getCumQty().add(qty2));	
			}
			else {
				BigDecimal qty2=oldQty.subtract(newQty);	
				objnew.setCumQty(objnew.getCumQty().subtract(qty2));	
			}
			
						
		}
		stockObjests.setStockInfoLastRowTrueList(stockInfoProductListLastRowTrue);
		
		for (StockInfo stock : previousStockInfoList) {
			if(purchasMap.containsKey(stock.getProductId())) {	}
			else {
			stockInfoDeleteList.add(stock);
			}
		}
		stockObjests.setStockInfoDeleteList(stockInfoDeleteList);
		newProducts.setInvoiceDetList(stockInfoInsertList);
		stockObjests.setSalesreturns(newProducts);
		stockObjests.setStockInfoUpdateList(stockInfoUpdateList);
		return stockObjests;
	}

}
