package com.webapp.apis.masters.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.ContraLocationMaster;
import com.webapp.apis.masters.model.ContraLocationMasterFormBean;
import com.webapp.apis.masters.repository.ContraLocationMasterRepository;
import com.webapp.apis.masters.service.ContraLocationMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class ContraLocationMasterServiceImpl implements ContraLocationMasterService {

	@Inject
	ContraLocationMasterRepository contraLocationMasterRepository;
	@Inject
	private SessionUtility sessionUtility;

	@Transactional
	@Override
	public String saveContraLocationMaster(ContraLocationMasterFormBean contraLocationMasterFormBean) {
		ContraLocationMaster branchMaster = new ContraLocationMaster();
		BeanUtils.copyProperties(contraLocationMasterFormBean, branchMaster);
		
		if (contraLocationMasterFormBean.getId() == null) {
			branchMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setCreatedDate(new Date());
		} else {
			branchMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setUpdatedDate(new Date());
		}
		branchMaster = contraLocationMasterRepository.save(branchMaster);
		if (branchMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

	@Override
	public List<ContraLocationMasterFormBean> getAllContralocation() {
		List<ContraLocationMaster> listconMasters = contraLocationMasterRepository.findAllByOrderByIdDesc();
		List<ContraLocationMasterFormBean> listconMaster = new ArrayList<ContraLocationMasterFormBean>();
		for (ContraLocationMaster depMaster : listconMasters) {
			ContraLocationMasterFormBean contraLocationMasterFormBean = new ContraLocationMasterFormBean();
			BeanUtils.copyProperties(depMaster, contraLocationMasterFormBean);
			listconMaster.add(contraLocationMasterFormBean);
		}

		return listconMaster;
	}

}
