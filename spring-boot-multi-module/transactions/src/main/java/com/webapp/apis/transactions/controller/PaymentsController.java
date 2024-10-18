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
import com.webapp.apis.transactions.model.PaymentsFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.service.PaymentsService;
import com.webapp.apis.transactions.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/transaction")
public class PaymentsController {

	@Inject
	private PaymentsService paymentsService;

		
	@RequestMapping(value = "/getAllPayments", method = RequestMethod.GET)
	public ResponseWrapper<List<PaymentsFormBean>> getPayments(@RequestParam("page")Integer page, @RequestParam("size")Integer size) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		
		List<PaymentsFormBean> forms = paymentsService.getAllPayments(serverSidePagination);
		return new ResponseWrapper<List<PaymentsFormBean>>(null, HttpStatus.OK, "", forms);

	}


	@RequestMapping(value = "/savePayments", method = RequestMethod.POST)
	public ResponseWrapper<String> savePayments(
			@RequestBody PaymentsFormBean paymentsFormBean) {
		String flag = paymentsService.savePayments(paymentsFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t= null;
		if (flag!=TransactionConstants.SAVE) {
			error.add(new WebAppError(TransactionConstants.SAVE,TransactionConstants.DB_ERROR,TransactionConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(),TransactionConstants.SAVE_FAILURE,error);
		}
		
		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);
			
		}
	
	@RequestMapping(value = "/findPayments", method = RequestMethod.POST)
	public ResponseWrapper<List<PaymentsFormBean>> findPayments(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<PaymentsFormBean> forms = paymentsService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<PaymentsFormBean>>(null, HttpStatus.OK, "", forms);
		}

}
