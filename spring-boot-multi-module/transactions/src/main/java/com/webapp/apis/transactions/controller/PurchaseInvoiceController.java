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
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockVerificationFormBean;
import com.webapp.apis.transactions.model.PurchaseInvoiveFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.service.PurchaseInvoiceService;
import com.webapp.apis.transactions.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/transaction")
public class PurchaseInvoiceController {

	@Inject
	private PurchaseInvoiceService purchaseInvoiveService;

	@RequestMapping(value = "/getAllPurchaseInvoive", method = RequestMethod.GET)
	public ResponseWrapper<List<PurchaseInvoiveFormBean>> getPurchaseInvoive(@RequestParam("page") Integer page,
			@RequestParam("size") Integer size) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		List<PurchaseInvoiveFormBean> forms = purchaseInvoiveService.getAllPurchaseInvoive(serverSidePagination);
		return new ResponseWrapper<List<PurchaseInvoiveFormBean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/savePurchaseInvoice", method = RequestMethod.POST)
	public ResponseWrapper<String> savePurchaseInvoive(@RequestBody PurchaseInvoiveFormBean PurchaseInvoiveFormBean) {
		String flag = purchaseInvoiveService.savePurchaseInvoive(PurchaseInvoiveFormBean);
		List<WebAppError> error = new ArrayList<>();
		if (flag != TransactionConstants.SAVE) {
			error.add(new WebAppError(TransactionConstants.SAVE, TransactionConstants.DB_ERROR,
					TransactionConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), TransactionConstants.SAVE_FAILURE, error);
		}

		return new ResponseWrapper<String>(null, HttpStatus.OK, "", flag);

	}
	
	@RequestMapping(value = "/findPurchaseInvoice", method = RequestMethod.POST)
	public ResponseWrapper<List<PurchaseInvoiveFormBean>> findPurchaseInvoice(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<PurchaseInvoiveFormBean> forms = purchaseInvoiveService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<PurchaseInvoiveFormBean>>(null, HttpStatus.OK, "", forms);
		}
}
