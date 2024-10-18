package com.webapp.apis.masters.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.masters.model.UserMasterFormBean;
import com.webapp.apis.masters.service.UserMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/user")
public class UserRoleManagementController {
	@Inject
	private UserMasterService userMasterService;

	
	@RequestMapping(value = "/getaccessroleforuser", method = RequestMethod.GET)
	public ResponseWrapper<List<UserMasterFormBean>> getAllScreenAndOperationOfUser() {
		List<UserMasterFormBean> forms = userMasterService.getAllUser();
		return new ResponseWrapper<List<UserMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}


}
