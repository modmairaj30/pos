package com.webapp.apis.transactions.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "tbl_stock_info")
public class StockInfo implements Serializable, Cloneable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	@Column(name = "doc_no")
	private String docNo;
	@Column(name = "doc_dt")
	@Temporal(TemporalType.DATE)
	private Date docDt;
	@Column(name = "party_id")
	private Integer partyId;
	@Column(name = "txn_id")
	private Integer txnId;
	@Column(name = "txn_function")
	private String txnFunction;
	@Column(name = "screen_id")
	private Integer screenId;
	@Column(name = "base_id")
	private Integer baseId;
	@Column(name = "detail_id")
	private Integer detailId;
	@Column(name = "product_id")
	private Integer productId;
	@Column(name = "location_id")
	private Integer locationId;
	// @Max(value=?) @Min(value=?)//if you know range of your decimal fields
	// consider using these annotations to enforce field validation
	@Column(name = "qty")
	private BigDecimal qty;
	@Column(name = "rate")
	private BigDecimal rate;

	@Column(name = "product_group")
	private String productGroup;

	@Column(name = "contra_location")
	private String contraLocation;

	@Column(name = "batch_no")
	private String batchNo;

	@Column(name = "product_code")
	private String productCode;

	@Column(name = "purity")
	private String purity;

	@Column(name = "last_row")
	private String lastRow;

	@Column(name = "fld_bin")
	private String fldBin;
	
	@Column(name = "user_id")
	private Integer userId;
	

	@Column(name = "lifo_val")
	private BigDecimal lifoVal;

	@Column(name = "fifo_val")
	private BigDecimal fifoVal;
	  

	@Column(name = "wet_avg_value")
	private BigDecimal wetAvgValue;
	
	@Column(name = "lifo_qty")
	private BigDecimal lifoQty;
	  
	@Column(name = "fifo_qty")
	private BigDecimal fifoQty;
	
	@Column(name = "wet_avg_rate")
	private BigDecimal wetAvgRate;
	
	@Column(name = "cum_qty")
	private BigDecimal cumQty;
	

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

	public Integer getPartyId() {
		return partyId;
	}

	public void setPartyId(Integer partyId) {
		this.partyId = partyId;
	}

	public String getTxnFunction() {
		return txnFunction;
	}

	public void setTxnFunction(String txnFunction) {
		this.txnFunction = txnFunction;
	}

	public Integer getScreenId() {
		return screenId;
	}

	public void setScreenId(Integer screenId) {
		this.screenId = screenId;
	}

	public Integer getBaseId() {
		return baseId;
	}

	public void setBaseId(Integer baseId) {
		this.baseId = baseId;
	}

	public Integer getDetailId() {
		return detailId;
	}

	public void setDetailId(Integer detailId) {
		this.detailId = detailId;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public Integer getLocationId() {
		return locationId;
	}

	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}

	public BigDecimal getQty() {
		return qty;
	}

	public void setQty(BigDecimal qty) {
		this.qty = qty;
	}

	public BigDecimal getRate() {
		return rate;
	}

	public void setRate(BigDecimal rate) {
		this.rate = rate;
	}

	public String getProductGroup() {
		return productGroup;
	}

	public void setProductGroup(String productGroup) {
		this.productGroup = productGroup;
	}

	public String getContraLocation() {
		return contraLocation;
	}

	public void setContraLocation(String contraLocation) {
		this.contraLocation = contraLocation;
	}

	public String getBatchNo() {
		return batchNo;
	}

	public void setBatchNo(String batchNo) {
		this.batchNo = batchNo;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getPurity() {
		return purity;
	}

	public void setPurity(String purity) {
		this.purity = purity;
	}

	public String getLastRow() {
		return lastRow;
	}

	public void setLastRow(String lastRow) {
		this.lastRow = lastRow;
	}

	public String getFldBin() {
		return fldBin;
	}

	public void setFldBin(String fldBin) {
		this.fldBin = fldBin;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getTxnId() {
		return txnId;
	}

	public void setTxnId(Integer txnId) {
		this.txnId = txnId;
	}

	public BigDecimal getLifoVal() {
		return lifoVal;
	}

	public void setLifoVal(BigDecimal lifoVal) {
		this.lifoVal = lifoVal;
	}

	public BigDecimal getFifoVal() {
		return fifoVal;
	}

	public void setFifoVal(BigDecimal fifoVal) {
		this.fifoVal = fifoVal;
	}

	public BigDecimal getWetAvgValue() {
		return wetAvgValue;
	}

	public void setWetAvgValue(BigDecimal wetAvgValue) {
		this.wetAvgValue = wetAvgValue;
	}

	public BigDecimal getLifoQty() {
		return lifoQty;
	}

	public void setLifoQty(BigDecimal lifoQty) {
		this.lifoQty = lifoQty;
	}

	public BigDecimal getFifoQty() {
		return fifoQty;
	}

	public void setFifoQty(BigDecimal fifoQty) {
		this.fifoQty = fifoQty;
	}

	public BigDecimal getWetAvgRate() {
		return wetAvgRate;
	}

	public void setWetAvgRate(BigDecimal wetAvgRate) {
		this.wetAvgRate = wetAvgRate;
	}

	public BigDecimal getCumQty() {
		return cumQty;
	}

	public void setCumQty(BigDecimal cumQty) {
		this.cumQty = cumQty;
	}
	

	public Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }
	
	
	
	

}