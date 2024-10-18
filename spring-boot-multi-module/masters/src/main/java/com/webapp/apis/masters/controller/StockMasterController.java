package com.webapp.apis.masters.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.exceptions.WebAppError;
import com.webapp.apis.exceptions.WebAppException;
import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.model.StockMasterFormBean;
import com.webapp.apis.masters.service.StockMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/masters")
public class StockMasterController {

	private static final Logger LOGGER = LoggerFactory.getLogger(StockMasterController.class);

	@Inject
	private StockMasterService stockMasterService;

	@RequestMapping(value = "/getAllStocks", method = RequestMethod.GET)
	public ResponseWrapper<List<StockMasterFormBean>> getAllStockMasters() {
		List<StockMasterFormBean> forms = stockMasterService.getAllStockMasters();
		return new ResponseWrapper<List<StockMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/saveStockMaster", method = RequestMethod.POST)
	public ResponseWrapper<String> saveStockMaster(@RequestBody StockMasterFormBean stockMasterFormBean) {
		String flag = stockMasterService.saveStockMaster(stockMasterFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t = null;
		if (flag != MastersConstants.SAVE) {
			error.add(new WebAppError(MastersConstants.SAVE, MastersConstants.DB_ERROR, MastersConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), MastersConstants.SAVE_FAILURE, error);
		}

		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);

	}

}
