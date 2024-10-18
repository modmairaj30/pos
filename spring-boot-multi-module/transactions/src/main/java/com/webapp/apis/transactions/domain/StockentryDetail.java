package com.webapp.apis.transactions.domain;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "stockentry_detail")
public class StockentryDetail implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "product_id")
    private Integer productId;
    @Column(name = "qty")
    private BigDecimal qty;
    @Column(name = "bin2")
    private String bin2;
    @Column(name = "rate")
    private BigDecimal rate;
    @Column(name = "amount")
    private BigDecimal amount;
    @Column(name = "product_code")
    private String productCode;
    @Column(name = "Prod_name")
    private String prodname;
    @Column(name = "uom")
    private String uom;
    @Column(name = "author")
    private String author;
    @Column(name = "isbn_code")
    private String isbnCode;
    @Column(name = "supp_rate")
    private BigDecimal suppRate;
    @Column(name = "disc_pc")
    private BigDecimal discPc;
    @Column(name = "fld_bin")
    private String fldBin;
    @Column(name = "rack_no")
    private String rackNo;
    @Column(name = "supplier")
    private String supplier;
    @Column(name = "publisher")
    private String publisher;
    @Column(name = "fld_srate")
    private BigDecimal fldSrate;
    @Column(name = "fld_disc")
    private BigDecimal fldDisc;
    @Basic(optional = false)
    @Column(name = "product_name")
    private String productName;
    @JoinColumn(name = "base_id", referencedColumnName = "id")
    @ManyToOne
    private StockEntry baseId;

    public StockentryDetail() {
    }

    public StockentryDetail(Integer id) {
        this.id = id;
    }

    public StockentryDetail(Integer id, String productName) {
        this.id = id;
        this.productName = productName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    

    public StockEntry getBaseId() {
		return baseId;
	}

	public void setBaseId(StockEntry baseId) {
		this.baseId = baseId;
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
        if (!(object instanceof StockentryDetail)) {
            return false;
        }
        StockentryDetail other = (StockentryDetail) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.StockentryDetail[ id=" + id + " ]";
    }
    
}
