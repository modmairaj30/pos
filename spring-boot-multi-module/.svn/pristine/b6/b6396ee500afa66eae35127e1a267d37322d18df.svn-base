package com.webapp.apis.transactions.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.exceptions.WebAppError;
import com.webapp.apis.exceptions.WebAppException;
import com.webapp.apis.transaction.constants.TransactionConstants;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockVerificationFormBean;
import com.webapp.apis.transactions.service.StockVerificationService;
import com.webapp.apis.transactions.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/transaction")
public class StockVerificationController {

	@Inject
	private StockVerificationService stockVerificationService;

		
	@RequestMapping(value = "/getAllStockVerification", method = RequestMethod.GET)
	public ResponseWrapper<List<StockVerificationFormBean>> getStockVerification(@RequestParam("page")Integer page, @RequestParam("size")Integer size,@RequestParam("location")String location) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		serverSidePagination.setLocation(location);
		List<StockVerificationFormBean> forms = stockVerificationService.getAllStockVerification(serverSidePagination);
		return new ResponseWrapper<List<StockVerificationFormBean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/getS", method = RequestMethod.GET)
	public ResponseWrapper<List<StockVerificationFormBean>> getS() {
		
		String forms = stockVerificationService.saveS();
		return null;

	}
	@RequestMapping(value = "/saveStockVerification", method = RequestMethod.POST)
	public ResponseWrapper<String> saveStockVerification(
			@RequestBody StockVerificationFormBean stockVerificationFormBean) {
		String flag = stockVerificationService.saveStockVerification(stockVerificationFormBean);
		List<WebAppError> error = new ArrayList<>();
		if (flag!=TransactionConstants.SAVE) {
			error.add(new WebAppError(TransactionConstants.SAVE,TransactionConstants.DB_ERROR,TransactionConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(),TransactionConstants.SAVE_FAILURE,error);
		}
		
		return new ResponseWrapper<String>(null, HttpStatus.OK, "", flag);
			
		}
	
	@RequestMapping(value = "/findStockVerification", method = RequestMethod.POST)
	public ResponseWrapper<List<StockVerificationFormBean>> findStockVerification(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<StockVerificationFormBean> forms = stockVerificationService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<StockVerificationFormBean>>(null, HttpStatus.OK, "", forms);
		}

}
