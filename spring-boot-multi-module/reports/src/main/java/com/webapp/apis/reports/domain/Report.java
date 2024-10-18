package com.webapp.apis.reports.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * The persistent class for the REPORT database table.
 * 
 */
@Entity
@Table(name = "report")
public class Report implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "report_id")
	private Integer reportId;

	@Column(name = "is_enabled")
	private String isEnabled;

	@Column(name = "report_name")
	private String reportName;

	@Column(name = "report_type")
	private String reportType;

	@Column(name = "from_date")
	private String fromDate;

	@Column(name = "to_date")
	private String toDate;

	@Column(name = "location")
	private String location;
	
	@Column(name = "supplier")
	private String supplier;
	
	@Column(name = "author")
	private String author;

	@Column(name = "jasper")
	private String jasper;

	@Column(name = "jasper_name")
	private String jasperName;

	@Column(name = "enable_to_user_id")
	private String enableToUserId;

	@Column(name = "enable_to_role_id")
	private String enableToRoleId;

	@Column(name = "sql_select_qry")
	private String sqlSelectQry;

	@Column(name = "created_by")
	private String createdBy;

	@Column(name = "updated_by")
	private String updatedBy;

	@Column(name = "created_date")
	private Date createdDate;

	@Column(name = "updated_date")
	private Date updatedDate;

	public Integer getReportId() {
		return reportId;
	}

	public void setReportId(Integer reportId) {
		this.reportId = reportId;
	}

	public String getIsEnabled() {
		return isEnabled;
	}

	public void setIsEnabled(String isEnabled) {
		this.isEnabled = isEnabled;
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

	public String getSqlSelectQry() {
		return sqlSelectQry;
	}

	public void setSqlSelectQry(String sqlSelectQry) {
		this.sqlSelectQry = sqlSelectQry;
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
