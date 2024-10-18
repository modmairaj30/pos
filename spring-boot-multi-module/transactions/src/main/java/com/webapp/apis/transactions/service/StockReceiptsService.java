package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockReceiptsFormBean;;

@Service
public interface StockReceiptsService {

	public List<StockReceiptsFormBean> getAllStockReceipts();
	
	List<StockReceiptsFormBean> getAllStockReceipts(ServerSidePagination serverSidePagination);
	List<StockReceiptsFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	public String saveStockReceipts(StockReceiptsFormBean StockReceiptsFormBean);

}
