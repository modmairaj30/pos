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
import com.webapp.apis.transactions.model.InvoiceFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.model.StockVerificationFormBean;
import com.webapp.apis.transactions.service.InvoiceService;
import com.webapp.apis.transactions.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/transaction")
public class InvoiceController {

	@Inject
	private InvoiceService InvoiceService;

	// get all party's
	@RequestMapping(value = "/getAllInvoice", method = RequestMethod.GET)
	public ResponseWrapper<List<InvoiceFormBean>> getAllInvoices(@RequestParam("page")Integer page, @RequestParam("size")Integer size) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		List<InvoiceFormBean> forms = InvoiceService.getAllInvoice(serverSidePagination);
		return new ResponseWrapper<List<InvoiceFormBean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/saveInvoice", method = RequestMethod.POST)
	public ResponseWrapper<String> saveInvoice(
		@RequestBody InvoiceFormBean invoiceFormBean) {
			String flag = InvoiceService.saveInvoice(invoiceFormBean);
			List<WebAppError> error = new ArrayList<>();
			
			if (flag!=TransactionConstants.SAVE) {
				error.add(new WebAppError(TransactionConstants.SAVE,TransactionConstants.DB_ERROR,TransactionConstants.SAVE_FAILURE));
				throw new WebAppException(HttpStatus.BAD_REQUEST.toString(),TransactionConstants.SAVE_FAILURE,error);
			}
			
			return new ResponseWrapper<String>(null, HttpStatus.OK, "", flag);
				
			}
	
	@RequestMapping(value = "/findInvoice", method = RequestMethod.POST)
	public ResponseWrapper<List<InvoiceFormBean>> findInvoice(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<InvoiceFormBean> forms = InvoiceService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<InvoiceFormBean>>(null, HttpStatus.OK, "", forms);
		}

}
