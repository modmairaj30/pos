package com.webapp.apis.masters.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author mohammed.mirajuddin
 */
public class PartyMasterFormBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;

	private String partyName;

	private Integer partyType;

	private String address1;

	private String address2;

	private Integer creditAcc;

	private Integer debitAcc;

	private Integer groupAccount;

	private String tin;

	private String city;

	private String cSTno;

	private String dlno;

	private String dlno21;

	private String delterms;

	private String payterms;

	private String state;

	private BigDecimal creditlimit;

	private String telno;

	private String telno1;

	private String contactperson;

	private Integer creditdays;

	private String mobileno;

	private String pincode;

	private String email;

	private String mobile2;

	private String faxno;

	private String trasporter;

	private String anniversary;

	private String category;

	private BigDecimal disc;

	private BigDecimal discp;

	private BigDecimal discm;

	private String phno;

	private String custid;

	private String contPerson;

	private BigDecimal decPers;

	private Integer tds;

	private String PANNo;

	private String code3;

	private String code2;

	private String locationId;

	@Temporal(TemporalType.DATE)
	private Date doB;

	private String code;

	private String currDeriSeg;

	private String prefix;

	private String clientSuenam;

	private String clientName;

	private String middleName;

	private Date dateBirth;

	private String gender;

	private String maritalStatus;

	private String resedstatus;

	private String upPancard;

	private String panCardno;

	private String validbankProof;

	private String upScanDoc;

	private String addrProof;

	private String dematAcc;

	private String PanNo;

	private BigDecimal mCommn;

	private String country;

	private String clientBankDetail;

	private String vehicleno;

	private String vechileName;

	private String vehicleType;

	private String address3;

	private String docNo;

	private String vendorReg;

	private String vatTot;

	private String exciseReg;

	private String mmse;

	private String centralExciseTariffno;

	private String division;

	private Integer range;

	private String minRs;

	private String minRs2;

	private String empClient;

	private String empDesignation;

	private Integer pfAccNum;

	private Integer bankNum;

	private BigDecimal basicSalary;

	private BigDecimal hraSalary;

	private BigDecimal caSalary;

	private BigDecimal otherAllowance;

	private BigDecimal arrears;

	private BigDecimal otherSalary;

	private String remarks;

	private String vendorcode;

	private String membership;

	private String membershipno;

	private BigDecimal amount;

	private Date validfrom;

	private Integer tenure;

	private Date epiry;

	private Integer yrs;

	private String createdBy;

	private String updatedBy;

	private Date createdDate;

	private Date updatedDate;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPartyName() {
		return partyName;
	}

	public void setPartyName(String partyName) {
		this.partyName = partyName;
	}

	public Integer getPartyType() {
		return partyType;
	}

	public void setPartyType(Integer partyType) {
		this.partyType = partyType;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
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

	public Integer getGroupAccount() {
		return groupAccount;
	}

	public void setGroupAccount(Integer groupAccount) {
		this.groupAccount = groupAccount;
	}

	public String getTin() {
		return tin;
	}

	public void setTin(String tin) {
		this.tin = tin;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getcSTno() {
		return cSTno;
	}

	public void setcSTno(String cSTno) {
		this.cSTno = cSTno;
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

	public String getDelterms() {
		return delterms;
	}

	public void setDelterms(String delterms) {
		this.delterms = delterms;
	}

	public String getPayterms() {
		return payterms;
	}

	public void setPayterms(String payterms) {
		this.payterms = payterms;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public BigDecimal getCreditlimit() {
		return creditlimit;
	}

	public void setCreditlimit(BigDecimal creditlimit) {
		this.creditlimit = creditlimit;
	}

	public String getTelno() {
		return telno;
	}

	public void setTelno(String telno) {
		this.telno = telno;
	}

	public String getTelno1() {
		return telno1;
	}

	public void setTelno1(String telno1) {
		this.telno1 = telno1;
	}

	public String getContactperson() {
		return contactperson;
	}

	public void setContactperson(String contactperson) {
		this.contactperson = contactperson;
	}

	public Integer getCreditdays() {
		return creditdays;
	}

	public void setCreditdays(Integer creditdays) {
		this.creditdays = creditdays;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile2() {
		return mobile2;
	}

	public void setMobile2(String mobile2) {
		this.mobile2 = mobile2;
	}

	public String getFaxno() {
		return faxno;
	}

	public void setFaxno(String faxno) {
		this.faxno = faxno;
	}

	public String getTrasporter() {
		return trasporter;
	}

	public void setTrasporter(String trasporter) {
		this.trasporter = trasporter;
	}

	public String getAnniversary() {
		return anniversary;
	}

	public void setAnniversary(String anniversary) {
		this.anniversary = anniversary;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public BigDecimal getDisc() {
		return disc;
	}

	public void setDisc(BigDecimal disc) {
		this.disc = disc;
	}

	public BigDecimal getDiscp() {
		return discp;
	}

	public void setDiscp(BigDecimal discp) {
		this.discp = discp;
	}

	public BigDecimal getDiscm() {
		return discm;
	}

	public void setDiscm(BigDecimal discm) {
		this.discm = discm;
	}

	public String getPhno() {
		return phno;
	}

	public void setPhno(String phno) {
		this.phno = phno;
	}

	public String getCustid() {
		return custid;
	}

	public void setCustid(String custid) {
		this.custid = custid;
	}

	public String getContPerson() {
		return contPerson;
	}

	public void setContPerson(String contPerson) {
		this.contPerson = contPerson;
	}

	public BigDecimal getDecPers() {
		return decPers;
	}

	public void setDecPers(BigDecimal decPers) {
		this.decPers = decPers;
	}

	public Integer getTds() {
		return tds;
	}

	public void setTds(Integer tds) {
		this.tds = tds;
	}

	public String getPANNo() {
		return PANNo;
	}

	public void setPANNo(String pANNo) {
		PANNo = pANNo;
	}

	public String getCode3() {
		return code3;
	}

	public void setCode3(String code3) {
		this.code3 = code3;
	}

	public String getCode2() {
		return code2;
	}

	public void setCode2(String code2) {
		this.code2 = code2;
	}

	public String getLocationId() {
		return locationId;
	}

	public void setLocationId(String locationId) {
		this.locationId = locationId;
	}

	public Date getDoB() {
		return doB;
	}

	public void setDoB(Date doB) {
		this.doB = doB;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getCurrDeriSeg() {
		return currDeriSeg;
	}

	public void setCurrDeriSeg(String currDeriSeg) {
		this.currDeriSeg = currDeriSeg;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public String getClientSuenam() {
		return clientSuenam;
	}

	public void setClientSuenam(String clientSuenam) {
		this.clientSuenam = clientSuenam;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public Date getDateBirth() {
		return dateBirth;
	}

	public void setDateBirth(Date dateBirth) {
		this.dateBirth = dateBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMaritalStatus() {
		return maritalStatus;
	}

	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

	public String getResedstatus() {
		return resedstatus;
	}

	public void setResedstatus(String resedstatus) {
		this.resedstatus = resedstatus;
	}

	public String getUpPancard() {
		return upPancard;
	}

	public void setUpPancard(String upPancard) {
		this.upPancard = upPancard;
	}

	public String getPanCardno() {
		return panCardno;
	}

	public void setPanCardno(String panCardno) {
		this.panCardno = panCardno;
	}

	public String getValidbankProof() {
		return validbankProof;
	}

	public void setValidbankProof(String validbankProof) {
		this.validbankProof = validbankProof;
	}

	public String getUpScanDoc() {
		return upScanDoc;
	}

	public void setUpScanDoc(String upScanDoc) {
		this.upScanDoc = upScanDoc;
	}

	public String getAddrProof() {
		return addrProof;
	}

	public void setAddrProof(String addrProof) {
		this.addrProof = addrProof;
	}

	public String getDematAcc() {
		return dematAcc;
	}

	public void setDematAcc(String dematAcc) {
		this.dematAcc = dematAcc;
	}

	public String getPanNo() {
		return PanNo;
	}

	public void setPanNo(String panNo) {
		PanNo = panNo;
	}

	public BigDecimal getmCommn() {
		return mCommn;
	}

	public void setmCommn(BigDecimal mCommn) {
		this.mCommn = mCommn;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getClientBankDetail() {
		return clientBankDetail;
	}

	public void setClientBankDetail(String clientBankDetail) {
		this.clientBankDetail = clientBankDetail;
	}

	public String getVehicleno() {
		return vehicleno;
	}

	public void setVehicleno(String vehicleno) {
		this.vehicleno = vehicleno;
	}

	public String getVechileName() {
		return vechileName;
	}

	public void setVechileName(String vechileName) {
		this.vechileName = vechileName;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getAddress3() {
		return address3;
	}

	public void setAddress3(String address3) {
		this.address3 = address3;
	}

	public String getDocNo() {
		return docNo;
	}

	public void setDocNo(String docNo) {
		this.docNo = docNo;
	}

	public String getVendorReg() {
		return vendorReg;
	}

	public void setVendorReg(String vendorReg) {
		this.vendorReg = vendorReg;
	}

	public String getVatTot() {
		return vatTot;
	}

	public void setVatTot(String vatTot) {
		this.vatTot = vatTot;
	}

	public String getExciseReg() {
		return exciseReg;
	}

	public void setExciseReg(String exciseReg) {
		this.exciseReg = exciseReg;
	}

	public String getMmse() {
		return mmse;
	}

	public void setMmse(String mmse) {
		this.mmse = mmse;
	}

	public String getCentralExciseTariffno() {
		return centralExciseTariffno;
	}

	public void setCentralExciseTariffno(String centralExciseTariffno) {
		this.centralExciseTariffno = centralExciseTariffno;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public Integer getRange() {
		return range;
	}

	public void setRange(Integer range) {
		this.range = range;
	}

	public String getMinRs() {
		return minRs;
	}

	public void setMinRs(String minRs) {
		this.minRs = minRs;
	}

	public String getMinRs2() {
		return minRs2;
	}

	public void setMinRs2(String minRs2) {
		this.minRs2 = minRs2;
	}

	public String getEmpClient() {
		return empClient;
	}

	public void setEmpClient(String empClient) {
		this.empClient = empClient;
	}

	public String getEmpDesignation() {
		return empDesignation;
	}

	public void setEmpDesignation(String empDesignation) {
		this.empDesignation = empDesignation;
	}

	public Integer getPfAccNum() {
		return pfAccNum;
	}

	public void setPfAccNum(Integer pfAccNum) {
		this.pfAccNum = pfAccNum;
	}

	public Integer getBankNum() {
		return bankNum;
	}

	public void setBankNum(Integer bankNum) {
		this.bankNum = bankNum;
	}

	public BigDecimal getBasicSalary() {
		return basicSalary;
	}

	public void setBasicSalary(BigDecimal basicSalary) {
		this.basicSalary = basicSalary;
	}

	public BigDecimal getHraSalary() {
		return hraSalary;
	}

	public void setHraSalary(BigDecimal hraSalary) {
		this.hraSalary = hraSalary;
	}

	public BigDecimal getCaSalary() {
		return caSalary;
	}

	public void setCaSalary(BigDecimal caSalary) {
		this.caSalary = caSalary;
	}

	public BigDecimal getOtherAllowance() {
		return otherAllowance;
	}

	public void setOtherAllowance(BigDecimal otherAllowance) {
		this.otherAllowance = otherAllowance;
	}

	public BigDecimal getArrears() {
		return arrears;
	}

	public void setArrears(BigDecimal arrears) {
		this.arrears = arrears;
	}

	public BigDecimal getOtherSalary() {
		return otherSalary;
	}

	public void setOtherSalary(BigDecimal otherSalary) {
		this.otherSalary = otherSalary;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getVendorcode() {
		return vendorcode;
	}

	public void setVendorcode(String vendorcode) {
		this.vendorcode = vendorcode;
	}

	public String getMembership() {
		return membership;
	}

	public void setMembership(String membership) {
		this.membership = membership;
	}

	public String getMembershipno() {
		return membershipno;
	}

	public void setMembershipno(String membershipno) {
		this.membershipno = membershipno;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public Date getValidfrom() {
		return validfrom;
	}

	public void setValidfrom(Date validfrom) {
		this.validfrom = validfrom;
	}

	public Integer getTenure() {
		return tenure;
	}

	public void setTenure(Integer tenure) {
		this.tenure = tenure;
	}

	public Date getEpiry() {
		return epiry;
	}

	public void setEpiry(Date epiry) {
		this.epiry = epiry;
	}

	public Integer getYrs() {
		return yrs;
	}

	public void setYrs(Integer yrs) {
		this.yrs = yrs;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
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

}
