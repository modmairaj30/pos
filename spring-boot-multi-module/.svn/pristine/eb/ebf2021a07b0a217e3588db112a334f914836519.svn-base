package com.webapp.apis.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.domian.UserDetailsImpl;
import com.webapp.apis.services.UserManagementService;
import com.webapp.apis.utility.ResponseWrapper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
@Controller
public class SessionController {
	private static final Logger LOGGER = LoggerFactory.getLogger(SessionController.class);

	@Autowired
	private HttpServletRequest request;
	
	@Inject
	private UserManagementService userManagementService;

	@RequestMapping(value = "/addSession", method = RequestMethod.GET)
	public ResponseWrapper<UserDetailsImpl> getAccessRoleForUser(HttpServletRequest request) {
		// get the notes from request session
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
		user.setUserRoles(userManagementService.getAllScreensAndOperationOfUser(user.getRole_id()));
		request.getSession().setAttribute("UserDetail", user);
		user = (UserDetailsImpl) request.getSession().getAttribute("UserDetail");
		return new ResponseWrapper<UserDetailsImpl>(null, HttpStatus.OK, "", user);
	}

	@GetMapping("/home")
	public String home(Model model, HttpSession session) {
		List<String> notes = (List<String>) session.getAttribute("NOTES_SESSION");
		model.addAttribute("notesSession", notes != null ? notes : new ArrayList<>());
		return "home";
	}

	@PostMapping("/invalidate/session")
	public String destroySession(HttpServletRequest request) {
		// invalidate the session , this will clear the data from configured database
		// (Mysql/redis/hazelcast) addSession
		request.getSession().invalidate();
		return "redirect:/home";
	}
}
