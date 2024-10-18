package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.webapp.apis.masters.model.UserMasterFormBean;

@Service
public interface UserMasterService {

	public List<UserMasterFormBean> getAllUser();
	
	public UserMasterFormBean getUser(Integer userId);

	public ResponseEntity<?> saveUserMaster(UserMasterFormBean userMasterFormBean);
	public ResponseEntity<?> updateUserMaster(UserMasterFormBean userMasterFormBean);
	public ResponseEntity<?> saveUserMasterWithFile(MultipartFile file,UserMasterFormBean userMasterFormBean);
	public ResponseEntity<?> updateUserMasterWithFile(MultipartFile file,UserMasterFormBean userMasterFormBean);
	
}
