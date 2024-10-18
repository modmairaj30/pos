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
import com.webapp.apis.masters.model.SubjectsMasterFormBean;
import com.webapp.apis.masters.service.SubjetcsMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters")
public class SubjectMasterController {

	@Inject
	SubjetcsMasterService subjetcsMasterService;

	@RequestMapping(value = "/saveSubjectMaster", method = RequestMethod.POST)
	public ResponseWrapper<String> saveSubjectMaster( @RequestBody SubjectsMasterFormBean subjectsMasterFormBean) {
		String flag = subjetcsMasterService.saveSubjectMaster(subjectsMasterFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t = null;
		if (flag != MastersConstants.SAVE) {
			error.add(new WebAppError(MastersConstants.SAVE, MastersConstants.DB_ERROR, MastersConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), MastersConstants.SAVE_FAILURE, error);
		}

		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);

	}

	@RequestMapping(value = "/getAllSubject", method = RequestMethod.GET)
	public ResponseWrapper<List<SubjectsMasterFormBean>> getAllDepartmentMasters() {
		List<SubjectsMasterFormBean> forms = subjetcsMasterService.getAllSubject();
		return new ResponseWrapper<List<SubjectsMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}

}
