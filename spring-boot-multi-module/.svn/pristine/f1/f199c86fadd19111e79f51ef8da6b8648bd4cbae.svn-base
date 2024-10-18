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
import com.webapp.apis.transactions.domain.Purchasereturns;
import com.webapp.apis.transactions.domain.PurchasereturnsDetail;
import com.webapp.apis.transactions.domain.StockInfo;
import com.webapp.apis.transactions.domain.StockReceipts;
import com.webapp.apis.transactions.domain.StockReceiptsDet;

import com.webapp.apis.transactions.mapper.StockReceiptsMapper;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockObjects;
import com.webapp.apis.transactions.model.StockReceiptsFormBean;
import com.webapp.apis.transactions.repository.StockInfoRepository;
import com.webapp.apis.transactions.repository.StockReceiptsRepository;

import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.repository.specs.StockReceiptsSpecification;
import com.webapp.apis.transactions.service.StockReceiptsService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class StockReceiptsServiceImpl implements StockReceiptsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(StockReceiptsServiceImpl.class);
	@Inject
	private StockReceiptsRepository stockReceiptsRepository;
	@Inject
	private TblAutoNumberLocationRepository tblAutoNumberLocationRepository;
	

	@Inject
	private StockInfoRepository stockInfoRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<StockReceiptsFormBean> getAllStockReceipts() {
		List<StockReceipts> listCreditTeriffmaster = stockReceiptsRepository.findAllByOrderByIdAsc();
		return StockReceiptsMapper.mapDomainListToFormList(listCreditTeriffmaster);

	}

	@Transactional
	@Override
	public String saveStockReceipts(StockReceiptsFormBean stockReceiptsFormBean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (stockReceiptsFormBean.getId() == null) {
			TblAutonumberLocation autoNumber=	 tblAutoNumberLocationRepository.findByTxnIdAndLocationId(13310,stockReceiptsFormBean.getLocationId());
			stockReceiptsFormBean.setDocNo(autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			stockReceiptsFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			stockReceiptsFormBean.setCreatedDate(new Date());
			tblAutoNumberLocationRepository.updateNumber(13310,stockReceiptsFormBean.getLocationId());
		} else {
			stockReceiptsFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			stockReceiptsFormBean.setUpdatedDate(new Date());
		}
		StockReceipts obj = stockReceiptsRepository
				.save(StockReceiptsMapper.mapFormToDomain(stockReceiptsFormBean));
		
		StockObjects stockObjects =stockInsert(obj);
		if(stockObjects.getStockInfoProductListLastRowFalse()!=null)
		stockInfoRepository.saveAll(stockObjects.getStockInfoProductListLastRowFalse());
		if(stockObjects.getStockInfoList()!=null)
		stockInfoRepository.saveAll(stockObjects.getStockInfoList());
		
		if(obj != null) {
			
			return TransactionConstants.SAVE;
			}
			return TransactionConstants.FAIL;
	}

	@Override
	public List<StockReceiptsFormBean> getAllStockReceipts(ServerSidePagination serverSidePagination) {
		// TODO Auto-generated method stub
		Page<StockReceipts> stockReceiptsList = null;
		stockReceiptsRepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(",")).mapToInt(Integer::parseInt)
				.toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		stockReceiptsList = stockReceiptsRepository.findByLocationAll(list, requestedPage);
		// stockReceiptsRepository.findAll(example, requestedPage)
		return StockReceiptsMapper.mapDomainListToFormList(stockReceiptsList.toList());
	}

	@Override
	public List<StockReceiptsFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		StockReceiptsSpecification msTitleRating = new StockReceiptsSpecification();
         msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
        // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
         List<StockReceipts> stockReceiptsList = stockReceiptsRepository.findAll(msTitleRating);
		//List<StockReceipts> stockReceiptsList = stockReceiptsRepository.findByWhereCondition(where);
		return StockReceiptsMapper.mapDomainListToFormList(stockReceiptsList);
	}
	
	public StockObjects stockInsert(StockReceipts obj) {
		StockObjects stockObjests= new StockObjects();
		// int i= stockInfoRepository.deleteRowsByDocNo(obj.getDocNo());
		List<StockInfo> stockInfoList = new ArrayList<>();
		HashMap<Integer, BigDecimal> prodQty = new HashMap<Integer, BigDecimal>();
		HashMap<Integer, BigDecimal> prodCumQty = new HashMap<Integer, BigDecimal>();
		List<Integer> ids = new ArrayList<>();
		// obj.getPurchaseInvoiveDetList().stream().map(entity->ids.add(entity.getProductId()));
		for (StockReceiptsDet sd : obj.getStocktransfersDetailList()) {
			StockInfo stockInfo = new StockInfo();
			stockInfo.setBaseId(obj.getId());
			stockInfo.setDetailId(sd.getId());
			stockInfo.setScreenId(28);
			stockInfo.setTxnId(13310);
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


}
