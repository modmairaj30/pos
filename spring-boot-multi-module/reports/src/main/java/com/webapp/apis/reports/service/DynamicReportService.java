package com.webapp.apis.reports.service;

import java.util.Map;

import com.webapp.apis.reports.model.ReportInput;

public interface DynamicReportService {
	public Map<String, Object> generateReport(ReportInput reportInput);
}
