package com.webapp.apis.masters.services.impl;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.ScreenMaster;
import com.webapp.apis.masters.mapper.ScreenMasterMapper;
import com.webapp.apis.masters.model.ScreenMasterFormBean;
import com.webapp.apis.masters.repository.ScreenMasterRepository;
import com.webapp.apis.masters.service.ScreenMasterService;

@Service
public class ScreenMasterServiceImp implements ScreenMasterService {
	@Inject
	ScreenMasterRepository screenMasterRepository;

	@Override
	public List<ScreenMasterFormBean> getAllScreen() {
		List<ScreenMaster> listscreenMaster = screenMasterRepository.findAllByOrderByIdDesc();
			return ScreenMasterMapper.mapDomainListToFormList(listscreenMaster);	
	}
	@Transactional
	@Override
	public String saveScreenMaster(ScreenMasterFormBean screenMasterFormBean) {
		ScreenMaster screenMaster = new ScreenMaster();

		screenMaster = screenMasterRepository.save(ScreenMasterMapper.mapFormToDomain(screenMasterFormBean));
		
		if (screenMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}
	}




