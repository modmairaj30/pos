package com.webapp.apis.exceptions;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.webapp.apis.constants.WebAppConstants;
import com.webapp.apis.utility.ResponseWrapper;

/**
 * @author mairaj
 * @copyright
 * @email
 * @date
 * @purpose This class is used to throw customize response when exception
 *          occurs.
 */

@ControllerAdvice
public class WebAppExceptionHandler {

	private static final Logger LOGGER = LoggerFactory.getLogger(WebAppExceptionHandler.class);

	/**
	 * This method is used to handle the exception of type WebAppException
	 * 
	 * @param exception
	 * @return
	 */
	@ExceptionHandler(value = WebAppException.class)
	@ResponseBody
	public ResponseWrapper<Object> globalException(WebAppException exception) {
		LOGGER.error(WebAppConstants.LOGGER_ERROR_MESSAGE + "ExceptionHandlerAdvice exception method. "
				+ " >> exception: " + exception);
		return new ResponseWrapper<>(
				new WebAppException(exception.getErrorCode(), exception.getMsg(), exception.getWebAppError()),
				HttpStatus.BAD_REQUEST, exception.getMessage(), null);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseBody
	public ResponseWrapper<Object> handleMmethodArgumentNotValidException(MethodArgumentNotValidException exception) {
		LOGGER.error(WebAppConstants.LOGGER_ERROR_MESSAGE + "123 --ExceptionHandlerAdvice exception method. "
				+ " >> exception: " + exception);
		Map<String,String> response = new  HashMap(); 
		exception.getBindingResult().getAllErrors().forEach((error)->{
			String fieldName=((FieldError)error).getField();
			String message = error.getDefaultMessage();
			response.put(fieldName, message);
		});
		
		return new ResponseWrapper<>(null,HttpStatus.BAD_REQUEST, exception.getMessage(), response.toString());
		
	}

	/**
	 * This method is used to handle the exception of type Exception
	 * 
	 * @param exception
	 * @return
	 */
	@ExceptionHandler(value = Exception.class)
	@ResponseBody
	public void globalException(Exception exception) {
		exception.printStackTrace();
	}

}
