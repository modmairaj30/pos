package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.LocationMasterFormBean;


@Service
public interface LocationMasterService {

	public List<LocationMasterFormBean> getAllLocationMasters();

	public String saveLocationMaster(LocationMasterFormBean locationMasterFormBean);


}
