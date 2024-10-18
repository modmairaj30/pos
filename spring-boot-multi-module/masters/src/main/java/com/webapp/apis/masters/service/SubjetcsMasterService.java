package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.SubjectsMasterFormBean;

@Service
public interface SubjetcsMasterService {

	String saveSubjectMaster(SubjectsMasterFormBean subjectsMasterFormBean);

	List<SubjectsMasterFormBean> getAllSubject();

}
