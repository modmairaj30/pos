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
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "purchase_invoive")
public class PurchaseInvoive implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	@Column(name = "id")
	private Integer id;
	// @Max(value=?) @Min(value=?)//if you know range of your decimal fields
	// consider using these annotations to enforce field validation
	@Column(name = "gross_amt")
	private BigDecimal grossAmt;
	@Column(name = "doc_dt")
	@Temporal(TemporalType.DATE)
	private Date docDt;
	@Basic(optional = false)
	@Column(name = "doc_no")
	private String docNo;
	@Column(name = "party_id")
	private Integer partyId;
	@Column(name = "Exciseduty")
	private BigDecimal exciseduty;
	@Column(name = "address")
	private String address;
	@Column(name = "city")
	private String city;
	@Column(name = "pin")
	private String pin;
	@Column(name = "state")
	private String state;
	@Column(name = "payterms")
	private String payterms;
	@Column(name = "transporter")
	private String transporter;
	@Column(name = "Salestax")
	private BigDecimal salestax;
	@Column(name = "cst")
	private BigDecimal cst;
	@Column(name = "vatamt")
	private BigDecimal vatamt;
	@Column(name = "cstamt")
	private BigDecimal cstamt;
	@Column(name = "exciseamt")
	private BigDecimal exciseamt;
	@Column(name = "potype")
	private Integer potype;
	@Column(name = "discount1")
	private BigDecimal discount1;
	@Column(name = "location_id")
	private Integer locationId;
	@Column(name = "OtherCharges")
	private BigDecimal otherCharges;
	@Column(name = "location_code")
	private String locationCode;
	@Column(name = "status_code")
	private String statusCode;
	@Lob
	@Column(name = "Approval_Comments")
	private String approvalComments;
	@Column(name = "address2")
	private String address2;
	@Column(name = "phone_no")
	private String phoneNo;
	@Column(name = "fax_no")
	private String faxNo;
	@Column(name = "ref_no")
	private String refNo;
	@Column(name = "PO_earlier_no")
	private String pOearlierno;
	@Column(name = "Ref_dt")
	@Temporal(TemporalType.DATE)
	private Date refdt;
	@Column(name = "PO_earlier_dt")
	@Temporal(TemporalType.DATE)
	private Date pOearlierdt;
	@Column(name = "freight")
	private BigDecimal freight;
	@Column(name = "freight_type")
	private String freightType;
	@Column(name = "mode_despatch")
	private String modeDespatch;
	@Column(name = "Destination")
	private String destination;
	@Column(name = "Authorised_Transp")
	private String authorisedTransp;
	@Column(name = "pkg_fwd_amt")
	private BigDecimal pkgFwdAmt;
	@Column(name = "TO_Tax")
	private BigDecimal tOTax;
	@Column(name = "price_Basis")
	private String priceBasis;
	@Column(name = "enq_no")
	private String enqNo;
	@Column(name = "Enq_date")
	@Temporal(TemporalType.DATE)
	private Date enqdate;
	@Column(name = "discount_pc")
	private BigDecimal discountPc;
	@Column(name = "discount_amt")
	private BigDecimal discountAmt;
	@Column(name = "disc_pc_amt")
	private BigDecimal discPcAmt;
	@Column(name = "discount_prod_wise")
	private BigDecimal discountProdWise;
	@Column(name = "ED_Type_PO")
	private String eDTypePO;
	@Column(name = "tax_type_PO")
	private String taxtypePO;
	@Column(name = "email")
	private String email;
	@Column(name = "TIN_No")
	private String tINNo;
	@Column(name = "payterms2")
	private String payterms2;
	@Column(name = "payterms3")
	private String payterms3;
	@Column(name = "payterms4")
	private String payterms4;
	@Column(name = "remarks")
	private String remarks;
	@Column(name = "TOT_pc")
	private BigDecimal tOTpc;
	@Column(name = "department")
	private String department;
	@Column(name = "Our_Ref_No")
	private String ourRefNo;
	@Column(name = "code")
	private String code;
	@Column(name = "pkg_fwd_pc")
	private BigDecimal pkgFwdPc;
	@Column(name = "pkg_fwd_type")
	private String pkgFwdType;
	@Column(name = "address3")
	private String address3;
	@Column(name = "tax_type_note")
	private String taxTypeNote;
	@Column(name = "version_no")
	private String versionNo;
	@Column(name = "fld_dept")
	private String fldDept;
	@Column(name = "base_doc_no")
	private String baseDocNo;
	@Column(name = "base_doc_dt")
	private String baseDocDt;
	@Column(name = "vch_id")
	private Integer vchId;
	@Column(name = "Amt")
	private BigDecimal amt;
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
	private List<PurchaseInvoiveDet> PurchaseInvoiveDetList;

	public PurchaseInvoive() {
	}

	public PurchaseInvoive(Integer id) {
		this.id = id;
	}

	public PurchaseInvoive(Integer id, String docNo) {
		this.id = id;
		this.docNo = docNo;
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

	public Integer getPartyId() {
		return partyId;
	}

	public void setPartyId(Integer partyId) {
		this.partyId = partyId;
	}

	public BigDecimal getExciseduty() {
		return exciseduty;
	}

	public void setExciseduty(BigDecimal exciseduty) {
		this.exciseduty = exciseduty;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPayterms() {
		return payterms;
	}

	public void setPayterms(String payterms) {
		this.payterms = payterms;
	}

	public String getTransporter() {
		return transporter;
	}

	public void setTransporter(String transporter) {
		this.transporter = transporter;
	}

	public BigDecimal getSalestax() {
		return salestax;
	}

	public void setSalestax(BigDecimal salestax) {
		this.salestax = salestax;
	}

	public BigDecimal getCst() {
		return cst;
	}

	public void setCst(BigDecimal cst) {
		this.cst = cst;
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

	public BigDecimal getExciseamt() {
		return exciseamt;
	}

	public void setExciseamt(BigDecimal exciseamt) {
		this.exciseamt = exciseamt;
	}

	public Integer getPotype() {
		return potype;
	}

	public void setPotype(Integer potype) {
		this.potype = potype;
	}

	public BigDecimal getDiscount1() {
		return discount1;
	}

	public void setDiscount1(BigDecimal discount1) {
		this.discount1 = discount1;
	}

	public Integer getLocationId() {
		return locationId;
	}

	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}

	public BigDecimal getOtherCharges() {
		return otherCharges;
	}

	public void setOtherCharges(BigDecimal otherCharges) {
		this.otherCharges = otherCharges;
	}

	public String getLocationCode() {
		return locationCode;
	}

	public void setLocationCode(String locationCode) {
		this.locationCode = locationCode;
	}

	public String getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(String statusCode) {
		this.statusCode = statusCode;
	}

	public String getApprovalComments() {
		return approvalComments;
	}

	public void setApprovalComments(String approvalComments) {
		this.approvalComments = approvalComments;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getFaxNo() {
		return faxNo;
	}

	public void setFaxNo(String faxNo) {
		this.faxNo = faxNo;
	}

	public String getRefNo() {
		return refNo;
	}

	public void setRefNo(String refNo) {
		this.refNo = refNo;
	}

	public String getPOearlierno() {
		return pOearlierno;
	}

	public void setPOearlierno(String pOearlierno) {
		this.pOearlierno = pOearlierno;
	}

	public Date getRefdt() {
		return refdt;
	}

	public void setRefdt(Date refdt) {
		this.refdt = refdt;
	}

	public Date getPOearlierdt() {
		return pOearlierdt;
	}

	public void setPOearlierdt(Date pOearlierdt) {
		this.pOearlierdt = pOearlierdt;
	}

	public BigDecimal getFreight() {
		return freight;
	}

	public void setFreight(BigDecimal freight) {
		this.freight = freight;
	}

	public String getFreightType() {
		return freightType;
	}

	public void setFreightType(String freightType) {
		this.freightType = freightType;
	}

	public String getModeDespatch() {
		return modeDespatch;
	}

	public void setModeDespatch(String modeDespatch) {
		this.modeDespatch = modeDespatch;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getAuthorisedTransp() {
		return authorisedTransp;
	}

	public void setAuthorisedTransp(String authorisedTransp) {
		this.authorisedTransp = authorisedTransp;
	}

	public BigDecimal getPkgFwdAmt() {
		return pkgFwdAmt;
	}

	public void setPkgFwdAmt(BigDecimal pkgFwdAmt) {
		this.pkgFwdAmt = pkgFwdAmt;
	}

	public BigDecimal getTOTax() {
		return tOTax;
	}

	public void setTOTax(BigDecimal tOTax) {
		this.tOTax = tOTax;
	}

	public String getPriceBasis() {
		return priceBasis;
	}

	public void setPriceBasis(String priceBasis) {
		this.priceBasis = priceBasis;
	}

	public String getEnqNo() {
		return enqNo;
	}

	public void setEnqNo(String enqNo) {
		this.enqNo = enqNo;
	}

	public Date getEnqdate() {
		return enqdate;
	}

	public void setEnqdate(Date enqdate) {
		this.enqdate = enqdate;
	}

	public BigDecimal getDiscountPc() {
		return discountPc;
	}

	public void setDiscountPc(BigDecimal discountPc) {
		this.discountPc = discountPc;
	}

	public BigDecimal getDiscountAmt() {
		return discountAmt;
	}

	public void setDiscountAmt(BigDecimal discountAmt) {
		this.discountAmt = discountAmt;
	}

	public BigDecimal getDiscPcAmt() {
		return discPcAmt;
	}

	public void setDiscPcAmt(BigDecimal discPcAmt) {
		this.discPcAmt = discPcAmt;
	}

	public BigDecimal getDiscountProdWise() {
		return discountProdWise;
	}

	public void setDiscountProdWise(BigDecimal discountProdWise) {
		this.discountProdWise = discountProdWise;
	}

	public String getEDTypePO() {
		return eDTypePO;
	}

	public void setEDTypePO(String eDTypePO) {
		this.eDTypePO = eDTypePO;
	}

	public String getTaxtypePO() {
		return taxtypePO;
	}

	public void setTaxtypePO(String taxtypePO) {
		this.taxtypePO = taxtypePO;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTINNo() {
		return tINNo;
	}

	public void setTINNo(String tINNo) {
		this.tINNo = tINNo;
	}

	public String getPayterms2() {
		return payterms2;
	}

	public void setPayterms2(String payterms2) {
		this.payterms2 = payterms2;
	}

	public String getPayterms3() {
		return payterms3;
	}

	public void setPayterms3(String payterms3) {
		this.payterms3 = payterms3;
	}

	public String getPayterms4() {
		return payterms4;
	}

	public void setPayterms4(String payterms4) {
		this.payterms4 = payterms4;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public BigDecimal getTOTpc() {
		return tOTpc;
	}

	public void setTOTpc(BigDecimal tOTpc) {
		this.tOTpc = tOTpc;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getOurRefNo() {
		return ourRefNo;
	}

	public void setOurRefNo(String ourRefNo) {
		this.ourRefNo = ourRefNo;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public BigDecimal getPkgFwdPc() {
		return pkgFwdPc;
	}

	public void setPkgFwdPc(BigDecimal pkgFwdPc) {
		this.pkgFwdPc = pkgFwdPc;
	}

	public String getPkgFwdType() {
		return pkgFwdType;
	}

	public void setPkgFwdType(String pkgFwdType) {
		this.pkgFwdType = pkgFwdType;
	}

	public String getAddress3() {
		return address3;
	}

	public void setAddress3(String address3) {
		this.address3 = address3;
	}

	public String getTaxTypeNote() {
		return taxTypeNote;
	}

	public void setTaxTypeNote(String taxTypeNote) {
		this.taxTypeNote = taxTypeNote;
	}

	public String getVersionNo() {
		return versionNo;
	}

	public void setVersionNo(String versionNo) {
		this.versionNo = versionNo;
	}

	public String getFldDept() {
		return fldDept;
	}

	public void setFldDept(String fldDept) {
		this.fldDept = fldDept;
	}

	public String getBaseDocNo() {
		return baseDocNo;
	}

	public void setBaseDocNo(String baseDocNo) {
		this.baseDocNo = baseDocNo;
	}

	public String getBaseDocDt() {
		return baseDocDt;
	}

	public void setBaseDocDt(String baseDocDt) {
		this.baseDocDt = baseDocDt;
	}

	public Integer getVchId() {
		return vchId;
	}

	public void setVchId(Integer vchId) {
		this.vchId = vchId;
	}

	public BigDecimal getAmt() {
		return amt;
	}

	public void setAmt(BigDecimal amt) {
		this.amt = amt;
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

	public List<PurchaseInvoiveDet> getPurchaseInvoiveDetList() {
		return PurchaseInvoiveDetList;
	}

	public void setPurchaseInvoiveDetList(List<PurchaseInvoiveDet> purchaseInvoiveDetList) {
		PurchaseInvoiveDetList = purchaseInvoiveDetList;
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
		if (!(object instanceof PurchaseInvoive)) {
			return false;
		}
		PurchaseInvoive other = (PurchaseInvoive) object;
		if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "com.mycompany.javaapplication1.PurchaseInvoive[ id=" + id + " ]";
	}

	
}
