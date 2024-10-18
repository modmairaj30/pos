package com.webapp.apis.masters.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.masters.domain.MembershipMaster;
import com.webapp.apis.masters.model.MembershipMasterFormBean;



public class MembershipMasterMapper {
	
	
private static final Logger LOGGER = LoggerFactory.getLogger(MembershipMasterMapper.class);
private static final String MasterList = null;
	
	public static MembershipMaster mapFormToDomain(MembershipMasterFormBean membershipMasterFormBean) {
		MembershipMaster  membershipmaster = new MembershipMaster();
		
		membershipmaster.setCreatedBy(membershipMasterFormBean.getCreatedBy());
		membershipmaster.setUpdatedBy(membershipMasterFormBean.getUpdatedBy());
		membershipmaster.setCreatedDate(membershipMasterFormBean.getCreatedDate());
		membershipmaster.setUpdatedDate(membershipMasterFormBean.getUpdatedDate());
		membershipmaster.setId(membershipMasterFormBean.getId());
		membershipmaster.setCustomerName(membershipMasterFormBean.getCustomerName());
		membershipmaster.setPanNo(membershipMasterFormBean.getPanNo());
		membershipmaster.setMembershipNo(membershipMasterFormBean.getMembershipNo());
		membershipmaster.setAdress(membershipMasterFormBean.getAdress());
		membershipmaster.setAmountPaid(membershipMasterFormBean.getAmountPaid());
		membershipmaster.setPhoneNo(membershipMasterFormBean.getPhoneNo());
		membershipmaster.setValidityDate(membershipMasterFormBean.getValidityDate());
		membershipmaster.setEmailId(membershipMasterFormBean.getEmailId());
		membershipmaster.setYear(membershipMasterFormBean.getYear());
		membershipmaster.setExpiryDate(membershipMasterFormBean.getExpiryDate());
		
		
		
		
		return membershipmaster;
	}

	public static MembershipMasterFormBean mapDomainToForm(MembershipMaster membershipMaster) {
		MembershipMasterFormBean membershipmasterFormBean = new MembershipMasterFormBean();
				
		membershipmasterFormBean.setCreatedBy(membershipMaster.getCreatedBy());
		membershipmasterFormBean.setUpdatedBy(membershipMaster.getUpdatedBy());
		membershipmasterFormBean.setCreatedDate(membershipMaster.getCreatedDate());
		membershipmasterFormBean.setUpdatedDate(membershipMaster.getUpdatedDate());
		membershipmasterFormBean.setId(membershipMaster.getId());
		membershipmasterFormBean.setCustomerName(membershipMaster.getCustomerName());
		membershipmasterFormBean.setPanNo(membershipMaster.getPanNo());
		membershipmasterFormBean.setMembershipNo(membershipMaster.getMembershipNo());
		membershipmasterFormBean.setAdress(membershipMaster.getAdress());
		membershipmasterFormBean.setAmountPaid(membershipMaster.getAmountPaid());
		membershipmasterFormBean.setPhoneNo(membershipMaster.getPhoneNo());
		membershipmasterFormBean.setValidityDate(membershipMaster.getValidityDate());
		membershipmasterFormBean.setEmailId(membershipMaster.getEmailId());
		membershipmasterFormBean.setYear(membershipMaster.getYear());
		membershipmasterFormBean.setExpiryDate(membershipMaster.getExpiryDate());
		
		
	
		return membershipmasterFormBean;
		
	}

	public static List<MembershipMasterFormBean> mapDomainListToFormList(List<MembershipMaster> membershipMasterList) {
		List<MembershipMasterFormBean> MembershipMasterFormBeanList = new ArrayList<>();
		for (MembershipMaster membershipMaster : membershipMasterList ) {
			MembershipMasterFormBeanList.add(mapDomainToForm(membershipMaster));
		}
		return MembershipMasterFormBeanList;

	}
	
	public static List<MembershipMaster> mapFormListToDomainList(List<MembershipMasterFormBean> membershipMasterFormBeanList) {
		List<MembershipMaster> partymasterList = new ArrayList<>();
		for (MembershipMasterFormBean partymasterFormBean : membershipMasterFormBeanList) {
			partymasterList.add(mapFormToDomain(partymasterFormBean));
		}
		return partymasterList;
	}


}
