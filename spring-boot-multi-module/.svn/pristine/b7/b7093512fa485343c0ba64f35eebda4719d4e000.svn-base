package com.webapp.apis.masters.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.exceptions.WebAppError;
import com.webapp.apis.exceptions.WebAppException;
import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.model.BomMasterFormBean;
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;
import com.webapp.apis.masters.service.BomMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters")
public class BomMasterController {

	@Inject
	private BomMasterService bomMasterService;

	@RequestMapping(value = "/getAllBomMaster", method = RequestMethod.GET)
	public ResponseWrapper<List<BomMasterFormBean>> getBomMaster(@RequestParam("page") Integer page,
			@RequestParam("size") Integer size) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		List<BomMasterFormBean> forms = bomMasterService.getAllBomMaster(serverSidePagination);
		return new ResponseWrapper<List<BomMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/saveBomMaster", method = RequestMethod.POST)
	@ResponseBody
	public ResponseWrapper<String> saveBranchMaster(@RequestBody BomMasterFormBean BomMasterFormBean) {
		String flag = bomMasterService.saveBomMaster(BomMasterFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t = null;
		if (flag != MastersConstants.SAVE) {
			error.add(new WebAppError(MastersConstants.SAVE, MastersConstants.DB_ERROR,flag));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), MastersConstants.SAVE_FAILURE, error);
		}

		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);

	}
	
	@RequestMapping(value = "/findBomMaster", method = RequestMethod.POST)
	public ResponseWrapper<List<BomMasterFormBean>> findBomMaster(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<BomMasterFormBean> forms = bomMasterService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<BomMasterFormBean>>(null, HttpStatus.OK, "", forms);
		}


}
