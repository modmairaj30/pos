package com.webapp.apis.masters.controller;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.masters.model.LookUpFormBean;
import com.webapp.apis.masters.service.LookUpMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters/lookup")
public class LookUpMasterController {
	@Inject
	private LookUpMasterService lookUpService;

	@RequestMapping(value = "/getLookUpValues", method = RequestMethod.POST)
	public ResponseWrapper<List<Map<String, String>>> getLookUpValues(@RequestBody LookUpFormBean lookUpFormBean) {
		return new ResponseWrapper<List<Map<String, String>>>(null, HttpStatus.OK, "",
				lookUpService.getLookUpValues(lookUpFormBean));
	}

	@RequestMapping(value = "/getMultipleDropdwonValues", method = RequestMethod.POST)
	public ResponseWrapper<Map<String, List<Map<String, String>>>> getLookUpValues(
			@RequestBody List<LookUpFormBean> listLookUpFormBean) {
		return new ResponseWrapper<Map<String, List<Map<String, String>>>>(null, HttpStatus.OK, "",
				lookUpService.getMultipleDropdwonValues(listLookUpFormBean));
	}

}
