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
import com.webapp.apis.masters.model.CategoryMasterFormBean;
import com.webapp.apis.masters.service.CategoryMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters")
public class CategoryMasterController {

	@Inject
	CategoryMasterService categoryMasterService;

	@RequestMapping(value = "/saveCategoryMaster", method = RequestMethod.POST)
	public ResponseWrapper<String> saveCategoryMaster( @RequestBody CategoryMasterFormBean categoryMasterFormBean) {
		String flag = categoryMasterService.saveCategoryMaster(categoryMasterFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t = null;
		if (flag != MastersConstants.SAVE) {
			error.add(new WebAppError(MastersConstants.SAVE, MastersConstants.DB_ERROR, MastersConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), MastersConstants.SAVE_FAILURE, error);
		}

		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);

	}

	@RequestMapping(value = "/getAllCategory", method = RequestMethod.GET)
	public ResponseWrapper<List<CategoryMasterFormBean>> getAllDepartmentMasters() {
		List<CategoryMasterFormBean> forms = categoryMasterService.getAllCategory();
		return new ResponseWrapper<List<CategoryMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}

}
