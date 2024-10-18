package com.webapp.apis.reports.controller;

import java.util.Map;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.reports.model.ReportInput;
import com.webapp.apis.reports.service.DynamicReportService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/report")
public class ReportController {
	@Inject
	private DynamicReportService dynamicReportService;

	@RequestMapping(value = "/getReport", method = RequestMethod.POST)
	public ResponseWrapper<Map<String, Object>> getLookUpValues(@RequestBody ReportInput reportInput) {
		return new ResponseWrapper<Map<String, Object>>(null, HttpStatus.OK, "",
				dynamicReportService.generateReport(reportInput));
	}
	/*
	 * @RequestMapping(value = "/getReport", method = RequestMethod.POST) public
	 * ResponseWrapper<Map<String, List<Map<String, String>>>> getLookUpValues(
	 * 
	 * @RequestBody List<ReportForm> listreportForm) { return new
	 * ResponseWrapper<Map<String, List<Map<String, String>>>>(null, HttpStatus.OK,
	 * "", generalReportService.getMultipleDropdwonValues(listreportForm)); }
	 */
}
