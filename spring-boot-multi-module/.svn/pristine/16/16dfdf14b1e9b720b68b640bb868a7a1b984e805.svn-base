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
@Table(name = "purchase_invoive_det")
public class PurchaseInvoiveDet implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "product_id")
    private int productId;
    @Column(name = "qty")
    private BigDecimal qty;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "rate")
    private BigDecimal rate;
    @Column(name = "amount")
    private BigDecimal amount;
    @Column(name = "batch_no")
    private String batchNo;
    @Column(name = "mfgdt")
    private String mfgdt;
    @Column(name = "exp_dt")
    private String expDt;
    @Column(name = "mrp")
    private String mrp;
    @Column(name = "Lns")
    private String lns;
    @Column(name = "Remark")
    private String remark;
    @Column(name = "discamt")
    private BigDecimal discamt;
    @Column(name = "fld_qty1")
    private Integer fldQty1;
    @Column(name = "fld_qty2")
    private BigDecimal fldQty2;
    @Column(name = "purity")
    private String purity;
    @Column(name = "fld_qty3")
    private BigDecimal fldQty3;
    @Column(name = "product_code")
    private String productCode;
    @Basic(optional = false)
    @Column(name = "product_name")
    private String productName;
    @Column(name = "VAT_pc")
    private BigDecimal vATpc;
    @Column(name = "ED_pc")
    private BigDecimal eDpc;
    @Column(name = "Qty_Dely2")
    private BigDecimal qtyDely2;
    @Column(name = "Dely_Date2")
    @Temporal(TemporalType.DATE)
    private Date delyDate2;
    @Column(name = "ed_amt")
    private BigDecimal edAmt;
    @Column(name = "variation_pc")
    private BigDecimal variationPc;
    @Column(name = "supp_rate")
    private BigDecimal suppRate;
    @Column(name = "pkg_fwdg")
    private BigDecimal pkgFwdg;
    @Column(name = "TOT_amt")
    private BigDecimal tOTamt;
    @Column(name = "VAT_amt")
    private BigDecimal vATamt;
    @Column(name = "CST_pc")
    private BigDecimal cSTpc;
    @Column(name = "CST_Amt")
    private BigDecimal cSTAmt;
    @Column(name = "disc_pc")
    private BigDecimal discPc;
    @Column(name = "basic_value")
    private BigDecimal basicValue;
    @Column(name = "qty_po")
    private BigDecimal qtyPo;
    @Column(name = "spl_note")
    private String splNote;
    @Column(name = "prod_name1")
    private String prodName1;
    @Column(name = "pkg_fwd_pc")
    private BigDecimal pkgFwdPc;
    @Column(name = "vch_id")
    private String vchId;
    @Column(name = "net_amt")
    private BigDecimal netAmt;
    @Column(name = "author")
    private String author;
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
    private PurchaseInvoive baseId;


    public PurchaseInvoiveDet() {
    }

    public PurchaseInvoiveDet(Integer id) {
        this.id = id;
    }

    public PurchaseInvoiveDet(Integer id, int productId, String productName) {
        this.id = id;
        this.productId = productId;
        this.productName = productName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
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

    public String getMfgdt() {
        return mfgdt;
    }

    public void setMfgdt(String mfgdt) {
        this.mfgdt = mfgdt;
    }

    public String getExpDt() {
        return expDt;
    }

    public void setExpDt(String expDt) {
        this.expDt = expDt;
    }

    public String getMrp() {
        return mrp;
    }

    public void setMrp(String mrp) {
        this.mrp = mrp;
    }

    public String getLns() {
        return lns;
    }

    public void setLns(String lns) {
        this.lns = lns;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public BigDecimal getDiscamt() {
        return discamt;
    }

    public void setDiscamt(BigDecimal discamt) {
        this.discamt = discamt;
    }

    public Integer getFldQty1() {
        return fldQty1;
    }

    public void setFldQty1(Integer fldQty1) {
        this.fldQty1 = fldQty1;
    }

    public BigDecimal getFldQty2() {
        return fldQty2;
    }

    public void setFldQty2(BigDecimal fldQty2) {
        this.fldQty2 = fldQty2;
    }

    public String getPurity() {
        return purity;
    }

    public void setPurity(String purity) {
        this.purity = purity;
    }

    public BigDecimal getFldQty3() {
        return fldQty3;
    }

    public void setFldQty3(BigDecimal fldQty3) {
        this.fldQty3 = fldQty3;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getVATpc() {
        return vATpc;
    }

    public void setVATpc(BigDecimal vATpc) {
        this.vATpc = vATpc;
    }

    public BigDecimal getEDpc() {
        return eDpc;
    }

    public void setEDpc(BigDecimal eDpc) {
        this.eDpc = eDpc;
    }

    public BigDecimal getQtyDely2() {
        return qtyDely2;
    }

    public void setQtyDely2(BigDecimal qtyDely2) {
        this.qtyDely2 = qtyDely2;
    }

    public Date getDelyDate2() {
        return delyDate2;
    }

    public void setDelyDate2(Date delyDate2) {
        this.delyDate2 = delyDate2;
    }

    public BigDecimal getEdAmt() {
        return edAmt;
    }

    public void setEdAmt(BigDecimal edAmt) {
        this.edAmt = edAmt;
    }

    public BigDecimal getVariationPc() {
        return variationPc;
    }

    public void setVariationPc(BigDecimal variationPc) {
        this.variationPc = variationPc;
    }

    public BigDecimal getSuppRate() {
        return suppRate;
    }

    public void setSuppRate(BigDecimal suppRate) {
        this.suppRate = suppRate;
    }

    public BigDecimal getPkgFwdg() {
        return pkgFwdg;
    }

    public void setPkgFwdg(BigDecimal pkgFwdg) {
        this.pkgFwdg = pkgFwdg;
    }

    public BigDecimal getTOTamt() {
        return tOTamt;
    }

    public void setTOTamt(BigDecimal tOTamt) {
        this.tOTamt = tOTamt;
    }

    public BigDecimal getVATamt() {
        return vATamt;
    }

    public void setVATamt(BigDecimal vATamt) {
        this.vATamt = vATamt;
    }

    public BigDecimal getCSTpc() {
        return cSTpc;
    }

    public void setCSTpc(BigDecimal cSTpc) {
        this.cSTpc = cSTpc;
    }

    public BigDecimal getCSTAmt() {
        return cSTAmt;
    }

    public void setCSTAmt(BigDecimal cSTAmt) {
        this.cSTAmt = cSTAmt;
    }

    public BigDecimal getDiscPc() {
        return discPc;
    }

    public void setDiscPc(BigDecimal discPc) {
        this.discPc = discPc;
    }

    public BigDecimal getBasicValue() {
        return basicValue;
    }

    public void setBasicValue(BigDecimal basicValue) {
        this.basicValue = basicValue;
    }

    public BigDecimal getQtyPo() {
        return qtyPo;
    }

    public void setQtyPo(BigDecimal qtyPo) {
        this.qtyPo = qtyPo;
    }

    public String getSplNote() {
        return splNote;
    }

    public void setSplNote(String splNote) {
        this.splNote = splNote;
    }

    public String getProdName1() {
        return prodName1;
    }

    public void setProdName1(String prodName1) {
        this.prodName1 = prodName1;
    }

    public BigDecimal getPkgFwdPc() {
        return pkgFwdPc;
    }

    public void setPkgFwdPc(BigDecimal pkgFwdPc) {
        this.pkgFwdPc = pkgFwdPc;
    }

    public String getVchId() {
        return vchId;
    }

    public void setVchId(String vchId) {
        this.vchId = vchId;
    }

    public BigDecimal getNetAmt() {
        return netAmt;
    }

    public void setNetAmt(BigDecimal netAmt) {
        this.netAmt = netAmt;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
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
    
   

    public PurchaseInvoive getBaseId() {
		return baseId;
	}

	public void setBaseId(PurchaseInvoive baseId) {
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
        if (!(object instanceof PurchaseInvoiveDet)) {
            return false;
        }
        PurchaseInvoiveDet other = (PurchaseInvoiveDet) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.PurchaseInvoiveDet[ id=" + id + " ]";
    }
    
    
}
