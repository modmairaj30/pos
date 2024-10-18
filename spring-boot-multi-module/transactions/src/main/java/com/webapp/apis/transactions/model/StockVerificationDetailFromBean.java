/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.apis.transactions.model;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 *
 * @author mohammed.mirajuddin
 */
public class StockVerificationDetailFromBean implements Serializable {

	private static final long serialVersionUID = 1L;
	private Integer id;

	private String productName;

	private Integer productId;

	private BigDecimal availQty;

	private BigDecimal qty;

	private BigDecimal difference;
	private String description;

	private String author;

	private String productCode;

	private String supplier;

	private String publisher;

	private String fldBin;

	private String rackNo;
	// @Max(value=?) @Min(value=?)//if you know range of your decimal fields
	// consider using these annotations to enforce field validation
	private BigDecimal fldSrate;
	private BigDecimal fldDisc;
	private BigDecimal rate;
	private BigDecimal totalAmt;
	private String dummyD;
	private Integer baseId;

	public StockVerificationDetailFromBean() {
	}

	public StockVerificationDetailFromBean(Integer id) {
		this.id = id;
	}

	public StockVerificationDetailFromBean(Integer id, int productId) {
		this.id = id;
		this.productId = productId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	
	public BigDecimal getDifference() {
		return difference;
	}

	public void setDifference(BigDecimal difference) {
		this.difference = difference;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getSupplier() {
		return supplier;
	}

	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getFldBin() {
		return fldBin;
	}

	public void setFldBin(String fldBin) {
		this.fldBin = fldBin;
	}

	public String getRackNo() {
		return rackNo;
	}

	public void setRackNo(String rackNo) {
		this.rackNo = rackNo;
	}

	public BigDecimal getFldSrate() {
		return fldSrate;
	}

	public void setFldSrate(BigDecimal fldSrate) {
		this.fldSrate = fldSrate;
	}

	public BigDecimal getFldDisc() {
		return fldDisc;
	}

	public void setFldDisc(BigDecimal fldDisc) {
		this.fldDisc = fldDisc;
	}

	public BigDecimal getRate() {
		return rate;
	}

	public void setRate(BigDecimal rate) {
		this.rate = rate;
	}

	public BigDecimal getTotalAmt() {
		return totalAmt;
	}

	public void setTotalAmt(BigDecimal totalAmt) {
		this.totalAmt = totalAmt;
	}

	public String getDummyD() {
		return dummyD;
	}

	public void setDummyD(String dummyD) {
		this.dummyD = dummyD;
	}

	public Integer getBaseId() {
		return baseId;
	}

	public void setBaseId(Integer baseId) {
		this.baseId = baseId;
	}

	public BigDecimal getAvailQty() {
		return availQty;
	}

	public void setAvailQty(BigDecimal availQty) {
		this.availQty = availQty;
	}

	public BigDecimal getQty() {
		return qty;
	}

	public void setQty(BigDecimal qty) {
		this.qty = qty;
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
		if (!(object instanceof StockVerificationDetailFromBean)) {
			return false;
		}
		StockVerificationDetailFromBean other = (StockVerificationDetailFromBean) object;
		if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "com.mycompany.mavenproject2.StockVerificationDetail[ id=" + id + " ]";
	}

}
