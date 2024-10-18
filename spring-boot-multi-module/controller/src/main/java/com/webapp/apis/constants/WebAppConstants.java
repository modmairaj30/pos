package com.webapp.apis.constants;

/**
 * @author mairaj
 * @copyright 
 * @email 
 * @date 
 * @purpose 
 */
public interface WebAppConstants {

  /**
   * Common Constants:
   */
  String FLAG_N = "N";
  String FLAG_Y = "Y";
  
  //Operations
  
  String EDIT = "EDIT";
  String MENU = "MENU";
  String VIEW = "VIEW";

  /**
   * Logger constants:
   */
  String LOGGER_STR1 = "\n<============== ";
  String LOGGER_STR2 = " ==============>";
  String LOGGER_PREFIX = "(\n<=========== JSW Admin ===========>)";
  String LOGGER_MSG_ERROR_INFO = "\n<==========ERROR INFO===========>";
  String LOGGER_MSG_USER_ID = " >> userid:";
  String LOGGER_MSG_EXCEPTION = " >> exception:";
  String LOGGER_MSG_TIMESTAMP = " >> TimeStamp:";
  String LOGGER_MSG_GLOBALEXCEPTION =
      "ExceptionHandlerAdvice's globalException method Start. >> clientid:";
  String LOGGER_ERROR = "Error:";

  /**
   * LDAP constants:
   */
  String LDAP_DETAILS_UNAVAILABLE = "LDAP detail is not available.";
  String LDAP_INITIAL_CONTEXT_FACTORY = "com.sun.jndi.ldap.LdapCtxFactory";
  String SECURITY_AUTHENTICATION_TYPE = "simple";

  String INVALID = "INVALID";
  String VALIDATION_FAIL = "VALIDATION_FAIL";

  // Validation Fields Constant
  String USER_NAME = "User Name";
  // Validation Message Constant
  String USER_ROLES_NOT_FOUND = "User Roles Not Found";
  String BROWSER_MULT_TAB = "Another User Already Logged in with Same Browser";
  // Custom Error Constant
  String ERROR_200 = "200";
  /* Logger Errors */
  String LOGGER_ERROR_MESSAGE = "\n<((((((((((ERROR OCCURED((((((((((>";

  String ACCOUNT_LOCKED = "User have not been accessed for 30 consecutive days,so this account is disabled ";
  String DISABLED="Your Account is disabled.Please contact IT System Admin";
  String USER_DISABLED = "User is disabled. Please contact IT System Admin.";
  
}
