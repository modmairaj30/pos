package com.webapp.apis.masters.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.masters.domain.PartyMaster;
import com.webapp.apis.masters.model.PartyMasterFormBean;



public class PartyMasterMapper {
	
	
private static final Logger LOGGER = LoggerFactory.getLogger(PartyMasterMapper.class);
	
	public static PartyMaster mapFormToDomain(PartyMasterFormBean partyMasterFormBean) {
		PartyMaster  partymaster = new PartyMaster();
		
		partymaster.setId(partyMasterFormBean.getId());
		partymaster.setPartyName(partyMasterFormBean.getPartyName());
		partymaster.setPartyType(partyMasterFormBean.getPartyType());
		partymaster.setAddress1(partyMasterFormBean.getAddress1());
		partymaster.setAddress2(partyMasterFormBean.getAddress2());
		partymaster.setAddress3(partyMasterFormBean.getAddress3());
		partymaster.setDocNo(partyMasterFormBean.getDocNo());
		partymaster.setCity(partyMasterFormBean.getCity());
		partymaster.setMobileno(partyMasterFormBean.getMobileno());
		partymaster.setPincode(partyMasterFormBean.getPincode());
		partymaster.setEmail(partyMasterFormBean.getEmail());
		partymaster.setState(partyMasterFormBean.getState());
		partymaster.setUpdatedBy(partyMasterFormBean.getUpdatedBy());
		partymaster.setUpdatedDate(partyMasterFormBean.getUpdatedDate());
		partymaster.setCreatedBy(partyMasterFormBean.getCreatedBy());
		partymaster.setCreatedDate(partyMasterFormBean.getCreatedDate());
		partymaster.setContactperson(partyMasterFormBean.getContactperson());
		//partymaster.setPartyType(partyMasterFormBean.getPartyType());
		//partymaster.setAddress1(partyMasterFormBean.getAddress1());
		//
		//
		/*partymaster.setAddress4(partyMasterFormBean.getAddress4());*/
		/*partymaster.setCreditAcc(partyMasterFormBean.getCreditAcc());
		partymaster.setDebitAcc(partyMasterFormBean.getDebitAcc());
		partymaster.setGroupAccount(partyMasterFormBean.getGroupAccount());
		partymaster.setTin(partyMasterFormBean.getTin());
		partymaster.setPhno(partyMasterFormBean.getPhno());
		partymaster.setContactperson(partyMasterFormBean.getContactperson());
		partymaster.setDecPers(partyMasterFormBean.getDecPers());
		partymaster.setLocationId(partyMasterFormBean.getLocationId());
		partymaster.setDisc(partyMasterFormBean.getDisc());
		partymaster.setCategory(partyMasterFormBean.getCategory());
		partymaster.setDiscp(partyMasterFormBean.getDiscp());
		partymaster.setDiscm(partyMasterFormBean.getDiscm());*/
		/*partymaster.setReffBy(partyMasterFormBean.getReffBy());
		partymaster.setAgreementNo(partyMasterFormBean.getAgreementNo());
		partymaster.setCntrctExp(partyMasterFormBean.getCntrctExp());
		partymaster.setPartyCode(partyMasterFormBean.getPartyCode());
		partymaster.setPartylabel(partyMasterFormBean.getPartylabel());
		partymaster.setBranch(partyMasterFormBean.getBranch());*/
		//partymaster.setCustid(partyMasterFormBean.getCustid());
		//partymaster.setDocNo(partyMasterFormBean.getDocNo());
		/*partymaster.setFuelSurchargePc(partyMasterFormBean.getFuelSurchargePc());
		partymaster.setServiceTaxPc(partyMasterFormBean.getServiceTaxPc());
		partymaster.setEduCess(partyMasterFormBean.getEduCess());
		partymaster.setSHEcess(partyMasterFormBean.getSHEcess());
		*/
		/*partymaster.setCity(partyMasterFormBean.getCity());
		partymaster.setDlno(partyMasterFormBean.getDlno());
		partymaster.setDlno21(partyMasterFormBean.getDlno21());
		partymaster.setDelterms(partyMasterFormBean.getDelterms());
		partymaster.setPayterms(partyMasterFormBean.getPayterms());
		partymaster.setState(partyMasterFormBean.getState());
		partymaster.setCreditlimit(partyMasterFormBean.getCreditlimit());
		partymaster.setTelno(partyMasterFormBean.getTelno());
		partymaster.setTelno1(partyMasterFormBean.getTelno1());
		partymaster.setContactperson(partyMasterFormBean.getContactperson());
		partymaster.setCreditdays(partyMasterFormBean.getCreditdays());
		partymaster.setMobileno(partyMasterFormBean.getMobileno());
		partymaster.setPincode(partyMasterFormBean.getPincode());
		partymaster.setEmail(partyMasterFormBean.getEmail());
		partymaster.setMobile2(partyMasterFormBean.getMobile2());
		partymaster.setFaxno(partyMasterFormBean.getFaxno());
		partymaster.setTrasporter(partyMasterFormBean.getTrasporter());
		partymaster.setAnniversary(partyMasterFormBean.getAnniversary());
		partymaster.setTds(partyMasterFormBean.getTds());
		partymaster.setCode(partyMasterFormBean.getCode());
		partymaster.setCode2(partyMasterFormBean.getCode2());
		partymaster.setCode3(partyMasterFormBean.getCode3());
		partymaster.setDoB(partyMasterFormBean.getDoB());
		partymaster.setCurrDeriSeg(partyMasterFormBean.getCurrDeriSeg());
		partymaster.setPrefix(partyMasterFormBean.getPrefix());
		partymaster.setClientName(partyMasterFormBean.getClientName());
		partymaster.setClientSuenam(partyMasterFormBean.getClientSuenam());
		partymaster.setMiddleName(partyMasterFormBean.getMiddleName());
		partymaster.setDateBirth(partyMasterFormBean.getDateBirth());
		partymaster.setGender(partyMasterFormBean.getGender());
		partymaster.setMaritalStatus(partyMasterFormBean.getMaritalStatus());
		partymaster.setResedstatus(partyMasterFormBean.getResedstatus());
		partymaster.setUpPancard(partyMasterFormBean.getUpPancard());
		partymaster.setPanCardno(partyMasterFormBean.getPanCardno());
		partymaster.setUpScanDoc(partyMasterFormBean.getUpScanDoc());
		partymaster.setValidbankProof(partyMasterFormBean.getValidbankProof());
		partymaster.setAddrProof(partyMasterFormBean.getAddrProof());
		partymaster.setDematAcc(partyMasterFormBean.getDematAcc());*/
		/*partymaster.setPanNo(partyMasterFormBean.getPanNo());*/
		/*partymaster.setMCommn(partyMasterFormBean.getMCommn());*/
		/*partymaster.setCountry(partyMasterFormBean.getCountry());
		partymaster.setClientBankDetail(partyMasterFormBean.getClientBankDetail());
		partymaster.setVehicleno(partyMasterFormBean.getVehicleno());
		partymaster.setVehicleType(partyMasterFormBean.getVehicleType());
		partymaster.setVechileName(partyMasterFormBean.getVechileName());
		partymaster.setVendorReg(partyMasterFormBean.getVendorReg());
		partymaster.setVendorcode(partyMasterFormBean.getVendorcode());
		partymaster.setVatTot(partyMasterFormBean.getVatTot());
		partymaster.setMinRs(partyMasterFormBean.getMinRs());
		partymaster.setMinRs2(partyMasterFormBean.getMinRs2());
		partymaster.setEmpClient(partyMasterFormBean.getEmpClient());
		partymaster.setEmpDesignation(partyMasterFormBean.getEmpDesignation());
		partymaster.setPfAccNum(partyMasterFormBean.getPfAccNum());
		partymaster.setBankNum(partyMasterFormBean.getBankNum());
		partymaster.setBasicSalary(partyMasterFormBean.getBasicSalary());
		partymaster.setHraSalary(partyMasterFormBean.getHraSalary());
		partymaster.setCaSalary(partyMasterFormBean.getCaSalary());
		partymaster.setOtherAllowance(partyMasterFormBean.getOtherAllowance());
		partymaster.setArrears(partyMasterFormBean.getArrears());
		partymaster.setOtherSalary(partyMasterFormBean.getOtherSalary());
		partymaster.setRemarks(partyMasterFormBean.getRemarks());*/
		/*partymaster.setCgst(partyMasterFormBean.getCgst());
		partymaster.setSgst(partyMasterFormBean.getSgst());
		partymaster.setCustomerGstno(partyMasterFormBean.getCustomerGstno());
		partymaster.setCustomerPanno(partyMasterFormBean.getCustomerPanno());
		partymaster.setIgst(partyMasterFormBean.getIgst());*/
		
		
		return partymaster;
	}

	public static PartyMasterFormBean mapDomainToForm(PartyMaster partyMaster) {
		PartyMasterFormBean partymasterFormBean = new PartyMasterFormBean();
				
		partymasterFormBean.setId(partyMaster.getId());
		partymasterFormBean.setPartyName(partyMaster.getPartyName());
		partymasterFormBean.setPartyType(partyMaster.getPartyType());
		partymasterFormBean.setAddress1(partyMaster.getAddress1());
		partymasterFormBean.setAddress2(partyMaster.getAddress2());
		partymasterFormBean.setAddress3(partyMaster.getAddress3());
		partymasterFormBean.setDocNo(partyMaster.getDocNo());
		partymasterFormBean.setCity(partyMaster.getCity());
		partymasterFormBean.setMobileno(partyMaster.getMobileno());
		partymasterFormBean.setPincode(partyMaster.getPincode());
		partymasterFormBean.setEmail(partyMaster.getEmail());
		partymasterFormBean.setState(partyMaster.getState());
		partymasterFormBean.setUpdatedBy(partyMaster.getUpdatedBy());
		partymasterFormBean.setUpdatedDate(partyMaster.getUpdatedDate());
		partymasterFormBean.setCreatedBy(partyMaster.getCreatedBy());
		partymasterFormBean.setCreatedDate(partyMaster.getCreatedDate());
		partymasterFormBean.setContactperson(partyMaster.getContactperson());
		/*partymasterFormBean.setAddress4(partyMaster.getAddress4());*/
		/*partymasterFormBean.setCreditAcc(partyMaster.getCreditAcc());
		partymasterFormBean.setDebitAcc(partyMaster.getDebitAcc());
		partymasterFormBean.setGroupAccount(partyMaster.getGroupAccount());
		partymasterFormBean.setTin(partyMaster.getTin());
		partymasterFormBean.setPhno(partyMaster.getPhno());
		partymasterFormBean.setContactperson(partyMaster.getContactperson());
		partymasterFormBean.setDecPers(partyMaster.getDecPers());
		partymasterFormBean.setLocationId(partyMaster.getLocationId());
		partymasterFormBean.setDisc(partyMaster.getDisc());
		partymasterFormBean.setCategory(partyMaster.getCategory());
		partymasterFormBean.setDiscp(partyMaster.getDiscp());
		partymasterFormBean.setDiscm(partyMaster.getDiscm());
		*//*partymasterFormBean.setReffBy(partyMaster.getReffBy());
		partymasterFormBean.setAgreementNo(partyMaster.getAgreementNo());
		partymasterFormBean.setCntrctExp(partyMaster.getCntrctExp());
		partymasterFormBean.setPartyCode(partyMaster.getPartyCode());
		partymasterFormBean.setPartylabel(partyMaster.getPartylabel());
		partymasterFormBean.setBranch(partyMaster.getBranch());*/
		//partymasterFormBean.setCustid(partyMaster.getCustid());
		
		/*partymasterFormBean.setFuelSurchargePc(partyMaster.getFuelSurchargePc());
		partymasterFormBean.setServiceTaxPc(partyMaster.getServiceTaxPc());
		partymasterFormBean.setEduCess(partyMaster.getEduCess());
		partymasterFormBean.setSHEcess(partyMaster.getSHEcess());
		partymasterFormBean.setEmailId(partyMaster.getEmailId());*/
		
		/*partymasterFormBean.setDlno(partyMaster.getDlno());
		partymasterFormBean.setDlno21(partyMaster.getDlno21());
		partymasterFormBean.setDelterms(partyMaster.getDelterms());
		partymasterFormBean.setPayterms(partyMaster.getPayterms());
		*/
		/*
		partymasterFormBean.setCreditlimit(partyMaster.getCreditlimit());
		partymasterFormBean.setTelno(partyMaster.getTelno());
		partymasterFormBean.setTelno1(partyMaster.getTelno1());
		partymasterFormBean.setContactperson(partyMaster.getContactperson());
		partymasterFormBean.setCreditdays(partyMaster.getCreditdays());
		*/
		
		/*partymasterFormBean.setMobile2(partyMaster.getMobile2());
		partymasterFormBean.setFaxno(partyMaster.getFaxno());
		partymasterFormBean.setTrasporter(partyMaster.getTrasporter());
		partymasterFormBean.setAnniversary(partyMaster.getAnniversary());
		partymasterFormBean.setTds(partyMaster.getTds());
		partymasterFormBean.setCode(partyMaster.getCode());
		partymasterFormBean.setCode2(partyMaster.getCode2());
		partymasterFormBean.setCode3(partyMaster.getCode3());
		partymasterFormBean.setDoB(partyMaster.getDoB());
		partymasterFormBean.setCurrDeriSeg(partyMaster.getCurrDeriSeg());
		partymasterFormBean.setPrefix(partyMaster.getPrefix());
		partymasterFormBean.setClientName(partyMaster.getClientName());
		partymasterFormBean.setClientSuenam(partyMaster.getClientSuenam());
		partymasterFormBean.setMiddleName(partyMaster.getMiddleName());
		partymasterFormBean.setDateBirth(partyMaster.getDateBirth());
		partymasterFormBean.setGender(partyMaster.getGender());
		partymasterFormBean.setMaritalStatus(partyMaster.getMaritalStatus());
		partymasterFormBean.setResedstatus(partyMaster.getResedstatus());
		partymasterFormBean.setUpPancard(partyMaster.getUpPancard());
		partymasterFormBean.setPanCardno(partyMaster.getPanCardno());
		partymasterFormBean.setUpScanDoc(partyMaster.getUpScanDoc());
		partymasterFormBean.setValidbankProof(partyMaster.getValidbankProof());
		partymasterFormBean.setAddrProof(partyMaster.getAddrProof());
		partymasterFormBean.setDematAcc(partyMaster.getDematAcc());*/
		/*partymasterFormBean.setPanNo(partyMaster.getPanNo());*/
		/*partymasterFormBean.setMCommn(partyMaster.getMCommn());*/
		/*partymasterFormBean.setCountry(partyMaster.getCountry());
		partymasterFormBean.setClientBankDetail(partyMaster.getClientBankDetail());
		partymasterFormBean.setVehicleno(partyMaster.getVehicleno());
		partymasterFormBean.setVehicleType(partyMaster.getVehicleType());
		partymasterFormBean.setVechileName(partyMaster.getVechileName());
		partymasterFormBean.setVendorReg(partyMaster.getVendorReg());
		partymasterFormBean.setVendorcode(partyMaster.getVendorcode());
		partymasterFormBean.setVatTot(partyMaster.getVatTot());
		partymasterFormBean.setMinRs(partyMaster.getMinRs());
		partymasterFormBean.setMinRs2(partyMaster.getMinRs2());
		partymasterFormBean.setEmpClient(partyMaster.getEmpClient());
		partymasterFormBean.setEmpDesignation(partyMaster.getEmpDesignation());
		partymasterFormBean.setPfAccNum(partyMaster.getPfAccNum());
		partymasterFormBean.setBankNum(partyMaster.getBankNum());
		partymasterFormBean.setBasicSalary(partyMaster.getBasicSalary());
		partymasterFormBean.setHraSalary(partyMaster.getHraSalary());
		partymasterFormBean.setCaSalary(partyMaster.getCaSalary());
		partymasterFormBean.setOtherAllowance(partyMaster.getOtherAllowance());
		partymasterFormBean.setArrears(partyMaster.getArrears());
		partymasterFormBean.setOtherSalary(partyMaster.getOtherSalary());
		partymasterFormBean.setRemarks(partyMaster.getRemarks());*/
		/*partymasterFormBean.setCgst(partyMaster.getCgst());
		partymasterFormBean.setSgst(partyMaster.getSgst());
		partymasterFormBean.setCustomerGstno(partyMaster.getCustomerGstno());
		partymasterFormBean.setCustomerPanno(partyMaster.getCustomerPanno());
		partymasterFormBean.setIgst(partyMaster.getIgst());*/
		
		
	
		return partymasterFormBean;
		
	}

	public static List<PartyMasterFormBean> mapDomainListToFormList(List<PartyMaster> partyMasterList) {
		List<PartyMasterFormBean> PartyMasterFormBeanList = new ArrayList<>();
		for (PartyMaster partymaster : partyMasterList) {
			PartyMasterFormBeanList.add(mapDomainToForm(partymaster));
		}
		return PartyMasterFormBeanList;

	}
	
	public static List<PartyMaster> mapFormListToDomainList(List<PartyMasterFormBean> partyMasterFormBeanList) {
		List<PartyMaster> partymasterList = new ArrayList<>();
		for (PartyMasterFormBean partymasterFormBean : partyMasterFormBeanList) {
			partymasterList.add(mapFormToDomain(partymasterFormBean));
		}
		return partymasterList;
	}


}
