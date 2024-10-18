package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model.PurchaseInvoiveFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;;

@Service
public interface PurchaseInvoiceService {

	public List<PurchaseInvoiveFormBean> getAllPurchaseInvoive();
	
	List<PurchaseInvoiveFormBean> getAllPurchaseInvoive(ServerSidePagination serverSidePagination);
	List<PurchaseInvoiveFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	public String savePurchaseInvoive(PurchaseInvoiveFormBean PurchaseInvoiveFormBean);

	

}
