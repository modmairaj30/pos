package com.webapp.apis.masters.controller;

import java.io.IOException;
import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.webapp.apis.masters.model.UserMasterFormBean;
import com.webapp.apis.masters.service.UserMasterService;
import com.webapp.apis.utility.ResponseWrapper;

@RestController
@RequestMapping(value = "/user")
public class UserCreationController {

	@Inject
	private UserMasterService userMasterService;

	// get all party's
	@RequestMapping(value = "/getUsers", method = RequestMethod.GET)
	public ResponseWrapper<List<UserMasterFormBean>> getUsers() {
		List<UserMasterFormBean> forms = userMasterService.getAllUser();
		return new ResponseWrapper<List<UserMasterFormBean>>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/getUser", method = RequestMethod.GET)
	public ResponseWrapper<UserMasterFormBean> getUser(@RequestParam("userId") Integer userId) {
		UserMasterFormBean forms = userMasterService.getUser(userId);
		return new ResponseWrapper<UserMasterFormBean>(null, HttpStatus.OK, "", forms);

	}

	@RequestMapping(value = "/saveUser", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> saveUserMaster(@RequestParam(name = "file", required = false) MultipartFile file,
			UserMasterFormBean userMasterFormBean) throws IOException {
		/*
		 * file.getOriginalFilename(); file.getContentType(); file.getBytes();
		 */
		if (userMasterFormBean.getId().equals("null")) {
			userMasterFormBean.setId(null);
		}
		if (file != null) {

			return ResponseEntity.ok(userMasterService.saveUserMasterWithFile(file, userMasterFormBean));
		} else {
			return ResponseEntity.ok(userMasterService.saveUserMaster(userMasterFormBean));
		}
		// return ResponseEntity.ok(null);
	}

	@RequestMapping(value = "/updateUser", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> updateUserMaster(@RequestParam(name = "file", required = false) MultipartFile file,
			UserMasterFormBean userMasterFormBean) throws IOException {
		/*
		 * file.getOriginalFilename(); file.getContentType(); file.getBytes();
		 */
		if (file != null) {

			return ResponseEntity.ok(userMasterService.updateUserMasterWithFile(file, userMasterFormBean));
		} else {
			return ResponseEntity.ok(userMasterService.updateUserMaster(userMasterFormBean));
		}
		// return ResponseEntity.ok(null);
	}

}
