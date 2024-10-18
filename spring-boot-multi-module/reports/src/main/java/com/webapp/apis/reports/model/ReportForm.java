package com.webapp.apis.reports.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class ReportForm implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer reportId;
	private String reportName;
	private String reportType;
	private String fromDate;
	private String toDate;
	private String location;
	private String supplier;
	private String author;
	private String sqlSelectQry;
	private String refDocNo;
	private String refRevNo;
	private Date refDocDate;
	private String jasper;
	private String jasperName;
	private String enableToUserId;
	private String enableToRoleId;
	private BigDecimal userId;
	private String createdBy;
	private String updatedBy;
	private Date createdDate;
	private Date updatedDate;

	public Integer getReportId() {
		return reportId;
	}

	public void setReportId(Integer reportId) {
		this.reportId = reportId;
	}

	public String getReportName() {
		return reportName;
	}

	public void setReportName(String reportName) {
		this.reportName = reportName;
	}

	public String getReportType() {
		return reportType;
	}

	public void setReportType(String reportType) {
		this.reportType = reportType;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSqlSelectQry() {
		return sqlSelectQry;
	}

	public void setSqlSelectQry(String sqlSelectQry) {
		this.sqlSelectQry = sqlSelectQry;
	}

	public String getRefDocNo() {
		return refDocNo;
	}

	public void setRefDocNo(String refDocNo) {
		this.refDocNo = refDocNo;
	}

	public String getRefRevNo() {
		return refRevNo;
	}

	public void setRefRevNo(String refRevNo) {
		this.refRevNo = refRevNo;
	}

	public Date getRefDocDate() {
		return refDocDate;
	}

	public void setRefDocDate(Date refDocDate) {
		this.refDocDate = refDocDate;
	}

	public BigDecimal getUserId() {
		return userId;
	}

	public void setUserId(BigDecimal userId) {
		this.userId = userId;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getJasper() {
		return jasper;
	}

	public void setJasper(String jasper) {
		this.jasper = jasper;
	}

	public String getJasperName() {
		return jasperName;
	}

	public void setJasperName(String jasperName) {
		this.jasperName = jasperName;
	}

	public String getEnableToUserId() {
		return enableToUserId;
	}

	public void setEnableToUserId(String enableToUserId) {
		this.enableToUserId = enableToUserId;
	}

	public String getEnableToRoleId() {
		return enableToRoleId;
	}

	public void setEnableToRoleId(String enableToRoleId) {
		this.enableToRoleId = enableToRoleId;
	}

	public String getSupplier() {
		return supplier;
	}

	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
	
	

}
