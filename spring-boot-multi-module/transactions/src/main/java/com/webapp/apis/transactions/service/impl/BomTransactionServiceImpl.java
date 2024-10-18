package com.webapp.apis.transactions.service.impl;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.domian.TblAutoNumber;
import com.webapp.apis.domian.TblAutonumberLocation;
import com.webapp.apis.repository.TblAutoNumberLocationRepository;
import com.webapp.apis.repository.TblAutoNumberRepository;
import com.webapp.apis.transaction.constants.TransactionConstants;
import com.webapp.apis.transactions.domain.BomTransaction;
import com.webapp.apis.transactions.mapper.BomTransactionMapper;
import com.webapp.apis.transactions.model.BomTransactionFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.repository.BomTransactionRepository;
import com.webapp.apis.transactions.repository.specs.BomTransactionSpecification;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.service.BomTransactionService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class BomTransactionServiceImpl implements BomTransactionService {

	private static final Logger LOGGER = LoggerFactory.getLogger(BomTransactionServiceImpl.class);
	@Inject
	private BomTransactionRepository BomTransactionRepository;

	@Inject
	private TblAutoNumberLocationRepository tblAutoNumberLocationRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<BomTransactionFormBean> getAllBomTransaction(ServerSidePagination serverSidePagination) {

		Page<BomTransaction> BomTransaction = null;
		// Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(),
		// serverSidePagination.getSize(), Sort.by("id").descending());
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize());
		BomTransaction = BomTransactionRepository.findAllByOrderByIdDesc(requestedPage);

		return BomTransactionMapper.mapDomainListToFormList(BomTransaction.getContent());
	}

	@Transactional
	@Override
	public BomTransactionFormBean saveBomTransaction(BomTransactionFormBean BomTransactionFormBean) {
		if (BomTransactionFormBean.getId() == null) {
			
			BomTransactionFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			BomTransactionFormBean.setCreatedDate(new Date());
			BomTransactionFormBean.setBillDt(new Date());
			TblAutonumberLocation autoNumber=	 tblAutoNumberLocationRepository.findByTxnIdAndLocationId(1111,1);
			BomTransactionFormBean.setBillNo(autoNumber.getPrefix() + autoNumber.getNumber() + autoNumber.getSuffix());
			tblAutoNumberLocationRepository.updateNumber(1111,1);
		} else {
			BomTransactionFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			BomTransactionFormBean.setUpdatedDate(new Date());
		}
		BomTransaction BomTransaction = BomTransactionRepository
				.save(BomTransactionMapper.mapFormToDomain(BomTransactionFormBean));
		

		if (BomTransaction != null) {
			return BomTransactionMapper.mapDomainToForm(BomTransaction);
		}
		return null;
	}

	@Override
	public List<BomTransactionFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		BomTransactionSpecification msBomRating = new BomTransactionSpecification();
		msBomRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(), searchCriteriaFormBean.getValue(),
				SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
		// msBomRating.add(new SearchCriteria("rating", 7,
		// SearchOperation.GREATER_THAN));
		List<BomTransaction> BomTransactionList = BomTransactionRepository.findAll(msBomRating);
		// List<BomTransaction> BomTransactionList =
		// BomTransactionRepository.findByWhereCondition(where);

		return BomTransactionMapper.mapDomainListToFormList(BomTransactionList);
	}

}
