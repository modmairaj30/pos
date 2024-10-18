package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.ContraLocationMasterFormBean;

@Service
public interface ContraLocationMasterService {

	String saveContraLocationMaster(ContraLocationMasterFormBean contraLocationMasterFormBean);

	List<ContraLocationMasterFormBean> getAllContralocation();

}
