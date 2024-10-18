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
@Table(name = "stock_requisition_detail")
public class StockRequisitionDetail implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "product_id")
    private Integer productId;
    @Column(name = "author")
    private String author;
    @Column(name = "productcode")
    private String productcode;
    @Column(name = "publisher")
    private String publisher;
    @Column(name = "isbn_code")
    private String isbnCode;
    @Column(name = "rate")
    private BigDecimal rate;
    @Column(name = "supplier")
    private String supplier;
    @Column(name = "fld_srate")
    private BigDecimal fldSrate;
    @Column(name = "fld_disc")
    private BigDecimal fldDisc;
    @Column(name = "qty")
    private BigDecimal qty;
    @Basic(optional = false)
    @Column(name = "product_name")
    private String productName;
    
    @JoinColumn(name = "base_id", referencedColumnName = "id")
    @ManyToOne
    private StockRequisition baseId;
   

    public StockRequisitionDetail() {
    }

    public StockRequisitionDetail(Integer id) {
        this.id = id;
    }

    public StockRequisitionDetail(Integer id, String productName) {
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getProductcode() {
        return productcode;
    }

    public void setProductcode(String productcode) {
        this.productcode = productcode;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getIsbnCode() {
        return isbnCode;
    }

    public void setIsbnCode(String isbnCode) {
        this.isbnCode = isbnCode;
    }

    public BigDecimal getRate() {
        return rate;
    }

    public void setRate(BigDecimal rate) {
        this.rate = rate;
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

    public BigDecimal getQty() {
        return qty;
    }

    public void setQty(BigDecimal qty) {
        this.qty = qty;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

   

    public StockRequisition getBaseId() {
		return baseId;
	}

	public void setBaseId(StockRequisition baseId) {
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
        if (!(object instanceof StockRequisitionDetail)) {
            return false;
        }
        StockRequisitionDetail other = (StockRequisitionDetail) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.StockRequisitionDetail[ id=" + id + " ]";
    }
    
}
