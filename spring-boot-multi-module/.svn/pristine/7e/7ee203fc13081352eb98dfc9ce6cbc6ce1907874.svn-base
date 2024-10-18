package com.webapp.apis;

import java.io.IOException;

import javax.inject.Inject;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CORSFilter extends OncePerRequestFilter {

	@Value("${app.origin}")
	private String originEnvironment;

	public CORSFilter() {

	}

	public CORSFilter(@Value("${app.origin}") String originEnvironment) {
		this.originEnvironment = originEnvironment;
	}

	@Inject
	private Environment environment;

	/**
	 * This method is used to filter the request based on supplied request, response
	 * and filterChain.
	 * 
	 * @param request
	 * @param response
	 * @param filterChain
	 */
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		response.setHeader("Access-Control-Allow-Origin", getOriginEnvironment());
		response.setHeader("Access-Control-Allow-Credentials", "true");
		if (request.getHeader("Access-Control-Request-Method") != null && "OPTIONS".equals(request.getMethod())) {
			response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
			response.addHeader("Access-Control-Allow-Headers", "X-Requested-With");
			response.setHeader("Access-Control-Allow-Credentials", "true");
			response.setHeader("Access-Control-Allow-Origin", getOriginEnvironment());
			response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
			response.setHeader("Access-Control-Max-Age",
					environment.getProperty("server.sessionTimeout", String.class));
			response.setHeader("Access-Control-Allow-Headers",
					"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Origin,withCredentials");
		}
		filterChain.doFilter(request, response);
	}

	/**
	 * @return the originEnvironment
	 */
	public String getOriginEnvironment() {
		return originEnvironment;
	}

	/**
	 * @param originEnvironment
	 *            the originEnvironment to set
	 */
	public void setOriginEnvironment(String originEnvironment) {
		this.originEnvironment = originEnvironment;
	}

}
