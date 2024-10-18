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
import com.webapp.apis.masters.model.ItemMasterFormBean;
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.service.ItemMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters")

public class ItemMasterController {

	@Inject
	ItemMasterService ItemMasterService;

	@RequestMapping(value = "/saveItemMaster", method = RequestMethod.POST)
	public ResponseWrapper<String> saveItemMaster( @RequestBody ItemMasterFormBean ItemMasterFormBean) {
		String flag = ItemMasterService.saveItemMaster(ItemMasterFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t = null;
		if (flag != MastersConstants.SAVE) {
			error.add(new WebAppError(MastersConstants.SAVE,MastersConstants.DB_ERROR,MastersConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(),MastersConstants.SAVE_FAILURE,error);
		}
		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);
	}

	@RequestMapping(value = "/getAllItem", method = RequestMethod.GET)
	public ResponseWrapper<List<ItemMasterFormBean>> getAllItem() {
		List<ItemMasterFormBean> forms = ItemMasterService.getAllItem();
		return new ResponseWrapper<List<ItemMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}
	
	


@RequestMapping(value = "/findItemMaster", method = RequestMethod.POST)
public ResponseWrapper<List<ItemMasterFormBean>> findPartyMaster(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
	List<ItemMasterFormBean> forms = ItemMasterService.findByWhereCondition(searchCriteriaFormBean);
	return new ResponseWrapper<List<ItemMasterFormBean>>(null, HttpStatus.OK, "", forms);
	}
}