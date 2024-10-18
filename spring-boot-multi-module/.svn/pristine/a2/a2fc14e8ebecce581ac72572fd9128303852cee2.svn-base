package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model. PurchasereturnsFormbean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;;

@Service
public interface PurchasereturnsService {

	public List< PurchasereturnsFormbean> getAllPurchasereturns();
	
	List< PurchasereturnsFormbean> getAllPurchasereturns(ServerSidePagination serverSidePagination);
	List<PurchasereturnsFormbean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);

	public String savePurchasereturns( PurchasereturnsFormbean  PurchasereturnsFormbean);
}

