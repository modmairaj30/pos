package com.webapp.apis.reports.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.reports.domain.Report;
import com.webapp.apis.reports.model.ReportForm;
/**
 * @author Mairaj
 */
public class ReportsMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(ReportsMapper.class);

	public static Report mapFormToDomain(ReportForm reportForm) {
		Report report = new Report();
		report.setReportId(reportForm.getReportId());
		report.setReportName(reportForm.getReportName());
		report.setReportType(reportForm.getReportType());
		report.setFromDate(reportForm.getFromDate());
		report.setToDate(reportForm.getToDate());
		report.setLocation(reportForm.getLocation());
		report.setSupplier(reportForm.getSupplier());
		report.setAuthor(reportForm.getAuthor());
		report.setSqlSelectQry(reportForm.getSqlSelectQry());
		report.setUpdatedBy(reportForm.getUpdatedBy());
		report.setUpdatedDate(reportForm.getUpdatedDate());
		report.setCreatedBy(reportForm.getCreatedBy());
		report.setCreatedDate(reportForm.getCreatedDate());
		return report;
	}
	public static ReportForm mapDomainToForm(Report report) {
		ReportForm reportForm = new ReportForm();

		reportForm.setReportId(report.getReportId());
		reportForm.setReportName(report.getReportName());
		reportForm.setReportType(report.getReportType());
		reportForm.setFromDate(report.getFromDate());
		reportForm.setToDate(report.getToDate());
		reportForm.setLocation(report.getLocation());
		reportForm.setSupplier(report.getSupplier());
		reportForm.setAuthor(report.getAuthor());
		reportForm.setSqlSelectQry(report.getSqlSelectQry());
		reportForm.setUpdatedBy(report.getUpdatedBy());
		reportForm.setUpdatedDate(report.getUpdatedDate());
		reportForm.setCreatedDate(report.getCreatedDate());
		reportForm.setCreatedBy(report.getCreatedBy());


		return reportForm;
	}

	public static List<ReportForm> mapDomainListToFormList(List<Report> reportList) {
		List<ReportForm> reportFormList = new ArrayList<>();
		for (Report report : reportList) {
			reportFormList.add(mapDomainToForm(report));
		}
		return reportFormList;

	}

}
