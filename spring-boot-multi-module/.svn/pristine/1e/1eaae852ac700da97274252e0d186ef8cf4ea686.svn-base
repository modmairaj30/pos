package com.webapp.apis.masters.services.impl;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.RolesMaster;
import com.webapp.apis.masters.mapper.RolesMasterMapper;
import com.webapp.apis.masters.model.RolesMasterFormBean;
import com.webapp.apis.masters.repository.RoleMasterRepository;
import com.webapp.apis.masters.service.RolesMasterService;

@Service
public class RolesMasterServiceImpl implements RolesMasterService {
	@Inject
	RoleMasterRepository roleMasterRepository;
	@Override
	 public List<RolesMasterFormBean> getAllRolesMaster(){
		List<RolesMaster> listscreenMaster = roleMasterRepository.findAll();
		List<RolesMasterFormBean> listscreen = new ArrayList<RolesMasterFormBean>();
		for (RolesMaster rolesMaster : listscreenMaster) {
			RolesMasterFormBean rolesMasterFormBean = new RolesMasterFormBean();
			BeanUtils.copyProperties(rolesMaster, rolesMasterFormBean);
			listscreen.add(rolesMasterFormBean);
		}

		return listscreen;	
	}
	
	@Transactional
	@Override
	public String saveRolesMaster(RolesMasterFormBean rolesMasterFormBean) {
		RolesMaster rolesMaster = new RolesMaster();

		rolesMaster = roleMasterRepository.save(RolesMasterMapper.mapFormToDomain(rolesMasterFormBean));
		
		if (rolesMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}
	}

	

		
		
	