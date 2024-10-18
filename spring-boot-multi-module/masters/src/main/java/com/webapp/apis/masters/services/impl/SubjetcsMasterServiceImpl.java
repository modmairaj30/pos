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
import com.webapp.apis.masters.domain.SubjectsMaster;
import com.webapp.apis.masters.model.SubjectsMasterFormBean;
import com.webapp.apis.masters.repository.SubjectsMasterRepository;
import com.webapp.apis.masters.service.SubjetcsMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class SubjetcsMasterServiceImpl implements SubjetcsMasterService {
	private static final Logger LOGGER = LoggerFactory.getLogger(LocationMasterServiceImpl.class);

	@Inject
	private SubjectsMasterRepository subjectsMasterRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Transactional
	@Override
	public String saveSubjectMaster(SubjectsMasterFormBean subjectsMasterFormBean) {
		SubjectsMaster branchMaster = new SubjectsMaster();
		BeanUtils.copyProperties(subjectsMasterFormBean, branchMaster);
		if (subjectsMasterFormBean.getId() == null) {
			branchMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setCreatedDate(new Date());
		} else {
			branchMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setUpdatedDate(new Date());
		}

		branchMaster = subjectsMasterRepository.save(branchMaster);

		if (branchMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

	@Override
	public List<SubjectsMasterFormBean> getAllSubject() {
		List<SubjectsMaster> listsubMasters = subjectsMasterRepository.findAllByOrderByIdDesc();
		List<SubjectsMasterFormBean> listsubMaster = new ArrayList<SubjectsMasterFormBean>();
		for (SubjectsMaster subMaster : listsubMasters) {
			SubjectsMasterFormBean departmentMasterFormBean = new SubjectsMasterFormBean();
			BeanUtils.copyProperties(subMaster, departmentMasterFormBean);
			listsubMaster.add(departmentMasterFormBean);
		}

		return listsubMaster;
	}

}
