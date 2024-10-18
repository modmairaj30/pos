package com.webapp.apis.transactions.service.impl;

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
import com.webapp.apis.masters.domain.PartyMaster;
import com.webapp.apis.masters.repository.PartyMasterRepository;
import com.webapp.apis.repository.TblAutoNumberLocationRepository;
import com.webapp.apis.transaction.constants.TransactionConstants;
import com.webapp.apis.transactions.domain.StockInfo;
import com.webapp.apis.transactions.domain.StockVerification;
import com.webapp.apis.transactions.domain.StockVerificationDetail;
import com.webapp.apis.transactions.mapper.StockVerificationMapper;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockVerificationFormBean;
import com.webapp.apis.transactions.repository.StockInfoRepository;
import com.webapp.apis.transactions.repository.StockVerificationRepository;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.repository.specs.StockVerificationSpecification;
import com.webapp.apis.transactions.service.StockVerificationService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class StockVerificationServiceImpl implements StockVerificationService {

	private static final Logger LOGGER = LoggerFactory.getLogger(StockVerificationServiceImpl.class);
	@Inject
	private StockVerificationRepository stockVerificationRepository;
	@Inject
	private TblAutoNumberLocationRepository tblAutoNumberLocationRepository;
	

	@Inject
	private StockInfoRepository stockInfoRepository;
	
	@Inject
	private PartyMasterRepository partyMasterRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<StockVerificationFormBean> getAllStockVerification() {
		List<StockVerification> listCreditTeriffmaster = stockVerificationRepository.findAllByOrderByIdAsc();
		return StockVerificationMapper.mapDomainListToFormList(listCreditTeriffmaster);

	}

	@Transactional
	@Override
	public String saveStockVerification(StockVerificationFormBean stockVerificationFormBean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (stockVerificationFormBean.getId() == null) {
			TblAutonumberLocation autoNumber=	 tblAutoNumberLocationRepository.findByTxnIdAndLocationId(13304,stockVerificationFormBean.getLocationId());
			stockVerificationFormBean.setDocNo(autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			stockVerificationFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			stockVerificationFormBean.setCreatedDate(new Date());
			tblAutoNumberLocationRepository.updateNumber(13304,stockVerificationFormBean.getLocationId());
		} else {
			stockVerificationFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			stockVerificationFormBean.setUpdatedDate(new Date());
		}
		stockVerificationFormBean.setVerifiedBy(sessionUtility.getUserSession().getUsername());
		stockVerificationFormBean.setUserId(sessionUtility.getUserSession().getUsername());
		StockVerification obj = stockVerificationRepository
				.save(StockVerificationMapper.mapFormToDomain(stockVerificationFormBean));
		stockInfoRepository.deleteRowsByDocNo(obj.getDocNo());
		List<StockInfo> stockInfoList = new ArrayList<>();
		
		for (StockVerificationDetail sd : obj.getStockVerificationDetailList()) {
			StockInfo stockInfo = new StockInfo();
			stockInfo.setBaseId(obj.getId());
			stockInfo.setDetailId(sd.getId());
			stockInfo.setScreenId(16);
			stockInfo.setTxnId(13304);
			stockInfo.setDocDt(obj.getDocDt());
			stockInfo.setDocNo(obj.getDocNo());
			stockInfo.setBatchNo("0");
			stockInfo.setTxnFunction("PLUS");
			stockInfo.setUserId(sessionUtility.getUserSession().getId());
			stockInfo.setLocationId(obj.getLocationId());
			stockInfo.setProductId(sd.getProductId());
			stockInfo.setProductCode(sd.getProductCode());
			stockInfo.setQty(sd.getQty());
			stockInfo.setRate(sd.getRate());
			stockInfo.setFldBin(sd.getFldBin());
			stockInfoList.add(stockInfo);

		}
		stockInfoRepository.saveAll(stockInfoList);

		if(obj != null) {
			return TransactionConstants.SAVE;
			}
			return TransactionConstants.FAIL;
	}

	@Override
	public List<StockVerificationFormBean> getAllStockVerification(ServerSidePagination serverSidePagination) {
		// TODO Auto-generated method stub
		Page<StockVerification> stockVerificationList = null;
		stockVerificationRepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(",")).mapToInt(Integer::parseInt)
				.toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		stockVerificationList = stockVerificationRepository.findByLocationAll(list, requestedPage);
		// stockVerificationRepository.findAll(example, requestedPage)
		return StockVerificationMapper.mapDomainListToFormList(stockVerificationList.toList());
	}

	@Override
	public List<StockVerificationFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		StockVerificationSpecification msTitleRating = new StockVerificationSpecification();
         msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
        // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
         List<StockVerification> stockVerificationList = stockVerificationRepository.findAll(msTitleRating);
		//List<StockVerification> stockVerificationList = stockVerificationRepository.findByWhereCondition(where);
		return StockVerificationMapper.mapDomainListToFormList(stockVerificationList);
	}
	@Transactional
	@Override
	public String saveS() {
		List<StockVerification> stockVerificationList = stockVerificationRepository.findAll();
		List<StockInfo> stockInfoList  =stockInfoRepository.findAll();
		List<PartyMaster> partyMasterRepositoryList  =partyMasterRepository.getPartyMaster();
		HashMap<String,Integer> partyHash= new HashMap<String,Integer>();
		for(PartyMaster party:partyMasterRepositoryList) {	
			partyHash.put(party.getPartyName(), party.getId());
		}
		for(StockVerification stockverif:stockVerificationList) {
			for(StockInfo stock:stockInfoList) {	
			if(stockverif.getDocNo()==stock.getDocNo()) {
				for(StockVerificationDetail d:stockverif.getStockVerificationDetailList()) {	
				if(d.getProductId()==stock.getPartyId()) {
					stockInfoRepository.updateStock(partyHash.get(d.getSupplier()),stockverif.getDocNo(),d.getProductId());
				}
				}	
				}
			}
		}
		
		return null;
	}

}
