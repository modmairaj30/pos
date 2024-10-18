package com.webapp.apis.masters.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.LookUpFormBean;

@Service
public interface LookUpMasterService {
	public List<Map<String, String>> getLookUpValues(LookUpFormBean lookUpFormBean);

	public Map<String, List<Map<String, String>>> getMultipleDropdwonValues(List<LookUpFormBean> listLookUpFormBean);

}
