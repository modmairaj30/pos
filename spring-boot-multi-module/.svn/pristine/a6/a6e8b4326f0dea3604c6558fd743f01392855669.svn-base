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
import com.webapp.apis.transactions.model.StocktransfersFormBean;
import com.webapp.apis.transactions.service.StocktransfersService;
import com.webapp.apis.transactions.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/transaction")
public class StocktransfersController {
	
	@Inject
	private StocktransfersService stocktransfersService;

	// get all getAllCreditTeriffmaster
	/*
	@RequestMapping(value = "/getAllStockTransfer", method = RequestMethod.GET)
	public ResponseWrapper<List<PurchaseInvoiveFormBean>> getPurchaseInvoive() {
		List<PurchaseInvoiveFormBean> forms = PurchaseInvoiveService.getAllPurchaseInvoive();
		return new ResponseWrapper<List<PurchaseInvoiveFormBean>>(null, HttpStatus.OK, "", forms);

	}*/
	
	@RequestMapping(value = "/getAllStockTransfer", method = RequestMethod.GET)
	public ResponseWrapper<List<StocktransfersFormBean>> getStocktransfers(@RequestParam("page")Integer page, @RequestParam("size")Integer size,@RequestParam("location")String location) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		serverSidePagination.setLocation(location);
		List<StocktransfersFormBean> forms = stocktransfersService.getAllStocktransfers(serverSidePagination);
		return new ResponseWrapper<List<StocktransfersFormBean>>(null, HttpStatus.OK, "", forms);

	}
	
	@RequestMapping(value = "/saveStockTransfer", method = RequestMethod.POST)
	public ResponseWrapper<String> saveStocktransfers(
			@RequestBody StocktransfersFormBean StocktransfersFormBean) {
		String flag = stocktransfersService.saveStocktransfers(StocktransfersFormBean);
		List<WebAppError> error = new ArrayList<>();
		if (flag!=TransactionConstants.SAVE) {
			error.add(new WebAppError(TransactionConstants.SAVE,TransactionConstants.DB_ERROR,TransactionConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(),TransactionConstants.SAVE_FAILURE,error);
		}
		
		return new ResponseWrapper<String>(null, HttpStatus.OK, "", flag);
			
		}
	
	@RequestMapping(value = "/findStockTransfer", method = RequestMethod.POST)
	public ResponseWrapper<List<StocktransfersFormBean>> findStockVerification(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<StocktransfersFormBean> forms = stocktransfersService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<StocktransfersFormBean>>(null, HttpStatus.OK, "", forms);
		}

}
