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
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;
import com.webapp.apis.masters.model.TitleMasterFormBean;
import com.webapp.apis.masters.service.TitleMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters")
public class TitleMasterController {

	@Inject
	private TitleMasterService titleMasterService;

	@RequestMapping(value = "/getAllTitleMaster", method = RequestMethod.GET)
	public ResponseWrapper<List<TitleMasterFormBean>> getTitleMaster(@RequestParam("page") Integer page,
			@RequestParam("size") Integer size) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		List<TitleMasterFormBean> forms = titleMasterService.getAllTileMaster(serverSidePagination);
		return new ResponseWrapper<List<TitleMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/saveTitleMaster", method = RequestMethod.POST)
	@ResponseBody
	public ResponseWrapper<String> saveBranchMaster(@RequestBody TitleMasterFormBean titleMasterFormBean) {
		String flag = titleMasterService.saveTitleMaster(titleMasterFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t = null;
		if (flag != MastersConstants.SAVE) {
			error.add(new WebAppError(MastersConstants.SAVE, MastersConstants.DB_ERROR,flag));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), MastersConstants.SAVE_FAILURE, error);
		}

		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);

	}
	
	@RequestMapping(value = "/findTitleMaster", method = RequestMethod.POST)
	public ResponseWrapper<List<TitleMasterFormBean>> findTitleMaster(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<TitleMasterFormBean> forms = titleMasterService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<TitleMasterFormBean>>(null, HttpStatus.OK, "", forms);
		}


}
