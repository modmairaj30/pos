package com.webapp.apis.utility;

import java.io.Serializable;

import org.springframework.http.HttpStatus;

import com.webapp.apis.exceptions.WebAppException;

public class ResponseWrapper<T> implements Serializable {

  private static final long serialVersionUID = 1L;
  private WebAppException webAppException;
  private HttpStatus statusCode;
  private String message;
  private T data;

  public ResponseWrapper() {
    // Default constructor
  }

  public ResponseWrapper(WebAppException WebAppException) {
    super();
    this.webAppException = WebAppException;
  }

  public WebAppException getWebAppException() {
    return webAppException;
  }

  public void setWebAppException(WebAppException WebAppException) {
    this.webAppException = WebAppException;
  }

  public ResponseWrapper(WebAppException WebAppException, HttpStatus statusCode, String message,
      T data) {
    super();
    this.webAppException = WebAppException;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  /**
   * Method to get JSteel Error
   * 
   * @return {@link HttpStatus}
   */
  public HttpStatus getStatusCode() {
    return statusCode;
  }

  /**
   * Method to set Status Code
   * 
   * @param statusCode
   */
  public void setStatusCode(HttpStatus statusCode) {
    this.statusCode = statusCode;
  }

  /**
   * Method to get JSteel Error
   * 
   * @return {@link String}
   */
  public String getMessage() {
    return message;
  }

  /**
   * Method to set Message
   * 
   * @param message
   */
  public void setMessage(String message) {
    this.message = message;
  }

  /**
   * Method to get Data
   * 
   * @return {@link T}
   */
  public T getData() {
    return data;
  }

  /**
   * Method to set data
   * 
   * @param data
   */
  public void setData(T data) {
    this.data = data;
  }
}
