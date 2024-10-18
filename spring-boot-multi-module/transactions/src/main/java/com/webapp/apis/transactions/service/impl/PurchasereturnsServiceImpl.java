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
import com.webapp.apis.transactions.domain.PurchaseInvoive;
import com.webapp.apis.transactions.domain.PurchaseInvoiveDet;
import com.webapp.apis.transactions.domain.Purchasereturns;
import com.webapp.apis.transactions.domain.PurchasereturnsDetail;
import com.webapp.apis.transactions.domain.StockInfo;
import com.webapp.apis.transactions.mapper.PurchasereturnsMapper;
import com.webapp.apis.transactions.model.PurchasereturnsFormbean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockObjects;
import com.webapp.apis.transactions.repository.Purchasereturnsrepository;
import com.webapp.apis.transactions.repository.StockInfoRepository;
import com.webapp.apis.transactions.repository.specs.PurchaseReturnSpecification;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.service.PurchasereturnsService;
import com.webapp.apis.utility.SessionUtility;
import com.webapp.apis.transactions.utility.StockUpdate;

@Service
public class PurchasereturnsServiceImpl implements PurchasereturnsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(PurchasereturnsServiceImpl.class);
	@Inject
	private Purchasereturnsrepository purchasereturnsrepository;

	@Inject
	private StockInfoRepository stockInfoRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Inject
	private TblAutoNumberLocationRepository tblAutoNumberLocationRepository;
	
	@Inject
	private StockUpdate stockUpdate;

	@Override
	public List<PurchasereturnsFormbean> getAllPurchasereturns() {
		List<Purchasereturns> list = purchasereturnsrepository.findAllByOrderByIdAsc();
		return PurchasereturnsMapper.mapDomainListToFormList(list);

	}

	@Transactional
	@Override
	public String savePurchasereturns(PurchasereturnsFormbean PurchasereturnsFormbean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (PurchasereturnsFormbean.getId() == null) {
			TblAutonumberLocation autoNumber = tblAutoNumberLocationRepository.findByTxnIdAndLocationId(51,
					PurchasereturnsFormbean.getLocationId());
			PurchasereturnsFormbean.setDocNo(autoNumber.getPrefix() + autoNumber.getNumber() + autoNumber.getSuffix());
			PurchasereturnsFormbean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			PurchasereturnsFormbean.setCreatedDate(new Date());
			tblAutoNumberLocationRepository.updateNumber(51, PurchasereturnsFormbean.getLocationId());
		}else {
			PurchasereturnsFormbean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			PurchasereturnsFormbean.setUpdatedDate(new Date());
		}
		Purchasereturns obj=PurchasereturnsMapper.mapFormToDomain(PurchasereturnsFormbean);
		 obj= purchasereturnsrepository
				.save(obj);
		 List<StockInfo> previousStockInfoList = stockInfoRepository.findByDocNo1(obj.getDocNo());
			
			
			/*List<Integer> productIds = new ArrayList<>();
			for (PurchaseInvoiveDet e : obj.getPurchaseInvoiveDetList()) productIds.add(e.getId());*/
			if (previousStockInfoList.size() > 0) {
				StockObjects stockUpdateObj=stockUpdate(previousStockInfoList,obj);
				StockObjects stockObjects =stockInsert(stockUpdateObj.getPurchasereturns());
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
	public List<PurchasereturnsFormbean> getAllPurchasereturns(ServerSidePagination serverSidePagination) {
		// TODO Auto-generated method stub
		Page<Purchasereturns> purchasereturnsList = null;
		purchasereturnsrepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(","))
				.mapToInt(Integer::parseInt).toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		purchasereturnsList = purchasereturnsrepository.findByLocationAll(list, requestedPage);
		// PurchasereturnsRepository.findAll(example, requestedPage)
		return PurchasereturnsMapper.mapDomainListToFormList(purchasereturnsList.toList());
	}

	@Override
	public List<PurchasereturnsFormbean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		PurchaseReturnSpecification msTitleRating = new PurchaseReturnSpecification();
		msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(), searchCriteriaFormBean.getValue(),
				SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
		// msTitleRating.add(new SearchCriteria("rating", 7,
		// SearchOperation.GREATER_THAN));
		List<Purchasereturns> purchasereturnsList = purchasereturnsrepository.findAll(msTitleRating);
		// List<Purchasereturns> PurchasereturnsList =
		// PurchasereturnsRepository.findByWhereCondition(where);
		return PurchasereturnsMapper.mapDomainListToFormList(purchasereturnsList);
	}
	
	public StockObjects stockInsert(Purchasereturns obj) {
		StockObjects stockObjests= new StockObjects();
		// int i= stockInfoRepository.deleteRowsByDocNo(obj.getDocNo());
		List<StockInfo> stockInfoList = new ArrayList<>();
		HashMap<Integer, BigDecimal> prodQty = new HashMap<Integer, BigDecimal>();
		HashMap<Integer, BigDecimal> prodCumQty = new HashMap<Integer, BigDecimal>();
		List<Integer> ids = new ArrayList<>();
		// obj.getPurchaseInvoiveDetList().stream().map(entity->ids.add(entity.getProductId()));
		for (PurchasereturnsDetail sd : obj.getPurchaseInvoiveDetList()) {
			StockInfo stockInfo = new StockInfo();
			stockInfo.setBaseId(obj.getId());
			stockInfo.setDetailId(sd.getId());
			stockInfo.setScreenId(18);
			stockInfo.setTxnId(51);
			stockInfo.setDocDt(obj.getDocDt());
			stockInfo.setDocNo(obj.getDocNo());
			stockInfo.setBatchNo("0");
			stockInfo.setTxnFunction("MINUS");
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
	public StockObjects stockUpdate(List<StockInfo> previousStockInfoList,Purchasereturns obj) {
		StockObjects stockObjests= new StockObjects();
		Purchasereturns newProducts= new Purchasereturns();
		//List<StockInfo> previousProductsList=  new ArrayList<>();
		//previousProductsList=previousStockInfoList1;
		List<StockInfo> stockInfoProductListLastRowTrue = new ArrayList<>();
		List<Integer> ids = new ArrayList<>();
		List<PurchasereturnsDetail> stockInfoInsertList= new ArrayList<PurchasereturnsDetail>();
		newProducts=obj;
		 List<StockInfo> stockInfoUpdateList = new ArrayList<StockInfo>();
		 List<StockInfo> stockInfoDeleteList= new ArrayList<StockInfo>();
		 HashMap<Integer, PurchasereturnsDetail> purchasMap = new HashMap<Integer, PurchasereturnsDetail>();
			HashMap<Integer, StockInfo> stockMap = new HashMap<Integer, StockInfo>();
			HashMap<Integer, BigDecimal> stockMap1 = new HashMap<Integer, BigDecimal>();
			for (PurchasereturnsDetail purchaseInvoiveDet : obj.getPurchaseInvoiveDetList()) {
				purchasMap.put(purchaseInvoiveDet.getProductId(), purchaseInvoiveDet);
			}
			for (StockInfo preStock : previousStockInfoList) {
				stockMap.put(preStock.getProductId(),preStock );
				stockMap1.put(preStock.getProductId(),preStock.getQty());
				}
			
			
			
		for (PurchasereturnsDetail purchaseInvoiveDet : obj.getPurchaseInvoiveDetList()) {
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
		newProducts.setPurchaseInvoiveDetList(stockInfoInsertList);
		stockObjests.setPurchasereturns(newProducts);
		stockObjests.setStockInfoUpdateList(stockInfoUpdateList);
		return stockObjests;
	}


}
