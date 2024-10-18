package com.webapp.apis.transactions.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 *
 * @author mohammed.mirajuddin
 */

public class PurchaseInvoiveFormBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;
	private BigDecimal grossAmt;
	private Date docDt;
	private String docNo;
	private Integer partyId;
	private BigDecimal exciseduty;
	private String address;
	private String city;
	private String pin;
	private String state;
	private String payterms;
	private String transporter;
	private BigDecimal salestax;
	private BigDecimal cst;
	private BigDecimal vatamt;
	private BigDecimal cstamt;
	private BigDecimal exciseamt;
	private Integer potype;
	private BigDecimal discount1;

	private Integer locationId;

	private BigDecimal otherCharges;

	private String locationCode;

	private String statusCode;

	private String approvalComments;

	private String address2;

	private String phoneNo;

	private String faxNo;

	private String refNo;

	private String pOearlierno;

	private Date refdt;

	private Date pOearlierdt;

	private BigDecimal freight;

	private String freightType;

	private String modeDespatch;

	private String destination;

	private String authorisedTransp;

	private BigDecimal pkgFwdAmt;

	private BigDecimal tOTax;

	private String priceBasis;

	private String enqNo;

	private Date enqdate;

	private BigDecimal discountPc;

	private BigDecimal discountAmt;

	private BigDecimal discPcAmt;

	private BigDecimal discountProdWise;

	private String eDTypePO;

	private String taxtypePO;

	private String email;

	private String tINNo;

	private String payterms2;

	private String payterms3;

	private String payterms4;

	private String remarks;

	private BigDecimal tOTpc;

	private String department;

	private String ourRefNo;

	private String code;

	private BigDecimal pkgFwdPc;

	private String pkgFwdType;

	private String address3;

	private String taxTypeNote;

	private String versionNo;

	private String fldDept;

	private String baseDocNo;

	private String baseDocDt;

	private Integer vchId;
	
	private String verifiedBy;
	
	private String userId;

	private BigDecimal amt;
	private String createdBy;
	private String updatedBy;
	private Date createdDate;
	private Date updatedDate;
	

	private List<PurchaseInvoiveDetFormBean> PurchaseInvoiveDetList;

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

	public String getpOearlierno() {
		return pOearlierno;
	}

	public void setpOearlierno(String pOearlierno) {
		this.pOearlierno = pOearlierno;
	}

	public Date getRefdt() {
		return refdt;
	}

	public void setRefdt(Date refdt) {
		this.refdt = refdt;
	}

	public Date getpOearlierdt() {
		return pOearlierdt;
	}

	public void setpOearlierdt(Date pOearlierdt) {
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

	public BigDecimal gettOTax() {
		return tOTax;
	}

	public void settOTax(BigDecimal tOTax) {
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

	public String geteDTypePO() {
		return eDTypePO;
	}

	public void seteDTypePO(String eDTypePO) {
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

	public String gettINNo() {
		return tINNo;
	}

	public void settINNo(String tINNo) {
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

	public BigDecimal gettOTpc() {
		return tOTpc;
	}

	public void settOTpc(BigDecimal tOTpc) {
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

	public List<PurchaseInvoiveDetFormBean> getPurchaseInvoiveDetList() {
		return PurchaseInvoiveDetList;
	}

	public void setPurchaseInvoiveDetList(List<PurchaseInvoiveDetFormBean> purchaseInvoiveDetList) {
		PurchaseInvoiveDetList = purchaseInvoiveDetList;
	}

	public String getVerifiedBy() {
		return verifiedBy;
	}

	public void setVerifiedBy(String verifiedBy) {
		this.verifiedBy = verifiedBy;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	
	
	

}
