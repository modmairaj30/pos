package com.webapp.apis.masters.services.impl;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.MembershipMaster;
import com.webapp.apis.masters.mapper.MembershipMasterMapper;
import com.webapp.apis.masters.model.MembershipMasterFormBean;
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;
import com.webapp.apis.masters.repository.MembershipMasterRepository;
import com.webapp.apis.masters.repository.specs.MemberShipMasterSpecification;
import com.webapp.apis.masters.repository.specs.SearchCriteria;
import com.webapp.apis.masters.repository.specs.SearchOperation;
import com.webapp.apis.masters.service.MembershipMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class MembershipMasterServiceImpl implements MembershipMasterService {

	private static final Logger LOGGER = LoggerFactory.getLogger(MembershipMasterServiceImpl.class);

	@Inject
	private MembershipMasterRepository  membershipMasterRepository;
	@Inject
	private SessionUtility sessionUtility;

	private Slice<MembershipMaster> MembershipMaster;

	@Override
	public List<MembershipMasterFormBean> getAllMembershipMasters(ServerSidePagination serverSidePagination) {

		Page<MembershipMaster> MembershipMaster = null;
		
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize());
		MembershipMaster = membershipMasterRepository.findAllByOrderByIdDesc(requestedPage);
	
		return MembershipMasterMapper.mapDomainListToFormList(MembershipMaster.getContent());
	}
	@Transactional
	@Override
	public String saveMembershipMaster(MembershipMasterFormBean membershipMasterFormBean) {

		membershipMasterFormBean.setCustomerName(membershipMasterFormBean.getCustomerName().toUpperCase());
		if (membershipMasterFormBean.getId() == null) {
			membershipMasterFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			membershipMasterFormBean.setCreatedDate(new Date());
		} else {
			membershipMasterFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			membershipMasterFormBean.setUpdatedDate(new Date());
		}
		MembershipMaster membershipMaster= membershipMasterRepository.save(MembershipMasterMapper.mapFormToDomain(membershipMasterFormBean));
		

		if (membershipMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;

	}

	@Override
	public List<MembershipMasterFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		
		MemberShipMasterSpecification msTitleRating = new MemberShipMasterSpecification();
        msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
       // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
        List<MembershipMaster> membershipMasterList = membershipMasterRepository.findAll(msTitleRating);
        return MembershipMasterMapper.mapDomainListToFormList(membershipMasterList);
	}
	@Override
	public List<MembershipMasterFormBean> getAllMembershipMasters() {
		// TODO Auto-generated method stub
		return null;
	}




	}


