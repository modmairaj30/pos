package com.webapp.apis.transactions.model;

import java.io.Serializable;
import java.math.BigDecimal;

public class StockEntryDetailFormBean implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;

	private Integer baseId;

	private Integer productId;

	private BigDecimal qty;

	private String bin2;

	private BigDecimal rate;

	private BigDecimal amount;

	private String productCode;

	private String prodname;

	private String uom;

	private String author;

	private String isbnCode;

	private BigDecimal suppRate;

	private BigDecimal discPc;

	private String fldBin;

	private String rackNo;

	private String supplier;

	private String publisher;

	private BigDecimal fldSrate;

	private BigDecimal fldDisc;
	private String productName;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getBaseId() {
		return baseId;
	}

	public void setBaseId(Integer baseId) {
		this.baseId = baseId;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public BigDecimal getQty() {
		return qty;
	}

	public void setQty(BigDecimal qty) {
		this.qty = qty;
	}

	public String getBin2() {
		return bin2;
	}

	public void setBin2(String bin2) {
		this.bin2 = bin2;
	}

	public BigDecimal getRate() {
		return rate;
	}

	public void setRate(BigDecimal rate) {
		this.rate = rate;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getProdname() {
		return prodname;
	}

	public void setProdname(String prodname) {
		this.prodname = prodname;
	}

	public String getUom() {
		return uom;
	}

	public void setUom(String uom) {
		this.uom = uom;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getIsbnCode() {
		return isbnCode;
	}

	public void setIsbnCode(String isbnCode) {
		this.isbnCode = isbnCode;
	}

	public BigDecimal getSuppRate() {
		return suppRate;
	}

	public void setSuppRate(BigDecimal suppRate) {
		this.suppRate = suppRate;
	}

	public BigDecimal getDiscPc() {
		return discPc;
	}

	public void setDiscPc(BigDecimal discPc) {
		this.discPc = discPc;
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

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

}
