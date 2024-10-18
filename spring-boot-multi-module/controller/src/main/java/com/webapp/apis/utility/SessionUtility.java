package com.webapp.apis.utility;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.webapp.apis.domian.UserDetailsImpl;

/**
 * @author Mairaj
 * @purpose This is session Utility class
 */
@Component
public class SessionUtility {

	@Autowired
	private HttpServletRequest request;

	public UserDetailsImpl getUserSession() {
		UserDetailsImpl u=(UserDetailsImpl) request.getSession().getAttribute("UserDetail");
		return u;
	}
}
