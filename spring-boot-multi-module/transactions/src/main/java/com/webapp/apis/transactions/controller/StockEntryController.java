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
import com.webapp.apis.transactions.model.StockEntryFormBean;
import com.webapp.apis.transactions.service.StockEntryService;
import com.webapp.apis.transactions.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/transaction")
public class StockEntryController {

	@Inject
	private StockEntryService StockEntryService;

		
	@RequestMapping(value = "/getAllStockEntry", method = RequestMethod.GET)
	public ResponseWrapper<List<StockEntryFormBean>> getStockEntry(@RequestParam("page")Integer page, @RequestParam("size")Integer size,@RequestParam("location")String location) {
		ServerSidePagination serverSidePagination = new ServerSidePagination();
		serverSidePagination.setPage(page);
		serverSidePagination.setSize(size);
		serverSidePagination.setLocation(location);
		List<StockEntryFormBean> forms = StockEntryService.getAllStockEntry(serverSidePagination);
		return new ResponseWrapper<List<StockEntryFormBean>>(null, HttpStatus.OK, "", forms);

	}


	@RequestMapping(value = "/saveStockEntry", method = RequestMethod.POST)
	public ResponseWrapper<String> saveStockEntry(
			@RequestBody StockEntryFormBean StockEntryFormBean) {
		String flag = StockEntryService.saveStockEntry(StockEntryFormBean);
		List<WebAppError> error = new ArrayList<>();
		if (flag!=TransactionConstants.SAVE) {
			error.add(new WebAppError(TransactionConstants.SAVE,TransactionConstants.DB_ERROR,TransactionConstants.SAVE_FAILURE));
			throw new WebAppException(HttpStatus.BAD_REQUEST.toString(),TransactionConstants.SAVE_FAILURE,error);
		}
		
		return new ResponseWrapper<String>(null, HttpStatus.OK, "", flag);
			
		}
	
	@RequestMapping(value = "/findStockEntry", method = RequestMethod.POST)
	public ResponseWrapper<List<StockEntryFormBean>> findStockEntry(@RequestBody SearchCriteriaFormBean searchCriteriaFormBean) {
		List<StockEntryFormBean> forms = StockEntryService.findByWhereCondition(searchCriteriaFormBean);
		return new ResponseWrapper<List<StockEntryFormBean>>(null, HttpStatus.OK, "", forms);
		}

}
