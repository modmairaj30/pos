package com.webapp.apis.masters.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.domian.User;
import com.webapp.apis.masters.model.UserMasterFormBean;

/**
 * @author Mairaj
 */

public class UserMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserMapper.class);

	public static User mapFormToDomain(UserMasterFormBean userFormBean) {
		User user = new User();
		user.setId(userFormBean.getId() != null ? Integer.valueOf(userFormBean.getId()) : null);
		// user.setId(Integer.valueOf(userFormBean.getId()));
		user.setUsername(userFormBean.getUsername());
		user.setMobile_no(userFormBean.getMobile_no());
		user.setAddress(userFormBean.getAddress());
		user.setPassword(userFormBean.getPassword());
		user.setEmail(!userFormBean.getEmail().equals("undefined")
				? !userFormBean.getEmail().equals("") ? userFormBean.getEmail() : null
				: null);
		user.setFirstname(userFormBean.getFirstname());
		user.setLastname(userFormBean.getLastname());
		user.setLocation(userFormBean.getLocation());
		user.setPicByte(userFormBean.getPicByte());
		user.setRole(userFormBean.getRole());
		// user.setRole_id(Integer.valueOf(userFormBean.getRole_id()));

		return user;
	}

	public static UserMasterFormBean mapDomainToForm(User user) {
		UserMasterFormBean userFormBean = new UserMasterFormBean();
		userFormBean.setUsername(user.getUsername());
		userFormBean.setId(user.getId().toString());
		userFormBean.setMobile_no(user.getMobile_no());
		userFormBean.setAddress(user.getAddress());
		userFormBean.setPassword(user.getPassword());
		userFormBean.setEmail(user.getEmail());
		userFormBean.setFirstname(user.getFirstname());
		userFormBean.setLastname(user.getLastname());
		userFormBean.setLocation(user.getLocation());
		userFormBean.setPicByte(user.getPicByte());
		userFormBean.setRole(user.getRole());
		// userFormBean.setRole_id(user.getRole_id().toString());

		return userFormBean;

	}

	public static List<UserMasterFormBean> mapDomainListToFormList(List<User> userList) {
		List<UserMasterFormBean> userFormBeanList = new ArrayList<>();
		for (User user : userList) {
			userFormBeanList.add(mapDomainToForm(user));
		}
		return userFormBeanList;

	}

	public static List<User> mapFormListToDomainList(List<UserMasterFormBean> userFormBeanList) {
		List<User> userList = new ArrayList<>();
		for (UserMasterFormBean userFormBean : userFormBeanList) {
			userList.add(mapFormToDomain(userFormBean));
		}
		return userList;
	}

	public static User mapFormToDomainWithOutPic(UserMasterFormBean userFormBean) {
		User user = new User();

		user.setId(userFormBean.getId() != null ? Integer.valueOf(userFormBean.getId()) : null);
		user.setUsername(userFormBean.getUsername());
		user.setMobile_no(userFormBean.getMobile_no());
		user.setAddress(userFormBean.getAddress());
		user.setPassword(userFormBean.getPassword());
		user.setEmail(!userFormBean.getEmail().equals("undefined")
				? !userFormBean.getEmail().equals("") ? userFormBean.getEmail() : null
				: null);
		// user.setEmail(userFormBean.getEmail());
		user.setFirstname(userFormBean.getFirstname());
		user.setLastname(userFormBean.getLastname());
		user.setLocation(userFormBean.getLocation());
		user.setPicByte(userFormBean.getPicByte());
		user.setRole(userFormBean.getRole());
		// user.setRole_id(Integer.valueOf(userFormBean.getRole_id()));

		return user;
	}

}
