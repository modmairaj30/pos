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
import com.webapp.apis.transactions.model.StockReceiptsFormBean;
import com.webapp.apis.transactions.service.StockReceiptsService;
import com.webapp.apis.transactions.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/transaction")
public class StockReceiptsController {

	@Inject
	private StockReceiptsService stockReceiptsService;

		
	@RequestMapping(value = "/getAllStockReceipts", method = RequestMethod.GET)
	public ResponseWrapper<List<StockReceiptsFormBean>> getStockReceipts(@RequestParam("page")Integer page, @RequestParam("size")Integer size) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		List<StockReceiptsFormBean> forms = stockReceiptsService.getAllStockReceipts(serverSidePagination);
		return new ResponseWrapper<List<StockReceiptsFormBean>>(null, HttpStatus.OK, "", forms);

	}


	@RequestMapping(value = "/saveStockReceipt", method = RequestMethod.POST)
	public ResponseWrapper<String> saveStockReceipt(
			@RequestBody StockReceiptsFormBean stockReceiptsFormBean) {
		String flag = stockReceiptsService.saveStockReceipts(stockReceiptsFormBean);
		List<WebAppError> error = new ArrayList<>();
		if (flag!=TransactionConstants.SAVE) {
			error.add(new WebAppError(TransactionConstants.SAVE,TransactionConstants.DB_ERROR,TransactionConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(),TransactionConstants.SAVE_FAILURE,error);
		}
		
		return new ResponseWrapper<String>(null, HttpStatus.OK, "", flag);
			
		}
	
	@RequestMapping(value = "/findStockReceipts", method = RequestMethod.POST)
	public ResponseWrapper<List<StockReceiptsFormBean>> findStockReceipts(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<StockReceiptsFormBean> forms = stockReceiptsService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<StockReceiptsFormBean>>(null, HttpStatus.OK, "", forms);
		}

}
