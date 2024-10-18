package com.webapp.apis.transactions.domain;

import java.io.Serializable;
import java.math.BigDecimal;
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
@Table(name = "invoice")
public class Invoice implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "doc_dt")
    @Temporal(TemporalType.DATE)
    private Date docDt;
    @Column(name = "doc_no")
    private String docNo;
    @Column(name = "LRno")
    private String lRno;
    @Column(name = "LRdate")
    @Temporal(TemporalType.DATE)
    private Date lRdate;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "gross_amt")
    private BigDecimal grossAmt;
    @Column(name = "net_amt")
    private BigDecimal netAmt;
    @Column(name = "party_id")
    private Integer partyId;
    @Column(name = "address")
    private String address;
    @Column(name = "address1")
    private String address1;
    @Column(name = "transportref")
    private String transportref;
    @Column(name = "ordno")
    private String ordno;
    @Column(name = "orddt")
    @Temporal(TemporalType.DATE)
    private Date orddt;
    @Column(name = "vat")
    private BigDecimal vat;
    @Column(name = "vatamt")
    private BigDecimal vatamt;
    @Column(name = "cstamt")
    private BigDecimal cstamt;
    @Column(name = "tinno")
    private String tinno;
    @Column(name = "cstno")
    private String cstno;
    @Column(name = "dlno")
    private String dlno;
    @Column(name = "dlno21")
    private String dlno21;
    @Column(name = "discamt")
    private BigDecimal discamt;
    @Column(name = "location_id")
    private Integer locationId;
    @Column(name = "location_code")
    private String locationCode;
    @Column(name = "payment_type")
    private String paymentType;
    @Column(name = "card")
    private BigDecimal card;
    @Column(name = "card_no")
    private Integer cardNo;
    @Column(name = "exp_date")
    @Temporal(TemporalType.DATE)
    private Date expDate;
    @Column(name = "branch")
    private String branch;
    @Column(name = "member_no")
    private String memberNo;
    @Column(name = "valid_date")
    @Temporal(TemporalType.DATE)
    private Date validDate;
    @Column(name = "years")
    private Integer years;
    @Column(name = "expiry_date")
    @Temporal(TemporalType.DATE)
    private Date expiryDate;
    @Column(name = "dis")
    private BigDecimal dis;
    @Column(name = "disc_pay")
    private Integer discPay;
    @Column(name = "discamt_pay")
    private BigDecimal discamtPay;
    @Column(name = "netamt_pay")
    private BigDecimal netamtPay;
    @Column(name = "credit_charges")
    private BigDecimal creditCharges;
    @Column(name = "credit_dummy")
    private BigDecimal creditDummy;
    @Column(name = "dcno")
    private String dcno;
    @Column(name = "dcdate")
    @Temporal(TemporalType.DATE)
    private Date dcdate;
    @Column(name = "qty")
    private BigDecimal qty;
    @Column(name = "chq_no")
    private String chqNo;
    @Column(name = "chq_date")
    @Temporal(TemporalType.DATE)
    private Date chqDate;
    @Column(name = "Chq_amt")
    private Integer ChqAmt;
    @Column(name = "chq_Issue_Bank")
    private String chqIssueBank;
    
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "base_id", referencedColumnName = "id")
    private List<InvoiceDet> InvoiceDetList;

    public Invoice() {
    }

    public Invoice(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDocDt() {
        return docDt;
    }

    public void setDocDt(Date docDt) {
        this.docDt = docDt;
    }

    public String getDocNo() {
        return docNo;
    }

    public void setDocNo(String docNo) {
        this.docNo = docNo;
    }

    public String getLRno() {
        return lRno;
    }

    public void setLRno(String lRno) {
        this.lRno = lRno;
    }

    public Date getLRdate() {
        return lRdate;
    }

    public void setLRdate(Date lRdate) {
        this.lRdate = lRdate;
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

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getTransportref() {
        return transportref;
    }

    public void setTransportref(String transportref) {
        this.transportref = transportref;
    }

    public String getOrdno() {
        return ordno;
    }

    public void setOrdno(String ordno) {
        this.ordno = ordno;
    }

    public Date getOrddt() {
        return orddt;
    }

    public void setOrddt(Date orddt) {
        this.orddt = orddt;
    }

    public BigDecimal getVat() {
        return vat;
    }

    public void setVat(BigDecimal vat) {
        this.vat = vat;
    }

    public BigDecimal getVatamt() {
        return vatamt;
    }

    public void setVatamt(BigDecimal vatamt) {
        this.vatamt = vatamt;
    }

    public BigDecimal getCstamt() {
        return cstamt;
    }

    public void setCstamt(BigDecimal cstamt) {
        this.cstamt = cstamt;
    }

    public String getTinno() {
        return tinno;
    }

    public void setTinno(String tinno) {
        this.tinno = tinno;
    }

    public String getCstno() {
        return cstno;
    }

    public void setCstno(String cstno) {
        this.cstno = cstno;
    }

    public String getDlno() {
        return dlno;
    }

    public void setDlno(String dlno) {
        this.dlno = dlno;
    }

    public String getDlno21() {
        return dlno21;
    }

    public void setDlno21(String dlno21) {
        this.dlno21 = dlno21;
    }

    public BigDecimal getDiscamt() {
        return discamt;
    }

    public void setDiscamt(BigDecimal discamt) {
        this.discamt = discamt;
    }

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
    }

    public String getLocationCode() {
        return locationCode;
    }

    public void setLocationCode(String locationCode) {
        this.locationCode = locationCode;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public BigDecimal getCard() {
        return card;
    }

    public void setCard(BigDecimal card) {
        this.card = card;
    }

    public Integer getCardNo() {
        return cardNo;
    }

    public void setCardNo(Integer cardNo) {
        this.cardNo = cardNo;
    }

    public Date getExpDate() {
        return expDate;
    }

    public void setExpDate(Date expDate) {
        this.expDate = expDate;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getMemberNo() {
        return memberNo;
    }

    public void setMemberNo(String memberNo) {
        this.memberNo = memberNo;
    }

    public Date getValidDate() {
        return validDate;
    }

    public void setValidDate(Date validDate) {
        this.validDate = validDate;
    }

    public Integer getYears() {
        return years;
    }

    public void setYears(Integer years) {
        this.years = years;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public BigDecimal getDis() {
        return dis;
    }

    public void setDis(BigDecimal dis) {
        this.dis = dis;
    }

    public Integer getDiscPay() {
        return discPay;
    }

    public void setDiscPay(Integer discPay) {
        this.discPay = discPay;
    }

    public BigDecimal getDiscamtPay() {
        return discamtPay;
    }

    public void setDiscamtPay(BigDecimal discamtPay) {
        this.discamtPay = discamtPay;
    }

    public BigDecimal getNetamtPay() {
        return netamtPay;
    }

    public void setNetamtPay(BigDecimal netamtPay) {
        this.netamtPay = netamtPay;
    }

    public BigDecimal getCreditCharges() {
        return creditCharges;
    }

    public void setCreditCharges(BigDecimal creditCharges) {
        this.creditCharges = creditCharges;
    }

    public BigDecimal getCreditDummy() {
        return creditDummy;
    }

    public void setCreditDummy(BigDecimal creditDummy) {
        this.creditDummy = creditDummy;
    }

    public String getDcno() {
        return dcno;
    }

    public void setDcno(String dcno) {
        this.dcno = dcno;
    }

    public Date getDcdate() {
        return dcdate;
    }

    public void setDcdate(Date dcdate) {
        this.dcdate = dcdate;
    }
    
    

    public String getlRno() {
		return lRno;
	}

	public void setlRno(String lRno) {
		this.lRno = lRno;
	}

	public Date getlRdate() {
		return lRdate;
	}

	public void setlRdate(Date lRdate) {
		this.lRdate = lRdate;
	}

	public BigDecimal getQty() {
		return qty;
	}

	public void setQty(BigDecimal qty) {
		this.qty = qty;
	}

	public List<InvoiceDet> getInvoiceDetList() {
        return InvoiceDetList;
    }

    public void setInvoiceDetList(List<InvoiceDet> invoiceDetList) {
        this.InvoiceDetList = invoiceDetList;
    }

    public String getChqNo() {
		return chqNo;
	}

	public void setChqNo(String chqNo) {
		this.chqNo = chqNo;
	}
	
	
	public Date getChqDate() {
		return chqDate;
	}

	public void setChqDate(Date chqDate) {
		this.chqDate = chqDate;
	}
	

	public Integer getChqAmt() {
		return ChqAmt;
	}

	public void setChqAmt(Integer chqAmt) {
		ChqAmt = chqAmt;
	}
	

	public String getChqIssueBank() {
		return chqIssueBank;
	}

	public void setChqIssueBank(String chqIssueBank) {
		this.chqIssueBank = chqIssueBank;
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
        if (!(object instanceof Invoice)) {
            return false;
        }
        Invoice other = (Invoice) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.javaapplication1.Invoice2[ id=" + id + " ]";
    }
    
}
