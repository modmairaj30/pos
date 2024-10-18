package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.PartyMasterFormBean;
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;
import com.webapp.apis.masters.model.TitleMasterFormBean;

@Service
public interface PartyMasterService {

	
	public String savePartyMaster(PartyMasterFormBean partyMasterFormBean);
	List<PartyMasterFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	List<PartyMasterFormBean> getAllPartyMasters(ServerSidePagination serverSidePagination);

}
