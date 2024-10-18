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
import com.webapp.apis.transactions.domain.Stocktransfers;
import com.webapp.apis.transactions.domain.StocktransfersDetail;
import com.webapp.apis.transactions.mapper.StocktransfersMapper;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockObjects;
import com.webapp.apis.transactions.model.StocktransfersFormBean;
import com.webapp.apis.transactions.repository.StockInfoRepository;
import com.webapp.apis.transactions.repository.StocktransfersRepository;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.repository.specs.StockTransferSpecification;
import com.webapp.apis.transactions.service.StocktransfersService;
import com.webapp.apis.transactions.utility.StockUpdate;
import com.webapp.apis.utility.SessionUtility;

@Service
public class StocktransfersServiceImpl implements StocktransfersService {
	private static final Logger LOGGER = LoggerFactory.getLogger(StocktransfersServiceImpl.class);
	@Inject
	private StocktransfersRepository stocktransfersRepository;
	@Inject
	private TblAutoNumberLocationRepository tblAutoNumberLocationRepository;
	

	@Inject
	private StockInfoRepository stockInfoRepository;
	
	@Inject
	private SessionUtility sessionUtility;
	@Inject
	private StockUpdate stockUpdate;
	@Override
	public List<StocktransfersFormBean> getAllStocktransfers() {
		List<Stocktransfers> listCreditTeriffmaster = stocktransfersRepository.findAllByOrderByIdAsc();
		return StocktransfersMapper.mapDomainListToFormList(listCreditTeriffmaster);

	}
	
	
	@Transactional
	@Override
	public String saveStocktransfers(StocktransfersFormBean StocktransfersFormBean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (StocktransfersFormBean.getId() == null) {
			TblAutonumberLocation autoNumber=	 tblAutoNumberLocationRepository.findByTxnIdAndLocationId(70,StocktransfersFormBean.getLocationId());
			StocktransfersFormBean.setDocNo(autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			StocktransfersFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			StocktransfersFormBean.setCreatedDate(new Date());
			tblAutoNumberLocationRepository.updateNumber(70,StocktransfersFormBean.getLocationId());
		} else {
			StocktransfersFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			StocktransfersFormBean.setUpdatedDate(new Date());
		}
		StocktransfersFormBean.setVerifiedBy(sessionUtility.getUserSession().getUsername());
		StocktransfersFormBean.setUserId(sessionUtility.getUserSession().getUsername());
		Stocktransfers obj = stocktransfersRepository
				.save(StocktransfersMapper.mapFormToDomain(StocktransfersFormBean));
		List<StockInfo> previousStockInfoList = stockInfoRepository.findByDocNo1(obj.getDocNo());
				
		
		/*List<Integer> productIds = new ArrayList<>();
		for (StocktransfersDetail e : obj.getStocktransfersDetailList()) productIds.add(e.getId());*/
		if (previousStockInfoList.size() > 0) {
			StockObjects stockUpdateObj=stockUpdate(previousStockInfoList,obj);
			StockObjects stockObjects =stockInsert(stockUpdateObj.getStockTransfers());
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

		if(obj != null) {
			stockInsert(obj);
			return TransactionConstants.SAVE;
			}
			return TransactionConstants.FAIL;
	}
	
	
	@Override
	public List<StocktransfersFormBean> getAllStocktransfers(ServerSidePagination serverSidePagination) {
		
		Page<Stocktransfers> stocktransfersList = null;
		stocktransfersRepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(",")).mapToInt(Integer::parseInt)
				.toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		stocktransfersList = stocktransfersRepository.findByLocationAll(list, requestedPage);
		return StocktransfersMapper.mapDomainListToFormList(stocktransfersList.toList());
	}

	@Override
	public List<StocktransfersFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		StockTransferSpecification msTitleRating = new StockTransferSpecification();
         msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
        // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
         List<Stocktransfers> stockTransferList = stocktransfersRepository.findAll(msTitleRating);
		//List<stockTransferList> stockTransferList = stockVerificationRepository.findByWhereCondition(where);
		return StocktransfersMapper.mapDomainListToFormList(stockTransferList);
	}
	
	public StockObjects stockInsert(Stocktransfers obj) {
		StockObjects stockObjests= new StockObjects();
		// int i= stockInfoRepository.deleteRowsByDocNo(obj.getDocNo());
		List<StockInfo> stockInfoList = new ArrayList<>();
		HashMap<Integer, BigDecimal> prodQty = new HashMap<Integer, BigDecimal>();
		HashMap<Integer, BigDecimal> prodCumQty = new HashMap<Integer, BigDecimal>();
		List<Integer> ids = new ArrayList<>();
		// obj.getStocktransfersDetailList().stream().map(entity->ids.add(entity.getProductId()));
		for (StocktransfersDetail sd : obj.getStocktransfersDetailList()) {
			StockInfo stockInfo = new StockInfo();
			stockInfo.setBaseId(obj.getId());
			stockInfo.setDetailId(sd.getId());
			stockInfo.setScreenId(28);
			stockInfo.setTxnId(70);
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

	public StockObjects stockUpdate(List<StockInfo> previousStockInfoList,Stocktransfers obj) {
		StockObjects stockObjests= new StockObjects();
		Stocktransfers newProducts= new Stocktransfers();
		//List<StockInfo> previousProductsList=  new ArrayList<>();
		//previousProductsList=previousStockInfoList1;
		List<StockInfo> stockInfoProductListLastRowTrue = new ArrayList<>();
		List<Integer> ids = new ArrayList<>();
		List<StocktransfersDetail> stockInfoInsertList= new ArrayList<StocktransfersDetail>();
		newProducts=obj;
		 List<StockInfo> stockInfoUpdateList = new ArrayList<StockInfo>();
		 List<StockInfo> stockInfoDeleteList= new ArrayList<StockInfo>();
		 HashMap<Integer, StocktransfersDetail> purchasMap = new HashMap<Integer, StocktransfersDetail>();
			HashMap<Integer, StockInfo> stockMap = new HashMap<Integer, StockInfo>();
			HashMap<Integer, BigDecimal> stockMap1 = new HashMap<Integer, BigDecimal>();
			for (StocktransfersDetail stocktransfersDetail : obj.getStocktransfersDetailList()) {
				purchasMap.put(stocktransfersDetail.getProductId(), stocktransfersDetail);
			}
			for (StockInfo preStock : previousStockInfoList) {
				stockMap.put(preStock.getProductId(),preStock );
				stockMap1.put(preStock.getProductId(),preStock.getQty());
				}
			
			
			
		for (StocktransfersDetail stocktransfersDetail : obj.getStocktransfersDetailList()) {
		if(stockMap.containsKey(stocktransfersDetail.getProductId())) {
			StockInfo stockInfo=stockMap.get(stocktransfersDetail.getProductId());
			stockInfo.setQty(stocktransfersDetail.getQty());
			//stockInfo.setCumQty(sd.getQty());
			stockInfo.setRate(stocktransfersDetail.getRate());
			ids.add(stockInfo.getProductId());
			stockInfoUpdateList.add(stockInfo);
		}
		else {
			
			stockInfoInsertList.add(stocktransfersDetail);
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
		newProducts.setStocktransfersDetailList(stockInfoInsertList);
		stockObjests.setStockTransfers(newProducts);
		stockObjests.setStockInfoUpdateList(stockInfoUpdateList);
		return stockObjests;
	}

}
