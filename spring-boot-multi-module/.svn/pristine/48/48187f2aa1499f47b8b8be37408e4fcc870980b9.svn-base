package com.webapp.apis.masters.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.DepartmentMaster;
import com.webapp.apis.masters.model.DepartmentMasterFormBean;
import com.webapp.apis.masters.repository.DepartmentMasterRepository;
import com.webapp.apis.masters.service.DepartmentMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class DepartmentMasterServiceImpl implements DepartmentMasterService {

	private static final Logger LOGGER = LoggerFactory.getLogger(DepartmentMasterServiceImpl.class);

	@Inject
	private DepartmentMasterRepository departmentMasterRepository;
	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<DepartmentMasterFormBean> getAllDepartmentMasters() {
		// TODO Auto-generated method stub
		List<DepartmentMaster> listdepMasters = departmentMasterRepository.findAllByOrderByIdDesc();
		List<DepartmentMasterFormBean> listdepMaster = new ArrayList<DepartmentMasterFormBean>();
		for (DepartmentMaster depMaster : listdepMasters) {
			DepartmentMasterFormBean departmentMasterFormBean = new DepartmentMasterFormBean();
			BeanUtils.copyProperties(depMaster, departmentMasterFormBean);
			listdepMaster.add(departmentMasterFormBean);
		}

		return listdepMaster;
	}

	@Transactional
	@Override
	public String saveDepartmentMaster(DepartmentMasterFormBean departmentMasterFormBean) {
		DepartmentMaster branchMaster = new DepartmentMaster();
		BeanUtils.copyProperties(departmentMasterFormBean, branchMaster);
		
		if (departmentMasterFormBean.getId() == null) {
			branchMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setCreatedDate(new Date());
		} else {
			branchMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setUpdatedDate(new Date());
		}
		branchMaster = departmentMasterRepository.save(branchMaster);
		if (branchMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

}
