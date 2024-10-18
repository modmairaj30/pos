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
import com.webapp.apis.transactions.domain.Payments;
import com.webapp.apis.transactions.mapper.PaymentsMapper;
import com.webapp.apis.transactions.model.PaymentsFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.repository.PaymentsRepository;
import com.webapp.apis.transactions.repository.specs.PaymentSpecification;
import com.webapp.apis.transactions.repository.specs.SearchCriteria;
import com.webapp.apis.transactions.repository.specs.SearchOperation;
import com.webapp.apis.transactions.service.PaymentsService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class PaymentsServiceImpl implements PaymentsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(PaymentsServiceImpl.class);
	@Inject
	private PaymentsRepository PaymentsRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Inject
	private TblAutoNumberRepository tblAutoNumberRepository;

	@Override
	public List<PaymentsFormBean> getAllPayments() {
		List<Payments> listCreditTeriffmaster = PaymentsRepository.findAllByOrderByIdDesc();
		return Payments.mapDomainListToFormList(listCreditTeriffmaster);

	}

	@Transactional
	@Override
	public String savePayments(PaymentsFormBean paymentsFormBean) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		if (paymentsFormBean.getId() == null) {

			TblAutoNumber autoNumber = tblAutoNumberRepository.findByTxnId(13280);
			paymentsFormBean.setDocNo(autoNumber.getPrefix() + autoNumber.getNumber() + autoNumber.getSuffix());
			paymentsFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());

			paymentsFormBean.setCreatedDate(new Date());
			tblAutoNumberRepository.updateNumber(13280);
		} else {
			paymentsFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			paymentsFormBean.setUpdatedDate(new Date());
		}

		Payments obj = PaymentsRepository.save(PaymentsMapper.mapFormToDomain(paymentsFormBean));

		if (obj != null) {
			return TransactionConstants.SAVE;
		}
		return TransactionConstants.FAIL;
	}

	@Override
	public List<PaymentsFormBean> getAllPayments(ServerSidePagination serverSidePagination) {
		// TODO Auto-generated method stub
		Page<Payments> paymentsList = null;
		PaymentsRepository.findAllByOrderByIdAsc();
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize(),
				Sort.by("id").descending());
		int[] locationids = Arrays.stream(sessionUtility.getUserSession().getLocation().split(","))
				.mapToInt(Integer::parseInt).toArray();
		List<Integer> list = Arrays.stream(locationids).boxed().collect(Collectors.toList());
		paymentsList = PaymentsRepository.findByLocationAll(list, requestedPage);
		// stockVerificationRepository.findAll(example, requestedPage)
		return PaymentsMapper.mapDomainListToFormList(paymentsList.toList());
	}
	
	@Override
	public List<PaymentsFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		PaymentSpecification msTitleRating = new PaymentSpecification();
        msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
       // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
        List<Payments> PaymentsList = PaymentsRepository.findAll(msTitleRating);
		//List<PurchaseInvoive> PurchaseInvoiveList = PurchaseInvoiveRepository.findByWhereCondition(where);
		return PaymentsMapper.mapDomainListToFormList(PaymentsList);
	}

}
