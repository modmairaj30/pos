package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.MembershipMasterFormBean;
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;


@Service
public interface MembershipMasterService {


	public String saveMembershipMaster(MembershipMasterFormBean MembershipMasterFormBean);
	List<MembershipMasterFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean);
	List<MembershipMasterFormBean> getAllMembershipMasters(ServerSidePagination serverSidePagination);
	public List<MembershipMasterFormBean> getAllMembershipMasters();


}
