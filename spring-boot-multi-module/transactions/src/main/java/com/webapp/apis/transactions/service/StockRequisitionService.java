package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockRequisitionFormBean;;

@Service
public interface StockRequisitionService {

	public List<StockRequisitionFormBean> getAllStockRequisition();
	
	List<StockRequisitionFormBean> getAllStockRequisition(ServerSidePagination serverSidePagination);
	List<StockRequisitionFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	public String saveStockRequisition(StockRequisitionFormBean StockRequisitionFormBean);

}
