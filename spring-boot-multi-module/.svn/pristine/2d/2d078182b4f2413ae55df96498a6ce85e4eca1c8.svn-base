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
import com.webapp.apis.transactions.model.PurchasereturnsFormbean;
import com.webapp.apis.transactions.service.PurchasereturnsService;
import com.webapp.apis.transactions.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/transaction")
public class PurchasereturnsController {

	@Inject
	private PurchasereturnsService purchasereturnsService;

	@RequestMapping(value = "/getAllPurchasereturns", method = RequestMethod.GET)
	public ResponseWrapper<List<PurchasereturnsFormbean>> getPurchasereturns(@RequestParam("page") Integer page,
			@RequestParam("size") Integer size) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		List<PurchasereturnsFormbean> forms = purchasereturnsService.getAllPurchasereturns(serverSidePagination);
		return new ResponseWrapper<List<PurchasereturnsFormbean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/savePurchasereturns", method = RequestMethod.POST)
	public ResponseWrapper<String> savePurchasereturns(@RequestBody PurchasereturnsFormbean PurchasereturnsFormbean) {
		String flag = purchasereturnsService.savePurchasereturns(PurchasereturnsFormbean);
		List<WebAppError> error = new ArrayList<>();
		if (flag != TransactionConstants.SAVE) {
			error.add(new WebAppError(TransactionConstants.SAVE, TransactionConstants.DB_ERROR,
					TransactionConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), TransactionConstants.SAVE_FAILURE, error);
		}

		return new ResponseWrapper<String>(null, HttpStatus.OK, "", flag);

	}

	@RequestMapping(value = "/findPurchaseReturn", method = RequestMethod.POST)
	public ResponseWrapper<List<PurchasereturnsFormbean>> findPurchaseReturn(
			@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<PurchasereturnsFormbean> forms = purchasereturnsService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<PurchasereturnsFormbean>>(null, HttpStatus.OK, "", forms);
	}

}
