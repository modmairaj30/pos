package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.DesignationMasterFormBean;

@Service
public interface DesignationMasterService {

	String saveDesignationMaster(DesignationMasterFormBean designationMasterFormBean);

	List<DesignationMasterFormBean> getAllDesignation();

}
