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
import com.webapp.apis.transactions.model.ReceiptsFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.service.ReceiptsService;
import com.webapp.apis.transactions.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/transaction")
public class ReceiptsController {

	@Inject
	private ReceiptsService receiptsService;

		
	@RequestMapping(value = "/getAllReceipts", method = RequestMethod.GET)
	public ResponseWrapper<List<ReceiptsFormBean>> getReceipts(@RequestParam("page")Integer page, @RequestParam("size")Integer size) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		
		List<ReceiptsFormBean> forms = receiptsService.getAllReceipts(serverSidePagination);
		return new ResponseWrapper<List<ReceiptsFormBean>>(null, HttpStatus.OK, "", forms);

	}


	@RequestMapping(value = "/saveReceipts", method = RequestMethod.POST)
	public ResponseWrapper<String> saveReceipts(
			@RequestBody ReceiptsFormBean receiptsFormBean) {
		String flag = receiptsService.saveReceipts(receiptsFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t= null;
		if (flag!=TransactionConstants.SAVE) {
			error.add(new WebAppError(TransactionConstants.SAVE,TransactionConstants.DB_ERROR,TransactionConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(),TransactionConstants.SAVE_FAILURE,error);
		}
		
		return new ResponseWrapper<String>(t, HttpStatus.OK, "", flag);
			
		}
	
	@RequestMapping(value = "/findReceipt", method = RequestMethod.POST)
	public ResponseWrapper<List<ReceiptsFormBean>> findReceipt(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<ReceiptsFormBean> forms = receiptsService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<ReceiptsFormBean>>(null, HttpStatus.OK, "", forms);
		}

}
