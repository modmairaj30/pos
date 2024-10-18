package com.webapp.apis.transactions.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

public class InvoiceFormBean implements Serializable {

	private static final long serialVersionUID = 1L;
	 	private Integer id;	    
	    private Date docDt;	    
	    private String docNo;	    
	    private String lRno;	    
	    private Date lRdate;	    
	    private BigDecimal grossAmt;	    
	    private BigDecimal netAmt;	    
	    private Integer partyId;	    
	    private String address;	    
	    private String address1;	    
	    private String transportref;	   
	    private String ordno;	    
	    private Date orddt;	    
	    private BigDecimal vat;	    
	    private BigDecimal vatamt;	    
	    private BigDecimal cstamt;	    
	    private String tinno;	    
	    private String cstno;	    
	    private String dlno;	    
	    private String dlno21;	    
	    private BigDecimal discamt;	    
	    private Integer locationId;	    
	    private String locationCode;	   
	    private String paymentType;	    
	    private BigDecimal card;	    
	    private Integer cardNo;	    
	    private Date expDate;	    
	    private String branch;	    
	    private String memberNo;	    
	    private Date validDate;	   
	    private Integer years;	    
	    private Date expiryDate;	    
	    private BigDecimal dis;	    
	    private Integer discPay;	    
	    private BigDecimal discamtPay;	    
	    private BigDecimal netamtPay;	    
	    private BigDecimal creditCharges;	    
	    private BigDecimal creditDummy;	   
	    private String dcno;
	    private String chqNo;
	    private Date dcdate;
	    private String createdBy;
		private String updatedBy;
		private Date createdDate;
		private Date updatedDate;
		private Date chqDate;
		private Integer ChqAmt;
		private String chqIssueBank;
	    private List<InvoiceDetFormBean> InvoiceDetList;
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
		public List<InvoiceDetFormBean> getInvoiceDetList() {
			return InvoiceDetList;
		}
		public void setInvoiceDetList(List<InvoiceDetFormBean> invoiceDetList) {
			this.InvoiceDetList = invoiceDetList;
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
			
			
	    
}
