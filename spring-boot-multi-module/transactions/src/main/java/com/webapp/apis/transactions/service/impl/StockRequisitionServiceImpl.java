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
import com.webapp.apis.transactions.domain.StockInfo;
import com.webapp.apis.transactions.domain.StockRequisition;
import com.webapp.apis.transactions.domain.StockRequisitionDetail;
import com.webapp.apis.transactions.mapper.StockRequisitionMapper;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockRequisitionFormBean;
import com.webapp.apis.transactions.repository.StockInfoRepository;
import com.webapp.apis.transactions.repository.StockRequisitionRepository;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.repository.specs.StockRequisitionSpecification;
import com.webapp.apis.transactions.service.StockRequisitionService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class StockRequisitionServiceImpl implements StockRequisitionService {

	private static final Logger LOGGER = LoggerFactory.getLogger(StockRequisitionServiceImpl.class);
	@Inject
	private StockRequisitionRepository StockRequisitionRepository;
	@Inject
	private TblAutoNumberLocationRepository tblAutoNumberLocationRepository;
	

	@Inject
	private StockInfoRepository stockInfoRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<StockRequisitionFormBean> getAllStockRequisition() {
		List<StockRequisition> listCreditTeriffmaster = StockRequisitionRepository.findAllByOrderByIdAsc();
		return StockRequisitionMapper.mapDomainListToFormList(listCreditTeriffmaster);

	}

	@Transactional
	@Override
	public String saveStockRequisition(StockRequisitionFormBean StockRequisitionFormBean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (StockRequisitionFormBean.getId() == null) {
			TblAutonumberLocation autoNumber=	 tblAutoNumberLocationRepository.findByTxnIdAndLocationId(13304,StockRequisitionFormBean.getLocationId());
			StockRequisitionFormBean.setDocNo(autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			StockRequisitionFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			StockRequisitionFormBean.setCreatedDate(new Date());
			tblAutoNumberLocationRepository.updateNumber(13304,StockRequisitionFormBean.getLocationId());
		} else {
			StockRequisitionFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			StockRequisitionFormBean.setUpdatedDate(new Date());
		}
		
		StockRequisition obj = StockRequisitionRepository
				.save(StockRequisitionMapper.mapFormToDomain(StockRequisitionFormBean));
				
		
		if(obj != null) {
			return TransactionConstants.SAVE;
			}
			return TransactionConstants.FAIL;
	}

	@Override
	public List<StockRequisitionFormBean> getAllStockRequisition(ServerSidePagination serverSidePagination) {
		// TODO Auto-generated method stub
		Page<StockRequisition> StockRequisitionList = null;
		StockRequisitionRepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(",")).mapToInt(Integer::parseInt)
				.toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		StockRequisitionList = StockRequisitionRepository.findByLocationAll(list, requestedPage);
		// StockRequisitionRepository.findAll(example, requestedPage)
		return StockRequisitionMapper.mapDomainListToFormList(StockRequisitionList.toList());
	}

	@Override
	public List<StockRequisitionFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		StockRequisitionSpecification msTitleRating = new StockRequisitionSpecification();
         msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
        // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
         List<StockRequisition> StockRequisitionList = StockRequisitionRepository.findAll(msTitleRating);
		//List<StockRequisition> StockRequisitionList = StockRequisitionRepository.findByWhereCondition(where);
		return StockRequisitionMapper.mapDomainListToFormList(StockRequisitionList);
	}

}
