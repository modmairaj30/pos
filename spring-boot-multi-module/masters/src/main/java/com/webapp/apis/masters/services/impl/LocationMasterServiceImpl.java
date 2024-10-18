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
import com.webapp.apis.masters.domain.LocationMaster;
import com.webapp.apis.masters.model.LocationMasterFormBean;
import com.webapp.apis.masters.repository.LocationMasterRepository;
import com.webapp.apis.masters.service.LocationMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class LocationMasterServiceImpl implements LocationMasterService {

	private static final Logger LOGGER = LoggerFactory.getLogger(LocationMasterServiceImpl.class);

	@Inject
	private LocationMasterRepository locationMasterRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<LocationMasterFormBean> getAllLocationMasters() {
		// TODO Auto-generated method stub
		Integer s = sessionUtility.getUserSession().getId();
		List<LocationMaster> listbranchMaster = locationMasterRepository.findAllByOrderByIdDesc();
		List<LocationMasterFormBean> listBranchMaster = new ArrayList<LocationMasterFormBean>();
		for (LocationMaster branchMaster : listbranchMaster) {
			LocationMasterFormBean branchMasterFormBean = new LocationMasterFormBean();
			BeanUtils.copyProperties(branchMaster, branchMasterFormBean);
			listBranchMaster.add(branchMasterFormBean);
		}

		return listBranchMaster;
	}

	@Transactional
	@Override
	public String saveLocationMaster(LocationMasterFormBean locationMasterFormBean) {
		// TODO Auto-generated method stub
		LocationMaster locationMaster = new LocationMaster();
		BeanUtils.copyProperties(locationMasterFormBean, locationMaster);
		locationMaster = locationMasterRepository.save(locationMaster);
		if (locationMasterFormBean.getId() == null) {
			locationMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			locationMaster.setCreatedDate(new Date());
		} else {
			locationMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			locationMaster.setUpdatedDate(new Date());
		}
		locationMaster = locationMasterRepository.save(locationMaster);
		if (locationMaster != null) {
			return MastersConstants.SAVE;

		}
		return MastersConstants.FAIL;
	}

}
