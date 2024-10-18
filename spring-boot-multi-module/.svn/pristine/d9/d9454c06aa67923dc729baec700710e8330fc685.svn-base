package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model.InvoiceFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockVerificationFormBean;

@Service
public interface InvoiceService {

	
	public List<InvoiceFormBean> getAllInvoice();

	List<InvoiceFormBean> getAllInvoice(ServerSidePagination serverSidePagination);
	List<InvoiceFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	public String saveInvoice(InvoiceFormBean invoiceFormBean);
	
}
