package com.webapp.apis.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.domian.UserDetailsImpl;
import com.webapp.apis.utility.ResponseWrapper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
@Controller
public class SpringBootSessionController {
	@GetMapping("/addSession1")
	public ResponseWrapper<UserDetailsImpl> addNote(HttpServletRequest request) {
		// get the notes from request session
		List<String> notes = (List<String>) request.getSession().getAttribute("NOTES_SESSION");
		// check if notes is present in session or not
		if (notes == null) {
			notes = new ArrayList<>();
			// if notes object is not present in session, set notes in the request session
			request.getSession().setAttribute("NOTES_SESSION", notes);
		}
		notes.add("kk");
		request.getSession().setAttribute("NOTES_SESSION", notes);
		return new ResponseWrapper<UserDetailsImpl>(null, HttpStatus.OK, "", null);
	}

	@GetMapping("/home1")
	public String home(Model model, HttpSession session) {
		List<String> notes = (List<String>) session.getAttribute("NOTES_SESSION");
		model.addAttribute("notesSession", notes != null ? notes : new ArrayList<>());
		return "home";
	}

	@PostMapping("/invalidate/session1")
	public String destroySession(HttpServletRequest request) {
		// invalidate the session , this will clear the data from configured database
		// (Mysql/redis/hazelcast)
		request.getSession().invalidate();
		return "redirect:/home1";
	}
}