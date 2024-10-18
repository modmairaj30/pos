package com.webapp.apis.transactions.service.impl;

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

import com.webapp.apis.domian.TblAutoNumber;
import com.webapp.apis.repository.TblAutoNumberRepository;
import com.webapp.apis.transaction.constants.TransactionConstants;
import com.webapp.apis.transactions.domain.Receipts;
import com.webapp.apis.transactions.mapper.ReceiptsMapper;
import com.webapp.apis.transactions.model.ReceiptsFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.repository.ReceiptsRepository;
import com.webapp.apis.transactions.repository.specs.ReceiptSpecification;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.service.ReceiptsService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class ReceiptsServiceImpl implements ReceiptsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ReceiptsServiceImpl.class);
	@Inject
	private ReceiptsRepository ReceiptsRepository;

	@Inject
	private TblAutoNumberRepository tblAutoNumberRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<ReceiptsFormBean> getAllReceipts() {
		List<Receipts> listCreditTeriffmaster = ReceiptsRepository.findAllByOrderByIdDesc();
		return Receipts.mapDomainListToFormList(listCreditTeriffmaster);

	}

	@Transactional
	@Override
	public String saveReceipts(ReceiptsFormBean receiptsFormBean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (receiptsFormBean.getId() == null) {

			TblAutoNumber autoNumber = tblAutoNumberRepository.findByTxnId(12531);
			receiptsFormBean.setDocNo(autoNumber.getPrefix() + autoNumber.getNumber() + autoNumber.getSuffix());
			receiptsFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());

			tblAutoNumberRepository.updateNumber(12531);
			receiptsFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			receiptsFormBean.setCreatedDate(new Date());
		} else {
			receiptsFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			receiptsFormBean.setUpdatedDate(new Date());
		}

		Receipts obj = ReceiptsRepository.save(ReceiptsMapper.mapFormToDomain(receiptsFormBean));

		if (obj != null) {
			return TransactionConstants.SAVE;
		}
		return TransactionConstants.FAIL;
	}

	@Override
	public List<ReceiptsFormBean> getAllReceipts(ServerSidePagination serverSidePagination) {

		// TODO Auto-generated method stub

		Page<Receipts> receiptsList = null;
		ReceiptsRepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(","))
				.mapToInt(Integer::parseInt).toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		receiptsList = ReceiptsRepository.findByLocationAll(list, requestedPage);
		// stockVerificationRepository.findAll(example, requestedPage)
		return ReceiptsMapper.mapDomainListToFormList(receiptsList.toList());
	}

	@Override
	public List<ReceiptsFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		ReceiptSpecification msTitleRating = new ReceiptSpecification();
        msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
       // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
        List<Receipts> receiptsList = ReceiptsRepository.findAll(msTitleRating);
		//List<PurchaseInvoive> PurchaseInvoiveList = PurchaseInvoiveRepository.findByWhereCondition(where);
		return ReceiptsMapper.mapDomainListToFormList(receiptsList);
	}

}
