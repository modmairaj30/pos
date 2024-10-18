package com.webapp.apis.masters.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;


public class BomMasterFormBean implements Serializable{
	private static final long serialVersionUID = 1L;

	private Integer id;
	 private Integer productId;
    private String prodName;
    private String prodCode;
    private Date docDt;
    private String docNo;
    private Integer bomName;
    private BigDecimal rate;
    private String multidoc;
    private String description;
    private String uom;
    private String createdBy;
    private String updatedBy;
    private Date createdDate;
    private Date updatedDate;
    
    private List<BomDetailFormBean> bomDetailList;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProdName() {
		return prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
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

	public Integer getBomName() {
		return bomName;
	}

	public void setBomName(Integer bomName) {
		this.bomName = bomName;
	}

	public BigDecimal getRate() {
		return rate;
	}

	public void setRate(BigDecimal rate) {
		this.rate = rate;
	}

	public String getMultidoc() {
		return multidoc;
	}

	public void setMultidoc(String multidoc) {
		this.multidoc = multidoc;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUom() {
		return uom;
	}

	public void setUom(String uom) {
		this.uom = uom;
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

	public List<BomDetailFormBean> getBomDetailList() {
		return bomDetailList;
	}

	public void setBomDetailList(List<BomDetailFormBean> bomDetailList) {
		this.bomDetailList = bomDetailList;
	}

	public String getProdCode() {
		return prodCode;
	}

	public void setProdCode(String prodCode) {
		this.prodCode = prodCode;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}
    
    

}
