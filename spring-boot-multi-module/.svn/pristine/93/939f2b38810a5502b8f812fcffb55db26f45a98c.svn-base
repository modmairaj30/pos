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
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "purchasereturns")
public class Purchasereturns implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
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
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "gross_amt")
    private BigDecimal grossAmt;
    @Column(name = "net_amt")
    private BigDecimal netAmt;
    @Column(name = "vch_id")
    private String vchId;
    @Column(name = "VAT")
    private BigDecimal vat;
    @Column(name = "location_id")
    private Integer locationId;
    @Column(name = "Inv_No")
    private String invNo;
    @Column(name = "PurInv_dt")
    @Temporal(TemporalType.DATE)
    private Date purInvdt;
    @Column(name = "VAT_Pc")
    private BigDecimal vATPc;
    @Column(name = "discount_amt")
    private BigDecimal discountAmt;
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
    
   	private List<PurchasereturnsDetail> purchaseInvoiveDetList;

    public Purchasereturns() {
    }

    public Purchasereturns(Integer id) {
        this.id = id;
    }
    
    public Purchasereturns(Integer id, String docNo) {
		this.id = id;
		this.docNo = docNo;
	}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getVchId() {
        return vchId;
    }

    public void setVchId(String vchId) {
        this.vchId = vchId;
    }

    public BigDecimal getVat() {
        return vat;
    }

    public void setVat(BigDecimal vat) {
        this.vat = vat;
    }

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
    }

    public String getInvNo() {
        return invNo;
    }

    public void setInvNo(String invNo) {
        this.invNo = invNo;
    }

    public Date getPurInvdt() {
        return purInvdt;
    }

    public void setPurInvdt(Date purInvdt) {
        this.purInvdt = purInvdt;
    }

    public BigDecimal getVATPc() {
        return vATPc;
    }

    public void setVATPc(BigDecimal vATPc) {
        this.vATPc = vATPc;
    }

    public BigDecimal getDiscountAmt() {
        return discountAmt;
    }

    public void setDiscountAmt(BigDecimal discountAmt) {
        this.discountAmt = discountAmt;
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

	

	public List<PurchasereturnsDetail> getPurchaseInvoiveDetList() {
		return purchaseInvoiveDetList;
	}

	public void setPurchaseInvoiveDetList(List<PurchasereturnsDetail> purchaseInvoiveDetList) {
		this.purchaseInvoiveDetList = purchaseInvoiveDetList;
	}

	@Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

   

	public BigDecimal getvATPc() {
		return vATPc;
	}

	public void setvATPc(BigDecimal vATPc) {
		this.vATPc = vATPc;
	}

	@Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Purchasereturns)) {
            return false;
        }
        Purchasereturns other = (Purchasereturns) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.javaapplication1.Purchasereturns[ id=" + id + " ]";
    }

    
}
