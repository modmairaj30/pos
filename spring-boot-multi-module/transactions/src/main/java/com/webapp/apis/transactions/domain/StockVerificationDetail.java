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
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "stock_verification_detail")
public class StockVerificationDetail implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    
    @Column(name = "product_name")
    private String productName;
   
    @Column(name = "product_id")
    private int productId;
    @Column(name = "avail_qty")
    private BigDecimal availQty;
    @Column(name = "qty")
    private BigDecimal qty;
    @Column(name = "difference")
    private BigDecimal difference;
    
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "author")
    private String author;
    
    @Column(name = "product_code")
    private String productCode;
    
    @Column(name = "supplier")
    private String supplier;
    
    @Column(name = "publisher")
    private String publisher;
    
    @Column(name = "fld_bin")
    private String fldBin;
    
    @Column(name = "rack_no")
    private String rackNo;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "fld_srate")
    private BigDecimal fldSrate;
    @Column(name = "fld_disc")
    private BigDecimal fldDisc;
    @Column(name = "rate")
    private BigDecimal rate;
    @Column(name = "total_amt")
    private BigDecimal totalAmt;
    
    @Column(name = "dummy_d")
    private String dummyD;
    @JoinColumn(name = "base_id", referencedColumnName = "id")
    @ManyToOne
    private StockVerification baseId;

    public StockVerificationDetail() {
    }

    public StockVerificationDetail(Integer id) {
        this.id = id;
    }

    public StockVerificationDetail(Integer id, int productId) {
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

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
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

    public StockVerification getBaseId() {
        return baseId;
    }

    public void setBaseId(StockVerification baseId) {
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
        if (!(object instanceof StockVerificationDetail)) {
            return false;
        }
        StockVerificationDetail other = (StockVerificationDetail) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.mavenproject2.StockVerificationDetail[ id=" + id + " ]";
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

	public BigDecimal getDifference() {
		return difference;
	}

	public void setDifference(BigDecimal difference) {
		this.difference = difference;
	}
    
    
    
}
