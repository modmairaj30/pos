package com.webapp.apis.transactions.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "salesreturns")
public class Salesreturns implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "gross_amt")
    private BigDecimal grossAmt;
    @Column(name = "net_amt")
    private BigDecimal netAmt;
    @Column(name = "credit_acc")
    private Integer creditAcc;
    @Column(name = "debit_acc")
    private Integer debitAcc;
    @Column(name = "doc_no")
    private String docNo;
    @Column(name = "doc_dt")
    @Temporal(TemporalType.DATE)
    private Date docDt;
    @Column(name = "party_id")
    private Integer partyId;
    @Column(name = "Address")
    private String address;
    @Column(name = "vch_id")
    private Integer vchId;
    @Column(name = "Inv_No")
    private String invNo;
    @Column(name = "Inv_Dt")
    @Temporal(TemporalType.DATE)
    private Date invDt;
    @Column(name = "vat")
    private BigDecimal vat;
    @Column(name = "discount")
    private BigDecimal discount;
    @Column(name = "location_id")
    private Integer locationId;
    @Column(name = "cash")
    private BigDecimal cash;
    @Column(name = "Cheque")
    private BigDecimal cheque;
    @Column(name = "chq_no")
    private String chqNo;
    @Column(name = "chq_dt")
    private String chqDt;
    @Column(name = "comment")
    private String comment;
    @Column(name = "ref_no")
    private String refNo;
    @Column(name = "ref_date")
    @Temporal(TemporalType.DATE)
    private Date refDate;
    @Column(name = "disc_amt")
    private BigDecimal discAmt;
    @Column(name = "created_by")
    private String createdBy;
    @Column(name = "updated_by")
	private String updatedBy;
    @Column(name = "created_date")
	private Date createdDate;
    @Column(name = "updated_date")
	private Date updatedDate;
    
    
    

	@OneToMany(cascade = CascadeType.ALL)
  	@JoinColumn(name = "base_id", referencedColumnName = "id")
  	private List<SalesreturnsDetail> InvoiceDetList;
 
   
    public Salesreturns() {
    }

    public Salesreturns(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    
    public BigDecimal getGrossAmt() {
        return grossAmt;
    }

    public void setGrossAmt(BigDecimal grossAmt) {
        this.grossAmt = grossAmt;
    }

    public BigDecimal getNetAmt() {
        return netAmt;
    }

    public void setNetAmt(BigDecimal netAmt) {
        this.netAmt = netAmt;
    }

    public Integer getCreditAcc() {
        return creditAcc;
    }

    public void setCreditAcc(Integer creditAcc) {
        this.creditAcc = creditAcc;
    }

    public Integer getDebitAcc() {
        return debitAcc;
    }

    public void setDebitAcc(Integer debitAcc) {
        this.debitAcc = debitAcc;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getVchId() {
        return vchId;
    }

    public void setVchId(Integer vchId) {
        this.vchId = vchId;
    }

    public String getInvNo() {
        return invNo;
    }

    public void setInvNo(String invNo) {
        this.invNo = invNo;
    }

    public Date getInvDt() {
        return invDt;
    }

    public void setInvDt(Date invDt) {
        this.invDt = invDt;
    }

    public BigDecimal getVat() {
        return vat;
    }

    public void setVat(BigDecimal vat) {
        this.vat = vat;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
    }

    public BigDecimal getCash() {
        return cash;
    }

    public void setCash(BigDecimal cash) {
        this.cash = cash;
    }

    public BigDecimal getCheque() {
        return cheque;
    }

    public void setCheque(BigDecimal cheque) {
        this.cheque = cheque;
    }

    public String getChqNo() {
        return chqNo;
    }

    public void setChqNo(String chqNo) {
        this.chqNo = chqNo;
    }

    public String getChqDt() {
        return chqDt;
    }

    public void setChqDt(String chqDt) {
        this.chqDt = chqDt;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getRefNo() {
        return refNo;
    }

    public void setRefNo(String refNo) {
        this.refNo = refNo;
    }

    public Date getRefDate() {
        return refDate;
    }

    public void setRefDate(Date refDate) {
        this.refDate = refDate;
    }

    public BigDecimal getDiscAmt() {
        return discAmt;
    }

    public void setDiscAmt(BigDecimal discAmt) {
        this.discAmt = discAmt;
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
	
	

   
  

	public List<SalesreturnsDetail> getInvoiceDetList() {
		return InvoiceDetList;
	}

	public void setInvoiceDetList(List<SalesreturnsDetail> invoiceDetList) {
		InvoiceDetList = invoiceDetList;
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
        if (!(object instanceof Salesreturns)) {
            return false;
        }
        Salesreturns other = (Salesreturns) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.javaapplication1.Salesreturns[ id=" + id + " ]";
    }
    
}