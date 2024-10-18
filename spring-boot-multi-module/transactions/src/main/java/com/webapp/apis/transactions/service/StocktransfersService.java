package com.webapp.apis.transactions.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StocktransfersFormBean;;

@Service
public interface StocktransfersService {
	public List<StocktransfersFormBean> getAllStocktransfers();

	List<StocktransfersFormBean> getAllStocktransfers(ServerSidePagination serverSidePagination);

	List<StocktransfersFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);

	public String saveStocktransfers(StocktransfersFormBean StocktransfersFormBean);

}
