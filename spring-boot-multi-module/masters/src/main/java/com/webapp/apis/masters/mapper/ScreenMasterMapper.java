package com.webapp.apis.masters.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.masters.domain.ScreenMaster;
import com.webapp.apis.masters.domain.ScreenOperationMaster;
import com.webapp.apis.masters.model.ScreenMasterFormBean;
import com.webapp.apis.masters.model.ScreenOperationMasterFormBean;

public class ScreenMasterMapper {
private static final Logger LOGGER = LoggerFactory.getLogger(ScreenMasterMapper.class);
private static final String MasterList = null;
	
	public static ScreenMaster mapFormToDomain(ScreenMasterFormBean screenMasterFormBean) {
		ScreenMaster  screenMaster = new ScreenMaster();
		List<ScreenOperationMaster> screenOperationMasterobList = new ArrayList<>();
		
		screenMaster.setId(screenMasterFormBean.getId());
		screenMaster.setScreenname(screenMasterFormBean.getScreenname());
		screenMaster.setEnabled(screenMasterFormBean.getEnabled());
		
		List<ScreenOperationMasterFormBean> formdetailList = screenMasterFormBean.getScreenOperationList();
		for (ScreenOperationMasterFormBean detailFormbeam : formdetailList) {
			ScreenOperationMaster screenOperationMaster = new ScreenOperationMaster();
			screenOperationMasterobList.add(screenOperationMaster);
	}
		screenMaster.setScreenOperationList(screenOperationMasterobList);
		
		return screenMaster ;
	}

	public static ScreenMasterFormBean mapDomainToForm(ScreenMaster screenMaster) {
		ScreenMasterFormBean screenMasterFormBean = new ScreenMasterFormBean();
		List<ScreenOperationMasterFormBean> screenOperationMasterFormBeanList = new ArrayList<>();
				
		screenMasterFormBean.setId(screenMaster.getId());
		screenMasterFormBean.setScreenname(screenMaster.getScreenname());
		screenMasterFormBean.setEnabled(screenMaster.getEnabled());
		for (ScreenOperationMaster detail : screenMaster.getScreenOperationList()) {
			ScreenOperationMasterFormBean screenOperationMasterForm = new ScreenOperationMasterFormBean();
			screenOperationMasterForm.setId(detail.getId());
			screenOperationMasterForm.setOperationId(detail.getOperationId());
			screenOperationMasterForm.setRoleId(detail.getRoleId());
			screenOperationMasterForm.setScreenId(detail.getScreenId());
			screenOperationMasterForm.setEnabled(detail.getEnabled());
			
			screenOperationMasterFormBeanList.add(screenOperationMasterForm);
	}
		screenMasterFormBean.setScreenOperationList(screenOperationMasterFormBeanList);
		return screenMasterFormBean ;
	
	}
	public static List<ScreenMasterFormBean> mapDomainListToFormList(
			List<ScreenMaster> stockVerificationList) {
		List<ScreenMasterFormBean> stockVerificationFormBeanList = new ArrayList<>();
		for (ScreenMaster stockVerification : stockVerificationList) {
			stockVerificationFormBeanList.add(mapDomainToForm(stockVerification));
		}
		return stockVerificationFormBeanList;

	}


	}

