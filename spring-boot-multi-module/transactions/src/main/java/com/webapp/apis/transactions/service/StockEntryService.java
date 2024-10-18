package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockEntryFormBean;;

@Service
public interface StockEntryService {

	public List<StockEntryFormBean> getAllStockEntry();
	
	List<StockEntryFormBean> getAllStockEntry(ServerSidePagination serverSidePagination);
	List<StockEntryFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	public String saveStockEntry(StockEntryFormBean StockEntryFormBean);

}
