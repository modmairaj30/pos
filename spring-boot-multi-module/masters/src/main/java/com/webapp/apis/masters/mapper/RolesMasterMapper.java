package com.webapp.apis.masters.mapper;

import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.masters.domain.RolesMaster;
import com.webapp.apis.masters.domain.ScreenMaster;
import com.webapp.apis.masters.model.RolesMasterFormBean;
import com.webapp.apis.masters.model.ScreenMasterFormBean;

public class RolesMasterMapper  {
	
private static final Logger LOGGER = LoggerFactory.getLogger(RolesMasterMapper.class);
	
	public static RolesMaster mapFormToDomain(RolesMasterFormBean rolesMasterFormBean) {
		RolesMaster  rolesMaster  = new RolesMaster();
		
		rolesMaster.setId(rolesMasterFormBean.getId());
		rolesMaster.setName(rolesMasterFormBean.getName());
		rolesMaster.setEnabled(rolesMasterFormBean.getEnabled());
		rolesMaster.setRolescol(rolesMasterFormBean.getRolescol());
		return rolesMaster;
	}
	public static RolesMasterFormBean mapDomainToForm(RolesMaster rolesMaster) {
		RolesMasterFormBean rolesMasterFormBean = new RolesMasterFormBean();
				
		rolesMasterFormBean.setId(rolesMaster.getId());
		rolesMasterFormBean.setName(rolesMaster.getName());
		rolesMasterFormBean.setEnabled(rolesMaster.getEnabled());
		rolesMasterFormBean.setRolescol(rolesMaster.getRolescol());
	
		return rolesMasterFormBean ;
	
	}

	
}
