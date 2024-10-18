package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.ScreenMasterFormBean;

@Service
public interface ScreenMasterService {

	
	List<ScreenMasterFormBean> getAllScreen();
	String saveScreenMaster(ScreenMasterFormBean screenMasterFormBean);
}

