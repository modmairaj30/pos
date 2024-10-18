package com.webapp.apis.masters.model;

import java.io.Serializable;

public class SearchCriteriaFormBean implements Serializable{
	private static final long serialVersionUID = 1L;
	private String key;
	private String value;
	private String operation;
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public String getOperation() {
		return operation;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	
	
}
