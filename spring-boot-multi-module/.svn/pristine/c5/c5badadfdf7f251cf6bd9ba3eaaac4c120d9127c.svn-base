package com.webapp.apis.transactions.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "stocktransfers_detail")
public class StocktransfersDetail implements Serializable {
	private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "qty")
    private BigDecimal qty;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "rate")
    private BigDecimal rate;
    @Column(name = "amount")
    private BigDecimal amount;
    @Column(name = "batch_no")
    private String batchNo;
    @Column(name = "exp_dt")
    private String expDt;
    @Column(name = "fld_mfgdt")
    @Temporal(TemporalType.DATE)
    private Date fldMfgdt;
    @Column(name = "pack")
    private String pack;
    @Column(name = "product_id")
    private Integer productId;
    @Column(name = "batch_tracker")
    private String batchTracker;
    @Column(name = "fld_qty2")
    private BigDecimal fldQty2;
    @Column(name = "fld_length")
    private Integer fldLength;
    @Column(name = "purity")
    private BigDecimal purity;
    @Column(name = "fld_qty1")
    private Integer fldQty1;
    @Column(name = "uom")
    private String uom;
    @Column(name = "pcs_net")
    private Integer pcsNet;
    @Column(name = "trading_BOM")
    private Integer tradingBOM;
    @Column(name = "fld_qty3")
    private BigDecimal fldQty3;
    @Column(name = "disc_amt")
    private BigDecimal discAmt;
    @Column(name = "net_amt")
    private BigDecimal netAmt;
    @Column(name = "vch_id")
    private String vchId;
    @Basic(optional = false)
    @Column(name = "product_name")
    private String productName;
    @Column(name = "product_group")
    private String productGroup;
    @Column(name = "product_code")
    private String productCode;
    @Column(name = "author")
    private String author;
    @Column(name = "isbn_code")
    private String isbnCode;
    @Column(name = "disc_pc")
    private BigDecimal discPc;
    @Column(name = "publisher")
    private String publisher;
    @Column(name = "supplier")
    private String supplier;
    @Column(name = "fld_srate")
    private BigDecimal fldSrate;
    @Column(name = "fld_disc")
    private BigDecimal fldDisc;
   
    @JoinColumn(name = "base_id", referencedColumnName = "id")
    @ManyToOne
    private Invoice baseId;
 
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getBatchNo() {
		return batchNo;
	}

	public void setBatchNo(String batchNo) {
		this.batchNo = batchNo;
	}

	public String getExpDt() {
		return expDt;
	}

	public void setExpDt(String expDt) {
		this.expDt = expDt;
	}

	public Date getFldMfgdt() {
		return fldMfgdt;
	}

	public void setFldMfgdt(Date fldMfgdt) {
		this.fldMfgdt = fldMfgdt;
	}

	public String getPack() {
		return pack;
	}

	public void setPack(String pack) {
		this.pack = pack;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getBatchTracker() {
		return batchTracker;
	}

	public void setBatchTracker(String batchTracker) {
		this.batchTracker = batchTracker;
	}

	public BigDecimal getFldQty2() {
		return fldQty2;
	}

	public void setFldQty2(BigDecimal fldQty2) {
		this.fldQty2 = fldQty2;
	}

	public Integer getFldLength() {
		return fldLength;
	}

	public void setFldLength(Integer fldLength) {
		this.fldLength = fldLength;
	}

	public BigDecimal getPurity() {
		return purity;
	}

	public void setPurity(BigDecimal purity) {
		this.purity = purity;
	}

	public Integer getFldQty1() {
		return fldQty1;
	}

	public void setFldQty1(Integer fldQty1) {
		this.fldQty1 = fldQty1;
	}

	public String getUom() {
		return uom;
	}

	public void setUom(String uom) {
		this.uom = uom;
	}

	public Integer getPcsNet() {
		return pcsNet;
	}

	public void setPcsNet(Integer pcsNet) {
		this.pcsNet = pcsNet;
	}

	public Integer getTradingBOM() {
		return tradingBOM;
	}

	public void setTradingBOM(Integer tradingBOM) {
		this.tradingBOM = tradingBOM;
	}

	public BigDecimal getFldQty3() {
		return fldQty3;
	}

	public void setFldQty3(BigDecimal fldQty3) {
		this.fldQty3 = fldQty3;
	}

	public BigDecimal getDiscAmt() {
		return discAmt;
	}

	public void setDiscAmt(BigDecimal discAmt) {
		this.discAmt = discAmt;
	}

	public BigDecimal getNetAmt() {
		return netAmt;
	}

	public void setNetAmt(BigDecimal netAmt) {
		this.netAmt = netAmt;
	}

	public String getVchId() {
		return vchId;
	}

	public void setVchId(String vchId) {
		this.vchId = vchId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductGroup() {
		return productGroup;
	}

	public void setProductGroup(String productGroup) {
		this.productGroup = productGroup;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
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

	public BigDecimal getDiscPc() {
		return discPc;
	}

	public void setDiscPc(BigDecimal discPc) {
		this.discPc = discPc;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getSupplier() {
		return supplier;
	}

	public void setSupplier(String supplier) {
		this.supplier = supplier;
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

	public Invoice getBaseId() {
		return baseId;
	}

	public void setBaseId(Invoice baseId) {
		this.baseId = baseId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
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
        if (!(object instanceof StocktransfersDetail)) {
            return false;
        }
        StocktransfersDetail other = (StocktransfersDetail) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.javaapplication1.StocktransfersDetail[ id=" + id + " ]";
    }
    
}
