package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model.ReceiptsFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;

@Service
public interface ReceiptsService {

	public List<ReceiptsFormBean> getAllReceipts();
	
	List<ReceiptsFormBean> getAllReceipts(ServerSidePagination serverSidePagination);
	List<ReceiptsFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	public String saveReceipts(ReceiptsFormBean ReceiptsFormBean);

}
