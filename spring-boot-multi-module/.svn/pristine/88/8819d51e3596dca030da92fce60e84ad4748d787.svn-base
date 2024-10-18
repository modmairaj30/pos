package com.webapp.apis.masters.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.ProductGroupsMaster;
import com.webapp.apis.masters.model.ProductGroupMasterBeanForm;
import com.webapp.apis.masters.repository.ProductGroupMasterRepository;
import com.webapp.apis.masters.service.ProductGroupMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class ProductGroupMasterServiceImpl implements ProductGroupMasterService {
	private static final Logger LOGGER = LoggerFactory.getLogger(LocationMasterServiceImpl.class);

	@Inject
	private ProductGroupMasterRepository productGroupMasterRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Transactional
	@Override
	public String saveProductGroupMaster(ProductGroupMasterBeanForm productGroupMasterBeanForm) {
		// TODO Auto-generated method stub
		ProductGroupsMaster branchMaster = new ProductGroupsMaster();
		BeanUtils.copyProperties(productGroupMasterBeanForm, branchMaster);
		if (productGroupMasterBeanForm.getId() == null) {
			branchMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setCreatedDate(new Date());
		} else {
			branchMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setUpdatedDate(new Date());
		}
		branchMaster = productGroupMasterRepository.save(branchMaster);
		if (branchMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

	@Override
	public List<ProductGroupMasterBeanForm> getAllProductGroup() {
		// TODO Auto-generated method stub
		List<ProductGroupsMaster> listProdgrpMasters = productGroupMasterRepository.findAllByOrderByIdDesc();
		List<ProductGroupMasterBeanForm> listProdgrpMaster = new ArrayList<ProductGroupMasterBeanForm>();
		for (ProductGroupsMaster ProdGrpMaster : listProdgrpMasters) {
			ProductGroupMasterBeanForm departmentMasterFormBean = new ProductGroupMasterBeanForm();
			BeanUtils.copyProperties(ProdGrpMaster, departmentMasterFormBean);
			listProdgrpMaster.add(departmentMasterFormBean);
		}

		return listProdgrpMaster;
	}

}
