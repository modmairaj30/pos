package com.webapp.apis.masters.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.exceptions.WebAppError;
import com.webapp.apis.exceptions.WebAppException;
import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.model.ContraLocationMasterFormBean;
import com.webapp.apis.masters.service.ContraLocationMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters")
public class ContraLocationMasterController {

	@Inject
	ContraLocationMasterService contraLocationMasterService;

	@RequestMapping(value = "/saveContraLocationMaster", method = RequestMethod.POST)
	public ResponseWrapper<String> saveContraLocationMaster(
			@RequestBody ContraLocationMasterFormBean contraLocationMasterFormBean) {
		String flag = contraLocationMasterService.saveContraLocationMaster(contraLocationMasterFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t = null;
		if (flag != MastersConstants.SAVE) {
			error.add(new WebAppError(MastersConstants.SAVE, MastersConstants.DB_ERROR, MastersConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), MastersConstants.SAVE_FAILURE, error);
		}

		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);

	}

	@RequestMapping(value = "/getAllContralocation", method = RequestMethod.GET)
	public ResponseWrapper<List<ContraLocationMasterFormBean>> getAllContralocation() {
		List<ContraLocationMasterFormBean> forms = contraLocationMasterService.getAllContralocation();
		return new ResponseWrapper<List<ContraLocationMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}

}
