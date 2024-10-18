package com.webapp.apis.masters.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.EmployeeMaster;
import com.webapp.apis.masters.model.EmployeeMasterFormBean;
import com.webapp.apis.masters.repository.EmployeeMasterRepository;
import com.webapp.apis.masters.service.EmployeeMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class EmployeeMasterServiceImpl implements EmployeeMasterService {

	private static final Logger LOGGER = LoggerFactory.getLogger(LocationMasterServiceImpl.class);

	@Inject
	private EmployeeMasterRepository employeeMasterRepository;
	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<EmployeeMasterFormBean> getAllEmployeeMasters() {
		// TODO Auto-generated method stub
		List<EmployeeMaster> listemployeeMaster = employeeMasterRepository.findAllByOrderByIdDesc();
		List<EmployeeMasterFormBean> listEmployeeMaster = new ArrayList<EmployeeMasterFormBean>();
		for (EmployeeMaster employeeMaster : listemployeeMaster) {
			EmployeeMasterFormBean employeeMasterFormBean = new EmployeeMasterFormBean();
			BeanUtils.copyProperties(employeeMaster, employeeMasterFormBean);
			listEmployeeMaster.add(employeeMasterFormBean);
		}

		return listEmployeeMaster;
	}

	@Override
	public String saveEmployeeMaster(EmployeeMasterFormBean employeeMasterFormBean) {
		// TODO Auto-generated method stub
		EmployeeMaster branchMaster = new EmployeeMaster();
		BeanUtils.copyProperties(employeeMasterFormBean, branchMaster);
		
		if (employeeMasterFormBean.getId() == null) {
			branchMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setCreatedDate(new Date());
		} else {
			branchMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setUpdatedDate(new Date());
		}
		branchMaster = employeeMasterRepository.save(branchMaster);
		if (branchMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;

	}
}
