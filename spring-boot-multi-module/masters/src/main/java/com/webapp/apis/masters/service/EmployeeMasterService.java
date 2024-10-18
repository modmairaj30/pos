package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.EmployeeMasterFormBean;


@Service
public interface EmployeeMasterService {
	
public List<EmployeeMasterFormBean> getAllEmployeeMasters();
	
	public String saveEmployeeMaster(EmployeeMasterFormBean employeeMasterFormBean);
	

}
