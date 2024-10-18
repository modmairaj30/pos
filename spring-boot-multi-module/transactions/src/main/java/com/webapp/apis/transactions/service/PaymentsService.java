package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model.PaymentsFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;

@Service
public interface PaymentsService {

	public List<PaymentsFormBean> getAllPayments();
	
	List<PaymentsFormBean> getAllPayments(ServerSidePagination serverSidePagination);
	List<PaymentsFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	public String savePayments(PaymentsFormBean PaymentsFormBean);

}
