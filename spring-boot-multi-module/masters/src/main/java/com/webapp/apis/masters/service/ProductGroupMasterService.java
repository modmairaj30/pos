package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.ProductGroupMasterBeanForm;

@Service
public interface ProductGroupMasterService {

	String saveProductGroupMaster(ProductGroupMasterBeanForm productGroupMasterBeanForm);

	List<ProductGroupMasterBeanForm> getAllProductGroup();

}
