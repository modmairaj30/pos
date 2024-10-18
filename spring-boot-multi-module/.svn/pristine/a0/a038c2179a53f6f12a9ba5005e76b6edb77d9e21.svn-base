package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;
import com.webapp.apis.masters.model.TitleMasterFormBean;;

@Service
public interface TitleMasterService {

	List<TitleMasterFormBean> getAllTileMaster(ServerSidePagination serverSidePagination);
	List<TitleMasterFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	public String saveTitleMaster(TitleMasterFormBean tileMasterFormBean);

}
