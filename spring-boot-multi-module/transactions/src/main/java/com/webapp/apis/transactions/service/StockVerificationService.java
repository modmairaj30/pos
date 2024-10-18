package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockVerificationFormBean;;

@Service
public interface StockVerificationService {

	public List<StockVerificationFormBean> getAllStockVerification();
	
	List<StockVerificationFormBean> getAllStockVerification(ServerSidePagination serverSidePagination);
	List<StockVerificationFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	public String saveStockVerification(StockVerificationFormBean stockVerificationFormBean);
	
	public String saveS();

}
