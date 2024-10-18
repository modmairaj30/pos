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
import com.webapp.apis.transactions.domain.Invoice;
import com.webapp.apis.transactions.domain.InvoiceDet;
import com.webapp.apis.transactions.domain.StockInfo;
import com.webapp.apis.transactions.mapper.InvoiceMapper;
import com.webapp.apis.transactions.model.InvoiceFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.repository.InvoiceRepository;
import com.webapp.apis.transactions.repository.StockInfoRepository;
import com.webapp.apis.transactions.repository.specs.InvoiceSpecification;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.service.InvoiceService;
import com.webapp.apis.transactions.utility.StockUpdate;
import com.webapp.apis.utility.SessionUtility;

@Service
public class InvoiceServiceImpl implements InvoiceService {

	private static final Logger LOGGER = LoggerFactory.getLogger(InvoiceServiceImpl.class);
	
	@Inject
	private StockInfoRepository stockInfoRepository;
	@Inject
	private TblAutoNumberLocationRepository tblAutoNumberLocationRepository;
	
	@Inject
	private InvoiceRepository invoiceRepository;
	
	@Inject
	private SessionUtility sessionUtility;
	
	@Inject
	private StockUpdate stockUpdate;
	
	@Override
	public List<InvoiceFormBean> getAllInvoice(){
		List<Invoice> listCreditTeriffmaster = invoiceRepository.findAllByOrderByIdAsc();
		return InvoiceMapper.mapDomainListToFormList(listCreditTeriffmaster);

	}

	@Transactional
	@Override
	public String saveInvoice(InvoiceFormBean invoiceFormBean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (invoiceFormBean.getId() == null) {
			TblAutonumberLocation autoNumber=	 tblAutoNumberLocationRepository.findByTxnIdAndLocationId(18,invoiceFormBean.getLocationId());
			invoiceFormBean.setDocNo(autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			invoiceFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			invoiceFormBean.setCreatedDate(new Date());
			tblAutoNumberLocationRepository.updateNumber(18,invoiceFormBean.getLocationId());
		} else {
			invoiceFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			invoiceFormBean.setUpdatedDate(new Date());
		}

		Invoice obj = invoiceRepository
				.save(InvoiceMapper.mapFormToDomain(invoiceFormBean));
		stockInfoRepository.deleteRowsByDocNo(obj.getDocNo());
		List<StockInfo> stockInfoList = new ArrayList<>();
		HashMap<Integer, BigDecimal> prodQty = new HashMap<Integer, BigDecimal>();
		HashMap<Integer, BigDecimal> prodCumQty = new HashMap<Integer, BigDecimal>();
		List<Integer> ids = new ArrayList<>();
		// obj.getPurchaseInvoiveDetList().stream().map(entity->ids.add(entity.getProductId()));
		for (InvoiceDet sd : obj.getInvoiceDetList()) {
			StockInfo stockInfo = new StockInfo();
			stockInfo.setBaseId(obj.getId());
			stockInfo.setDetailId(sd.getId());
			stockInfo.setScreenId(16);
			stockInfo.setTxnId(18);
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
			//stockInfo.setCumQty(sd.getQty());
			stockInfo.setRate(sd.getRate());
			// stockInfo.setFldBin(sd.getFldBin());
			ids.add(sd.getProductId());
			prodQty.put(sd.getProductId(), sd.getQty());
			// prodRate.put(sd.getProductId(), sd.getRate());
			stockInfoList.add(stockInfo);

		}
		List<StockInfo> stockInfoProductListLastRowFalse = new ArrayList<>();
		stockInfoProductListLastRowFalse = stockInfoRepository.getStockProductsLastRowTrue(ids, obj.getLocationId());

		for (StockInfo obj1 : stockInfoProductListLastRowFalse) {
			BigDecimal qty = obj1.getCumQty().subtract(prodQty.get(obj1.getProductId()));

			prodCumQty.put(obj1.getProductId(), qty);
			obj1.setLastRow("FALSE");
		}
		
		stockInfoRepository.saveAll(stockInfoProductListLastRowFalse);
		
		for (StockInfo obj2 : stockInfoList) {
			if(prodCumQty.get(obj2.getProductId())!=null)
			obj2.setCumQty(prodCumQty.get(obj2.getProductId()));
			
		}
		stockInfoRepository.saveAll(stockInfoList);

		if (obj != null) {
			return TransactionConstants.SAVE;
		}
		return TransactionConstants.FAIL;
	}

	@Override
	public List<InvoiceFormBean> getAllInvoice(ServerSidePagination serverSidePagination) {
		// TODO Auto-generated method stub
		Page<Invoice> invoiceList = null;
		invoiceRepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(",")).mapToInt(Integer::parseInt)
				.toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		
		invoiceList = invoiceRepository.findByLocationAll(list,requestedPage);
		
		return InvoiceMapper.mapDomainListToFormList(invoiceList.toList());
	}

	@Override
	public List<InvoiceFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		InvoiceSpecification msTitleRating = new InvoiceSpecification();
         msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
        // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
         List<Invoice> invoiceList = invoiceRepository.findAll(msTitleRating);
		//List<StockVerification> stockVerificationList = stockVerificationRepository.findByWhereCondition(where);
		return InvoiceMapper.mapDomainListToFormList(invoiceList);
	}

	

	
	
	
	

	
	

}
