package com.webapp.apis.masters.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.exceptions.WebAppError;
import com.webapp.apis.exceptions.WebAppException;
import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.model.DesignationMasterFormBean;
import com.webapp.apis.masters.service.DesignationMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters")
public class DesignationMasterController {
	
@Inject DesignationMasterService designationMasterService;
	
	@RequestMapping(value = "/saveDesignationMaster", method = RequestMethod.POST)
	public ResponseWrapper<String> saveDesignationMaster( @RequestBody DesignationMasterFormBean designationMasterFormBean){
		String flag = designationMasterService.saveDesignationMaster(designationMasterFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t = null;
		if (flag != MastersConstants.SAVE) {
			error.add(new WebAppError(MastersConstants.SAVE,MastersConstants.DB_ERROR,MastersConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(),MastersConstants.SAVE_FAILURE,error);
		}
		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);

	}

	


	
	@RequestMapping(value = "/getAllDesignation", method = RequestMethod.GET)
	public ResponseWrapper<List<DesignationMasterFormBean>> getAllDesignation() {
		List<DesignationMasterFormBean> forms = designationMasterService.getAllDesignation();
		return new ResponseWrapper<List<DesignationMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}


}
