package com.webapp.apis.masters.model;

import java.io.Serializable;


public class RolesMasterFormBean implements Serializable {
	public static final Long SerialVersionULD=1L;

	private int id;
	private String name;
	private String enabled;
	private String rolescol;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEnabled() {
		return enabled;
	}
	public void setEnabled(String enabled) {
		this.enabled = enabled;
	}
	public String getRolescol() {
		return rolescol;
	}
	public void setRolescol(String rolescol) {
		this.rolescol = rolescol;
	}
	

}
