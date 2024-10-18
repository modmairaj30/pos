package com.webapp.apis.transactions.controller;

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
import com.webapp.apis.transactions.model.BomTransactionFormBean;
import com.webapp.apis.transactions.model.SearchCriteriaFormBean;
import com.webapp.apis.transactions.model.ServerSidePagination;
import com.webapp.apis.transactions.service.BomTransactionService;
import com.webapp.apis.utility.ResponseWrapper;
import com.webapp.apis.transaction.constants.TransactionConstants;

@RestController
@RequestMapping(value = "/transaction")
public class BomTransactionController {

	@Inject
	private BomTransactionService bomTransactionService;

	@RequestMapping(value = "/getAllBomtransaction", method = RequestMethod.GET)
	public ResponseWrapper<List<BomTransactionFormBean>> getBomTransaction(@RequestParam("page") Integer page,
			@RequestParam("size") Integer size) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		List<BomTransactionFormBean> forms = bomTransactionService.getAllBomTransaction(serverSidePagination);
		return new ResponseWrapper<List<BomTransactionFormBean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/saveBomtransaction", method = RequestMethod.POST)
	@ResponseBody
	public ResponseWrapper<BomTransactionFormBean> saveBranchTransaction(@RequestBody BomTransactionFormBean BomTransactionFormBean) {
		BomTransactionFormBean  flag = bomTransactionService.saveBomTransaction(BomTransactionFormBean);
		List<WebAppError> error = new ArrayList<>();
		WebAppException t = null;
		if (flag == null) {
			error.add(new WebAppError(TransactionConstants.SAVE, TransactionConstants.DB_ERROR,"fail"));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(), TransactionConstants.SAVE_FAILURE, error);
		}

		return new ResponseWrapper<BomTransactionFormBean>(t, HttpStatus.OK, "", flag);

	}
	
	@RequestMapping(value = "/findBomtransaction", method = RequestMethod.POST)
	public ResponseWrapper<List<BomTransactionFormBean>> findBomTransaction(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<BomTransactionFormBean> forms = bomTransactionService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<BomTransactionFormBean>>(null, HttpStatus.OK, "", forms);
		}


}
