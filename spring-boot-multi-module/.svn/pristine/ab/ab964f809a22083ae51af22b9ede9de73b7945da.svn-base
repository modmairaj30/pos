package com.webapp.apis.masters.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.exceptions.WebAppError;
import com.webapp.apis.exceptions.WebAppException;
import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.model.LocationMasterFormBean;
import com.webapp.apis.masters.service.LocationMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters")
public class LocationMasterController {

	@Inject
	private LocationMasterService locationMasterService;

	@RequestMapping(value = "/getAllLocations", method = RequestMethod.GET)
	public ResponseWrapper<List<LocationMasterFormBean>> getAllBranchMasters() {
		List<LocationMasterFormBean> forms = locationMasterService.getAllLocationMasters();
		return new ResponseWrapper<List<LocationMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/saveLocationMaster", method = RequestMethod.POST)
	@ResponseBody
	public ResponseWrapper<String> saveBranchMaster(@RequestBody LocationMasterFormBean locationMasterFormBean) {
		String flag = locationMasterService.saveLocationMaster(locationMasterFormBean);

		List<WebAppError> error = new ArrayList<>();
		if (flag != MastersConstants.SAVE) {
			error.add(new WebAppError(MastersConstants.SAVE, MastersConstants.DB_ERROR, MastersConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), MastersConstants.SAVE_FAILURE, error);
		}
		return new ResponseWrapper<String>(null, HttpStatus.OK, "", flag);

	}

}
