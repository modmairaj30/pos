package com.webapp.apis.transactions.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
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
import com.webapp.apis.transactions.domain.StockEntry;
import com.webapp.apis.transactions.domain.StockInfo;
import com.webapp.apis.transactions.domain.StockentryDetail;
import com.webapp.apis.transactions.mapper.StockEntryMapper;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockEntryFormBean;
import com.webapp.apis.transactions.repository.StockEntryRepository;
import com.webapp.apis.transactions.repository.StockInfoRepository;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.repository.specs.StockEntrySpecification;
import com.webapp.apis.transactions.service.StockEntryService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class StockEntryServiceImpl implements StockEntryService {

	private static final Logger LOGGER = LoggerFactory.getLogger(StockEntryServiceImpl.class);
	@Inject
	private StockEntryRepository StockEntryRepository;
	@Inject
	private TblAutoNumberLocationRepository tblAutoNumberLocationRepository;
	

	@Inject
	private StockInfoRepository stockInfoRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<StockEntryFormBean> getAllStockEntry() {
		List<StockEntry> listCreditTeriffmaster = StockEntryRepository.findAllByOrderByIdAsc();
		return StockEntryMapper.mapDomainListToFormList(listCreditTeriffmaster);

	}

	@Transactional
	@Override
	public String saveStockEntry(StockEntryFormBean StockEntryFormBean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (StockEntryFormBean.getId() == null) {
			TblAutonumberLocation autoNumber=	 tblAutoNumberLocationRepository.findByTxnIdAndLocationId(13304,StockEntryFormBean.getLocationId());
			StockEntryFormBean.setDocNo(autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			StockEntryFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			StockEntryFormBean.setCreatedDate(new Date());
			tblAutoNumberLocationRepository.updateNumber(13304,StockEntryFormBean.getLocationId());
		} else {
			StockEntryFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			StockEntryFormBean.setUpdatedDate(new Date());
		}
		
		StockEntry obj = StockEntryRepository
				.save(StockEntryMapper.mapFormToDomain(StockEntryFormBean));
		stockInfoRepository.deleteRowsByDocNo(obj.getDocNo());
		List<StockInfo> stockInfoList = new ArrayList<>();
		
		for (StockentryDetail sd : obj.getStockEntryDetailList()) {
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
	public List<StockEntryFormBean> getAllStockEntry(ServerSidePagination serverSidePagination) {
		// TODO Auto-generated method stub
		Page<StockEntry> StockEntryList = null;
		StockEntryRepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(",")).mapToInt(Integer::parseInt)
				.toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		StockEntryList = StockEntryRepository.findByLocationAll(list, requestedPage);
		// StockEntryRepository.findAll(example, requestedPage)
		return StockEntryMapper.mapDomainListToFormList(StockEntryList.toList());
	}

	@Override
	public List<StockEntryFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		StockEntrySpecification msTitleRating = new StockEntrySpecification();
         msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
        // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
         List<StockEntry> StockEntryList = StockEntryRepository.findAll(msTitleRating);
		//List<StockEntry> StockEntryList = StockEntryRepository.findByWhereCondition(where);
		return StockEntryMapper.mapDomainListToFormList(StockEntryList);
	}

}
