package com.webapp.apis.masters.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.DesignationMaster;
import com.webapp.apis.masters.model.DesignationMasterFormBean;
import com.webapp.apis.masters.repository.DesignationMasterRepository;
import com.webapp.apis.masters.service.DesignationMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class DesignationMasterSerivceImpl implements DesignationMasterService {

	@Inject
	DesignationMasterRepository designationMasterRepository;
	@Inject
	private SessionUtility sessionUtility;

	@Transactional
	@Override
	public String saveDesignationMaster(DesignationMasterFormBean designationMasterFormBean) {
		DesignationMaster branchMaster = new DesignationMaster();
		BeanUtils.copyProperties(designationMasterFormBean, branchMaster);
		
		if (designationMasterFormBean.getId() == null) {
			branchMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setCreatedDate(new Date());
		} else {
			branchMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setUpdatedDate(new Date());
		}
		branchMaster = designationMasterRepository.save(branchMaster);
		if (branchMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

	@Override
	public List<DesignationMasterFormBean> getAllDesignation() {
		// TODO Auto-generated method stub
		List<DesignationMaster> listdesgMasters = designationMasterRepository.findAllByOrderByIdDesc();
		List<DesignationMasterFormBean> listdesgMaster = new ArrayList<DesignationMasterFormBean>();
		for (DesignationMaster desgMaster : listdesgMasters) {
			DesignationMasterFormBean designationMasterFormBean = new DesignationMasterFormBean();
			BeanUtils.copyProperties(desgMaster, designationMasterFormBean);
			listdesgMaster.add(designationMasterFormBean);
		}

		return listdesgMaster;
	}

}
