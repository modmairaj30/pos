package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.ItemMasterFormBean;
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;

@Service
public interface ItemMasterService {

	String saveItemMaster(ItemMasterFormBean ItemMasterFormBean);
	List<ItemMasterFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	List<ItemMasterFormBean> getAllItemMasters(ServerSidePagination serverSidePagination);
	List<ItemMasterFormBean> getAllItem();

}
