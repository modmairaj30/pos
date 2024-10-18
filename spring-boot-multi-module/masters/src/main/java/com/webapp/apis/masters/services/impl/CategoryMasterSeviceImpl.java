package com.webapp.apis.masters.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.CategoryMaster;
import com.webapp.apis.masters.model.CategoryMasterFormBean;
import com.webapp.apis.masters.repository.CategoryMasterRepository;
import com.webapp.apis.masters.service.CategoryMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class CategoryMasterSeviceImpl implements CategoryMasterService {

	@Inject
	CategoryMasterRepository categoryMasterRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Transactional
	@Override
	public String saveCategoryMaster(CategoryMasterFormBean categoryMasterFormBean) {
		CategoryMaster branchMaster = new CategoryMaster();
		BeanUtils.copyProperties(categoryMasterFormBean, branchMaster);
		
		if (categoryMasterFormBean.getId() == null) {
			branchMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setCreatedDate(new Date());
		} else {
			branchMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setUpdatedDate(new Date());
		}
		branchMaster = categoryMasterRepository.save(branchMaster);
		if (branchMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

	@Override
	public List<CategoryMasterFormBean> getAllCategory() {
		// TODO Auto-generated method stub
		List<CategoryMaster> listCatMasters = categoryMasterRepository.findAllByOrderByIdDesc();
		List<CategoryMasterFormBean> listcatMaster = new ArrayList<CategoryMasterFormBean>();
		for (CategoryMaster catMaster : listCatMasters) {
			CategoryMasterFormBean departmentMasterFormBean = new CategoryMasterFormBean();
			BeanUtils.copyProperties(catMaster, departmentMasterFormBean);
			listcatMaster.add(departmentMasterFormBean);
		}

		return listcatMaster;
	}

}
