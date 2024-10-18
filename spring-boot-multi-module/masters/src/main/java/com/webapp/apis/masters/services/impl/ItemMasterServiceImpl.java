package com.webapp.apis.masters.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.ItemMaster;
import com.webapp.apis.masters.model.ItemMasterFormBean;
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;
import com.webapp.apis.masters.repository.ItemMasterRepository;
import com.webapp.apis.masters.repository.specs.ItemMasterSpecification;
import com.webapp.apis.masters.repository.specs.SearchCriteria;
import com.webapp.apis.masters.repository.specs.SearchOperation;
import com.webapp.apis.masters.service.ItemMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class ItemMasterServiceImpl implements ItemMasterService {
	@Inject
	ItemMasterRepository ItemMasterRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Transactional
	@Override
	public String saveItemMaster(ItemMasterFormBean ItemMasterFormBean) {
		ItemMaster branchMaster = new ItemMaster();

		BeanUtils.copyProperties(ItemMasterFormBean, branchMaster);
		//branchMaster.setName(ItemMasterFormBean.getName().toUpperCase());
		
		if (ItemMasterFormBean.getId() == null) {
			branchMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setCreatedDate(new Date());
		} else {
			branchMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setUpdatedDate(new Date());
		}
		branchMaster = ItemMasterRepository.save(branchMaster);
		if (branchMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

	@Override
	public List<ItemMasterFormBean> getAllItem() {
		List<ItemMaster> listItemMasters = ItemMasterRepository.findAllByOrderByIdDesc();
		List<ItemMasterFormBean> listItemMaster = new ArrayList<ItemMasterFormBean>();
		for (ItemMaster ItemMaster : listItemMasters) {
			ItemMasterFormBean ItemMasterFormBean = new ItemMasterFormBean();
			BeanUtils.copyProperties(ItemMaster, ItemMasterFormBean);
			listItemMaster.add(ItemMasterFormBean);
		}

		return listItemMaster;

	}

	@Override
	public List<ItemMasterFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		
		ItemMasterSpecification msTitleRating = new ItemMasterSpecification();
        msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
       // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
        List<ItemMaster> listItemMasters = ItemMasterRepository.findAll(msTitleRating);
    	List<ItemMasterFormBean> listItemMaster = new ArrayList<ItemMasterFormBean>();
        for (ItemMaster ItemMaster : listItemMasters) {
			ItemMasterFormBean ItemMasterFormBean = new ItemMasterFormBean();
			BeanUtils.copyProperties(ItemMaster, ItemMasterFormBean);
			listItemMaster.add(ItemMasterFormBean);
		}
	
	

        return listItemMaster;

	}

	@Override
	public List<ItemMasterFormBean> getAllItemMasters(ServerSidePagination serverSidePagination) {
		// TODO Auto-generated method stub
		return null;
	}

}
