package com.webapp.apis.transactions.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 *
 * @author mohammed.mirajuddin
 */
public class StockVerificationFormBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;

	private String docNo;

	private Date docDt;

	private Integer locationId;

	private String verifiedBy;

	private String userId;

	private String dummy;
	private String createdBy;
	private String updatedBy;
	private Date createdDate;
	private Date updatedDate;
	

	private List<StockVerificationDetailFromBean> stockVerificationDetailList;

	public StockVerificationFormBean() {
	}

	public StockVerificationFormBean(Integer id) {
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDocNo() {
		return docNo;
	}

	public void setDocNo(String docNo) {
		this.docNo = docNo;
	}

	public Date getDocDt() {
		return docDt;
	}

	public void setDocDt(Date docDt) {
		this.docDt = docDt;
	}

	public Integer getLocationId() {
		return locationId;
	}

	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}

	public String getVerifiedBy() {
		return verifiedBy;
	}

	public void setVerifiedBy(String verifiedBy) {
		this.verifiedBy = verifiedBy;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getDummy() {
		return dummy;
	}

	public void setDummy(String dummy) {
		this.dummy = dummy;
	}
	
	

	public List<StockVerificationDetailFromBean> getStockVerificationDetailList() {
		return stockVerificationDetailList;
	}

	public void setStockVerificationDetailList(List<StockVerificationDetailFromBean> stockVerificationDetailList) {
		this.stockVerificationDetailList = stockVerificationDetailList;
	}

	@Override
	public int hashCode() {
		int hash = 0;
		hash += (id != null ? id.hashCode() : 0);
		return hash;
	}

	@Override
	public boolean equals(Object object) {
		// TODO: Warning - this method won't work in the case the id fields are not set
		if (!(object instanceof StockVerificationFormBean)) {
			return false;
		}
		StockVerificationFormBean other = (StockVerificationFormBean) object;
		if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "com.mycompany.mavenproject2.StockVerification[ id=" + id + " ]";
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
