package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.DepartmentMasterFormBean;

@Service
public interface DepartmentMasterService {

	String saveDepartmentMaster(DepartmentMasterFormBean departmentMasterFormBean);

	List<DepartmentMasterFormBean> getAllDepartmentMasters();

}
