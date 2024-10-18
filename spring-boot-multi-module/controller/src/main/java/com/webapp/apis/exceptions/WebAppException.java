package com.webapp.apis.exceptions;

import java.util.List;

/**
 * @author mairaj
 * @copyright
 * @email
 * @date
 * @purpose This class is used to throw exception.
 */

public class WebAppException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	private final String errorCode;
	private final String msg;
	private final transient List<WebAppError> webAppError;

	/**
	 * This is the constructor used for WebAppException
	 * 
	 * @param errorCode
	 * @param msg
	 * @param WebAppError
	 */

	public WebAppException(String errorCode, String msg, List<WebAppError> webAppError) {
		super();
		this.errorCode = errorCode;
		this.msg = msg;
		this.webAppError = webAppError;
	}

	/**
	 * Method to get List of WebAppErrors
	 * 
	 * @return {@link List<WebAppError>}
	 */
	public List<WebAppError> getWebAppError() {
		return webAppError;
	}

	/**
	 * Method to get Msg
	 * 
	 * @return {@link String}
	 */
	public String getErrorCode() {
		return errorCode;
	}

	/**
	 * Method to get Error Code
	 * 
	 * @return {@link String}
	 */
	public String getMsg() {
		return msg;
	}

	@Override
	public String toString() {
		return "WebAppException [errorCode=" + errorCode + ", msg=" + msg + ", WebAppError=" + webAppError + "]";
	}

}
