package com.webapp.apis.masters.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "stockincnote")
@Access(value=AccessType.FIELD)
public class StockMaster {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
    private Integer id;
	@Column(name="doc_dt")
	private Date docDt;
	@Column(name="doc_no")
	private String docNo;
	@Column(name="uid")
	private String uid;
	@Column(name="location_id")
	private Integer locationId;
	@Column(name="user_id")
	private String userId;
	@Column(name="party_id")
	private Integer partyId;
	@Column(name="c_prefix")
	private String cPrefix;
	@Column(name="from_no")
	private String fromNo;
	@Column(name="to_no")
	private String toNo;
	@Column(name="cust_id")
	private String custId;
	@Column(name="Udate")
	private Date Udate;
	@Column(name="Ntime")
	private Date Ntime ;
	@Column(name="upload_flag")
	private String uploadFlag;
	
	
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "stockmaster", referencedColumnName = "id")
	private List<StockMasterDetail> stockMasterDetailList;
    @Column(name = "created_by")
	private String createdBy;
	
	@Column(name = "updated_by")
	private String updatedBy;
	
	@Column(name = "created_date")
	private Date createdDate;
	
	@Column(name = "updated_date")
	private Date updatedDate;
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDocDt() {
		return docDt;
	}

	public void setDocDt(Date docDt) {
		this.docDt = docDt;
	}

	public String getDocNo() {
		return docNo;
	}

	public void setDocNo(String docNo) {
		this.docNo = docNo;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public Integer getLocationId() {
		return locationId;
	}

	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Integer getPartyId() {
		return partyId;
	}

	public void setPartyId(Integer partyId) {
		this.partyId = partyId;
	}

	public String getcPrefix() {
		return cPrefix;
	}

	public void setcPrefix(String cPrefix) {
		this.cPrefix = cPrefix;
	}

	public String getFromNo() {
		return fromNo;
	}

	public void setFromNo(String fromNo) {
		this.fromNo = fromNo;
	}

	public String getToNo() {
		return toNo;
	}

	public void setToNo(String toNo) {
		this.toNo = toNo;
	}

	public String getCustId() {
		return custId;
	}

	public void setCustId(String custId) {
		this.custId = custId;
	}

	public Date getUdate() {
		return Udate;
	}

	public void setUdate(Date udate) {
		Udate = udate;
	}

	public Date getNtime() {
		return Ntime;
	}

	public void setNtime(Date ntime) {
		Ntime = ntime;
	}

	public String getUploadFlag() {
		return uploadFlag;
	}

	public void setUploadFlag(String uploadFlag) {
		this.uploadFlag = uploadFlag;
	}

	public List<StockMasterDetail> getStockMasterDetailList() {
		return stockMasterDetailList;
	}

	public void setStockMasterDetailList(List<StockMasterDetail> stockMasterDetailList) {
		this.stockMasterDetailList = stockMasterDetailList;
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
	

	
   

}
