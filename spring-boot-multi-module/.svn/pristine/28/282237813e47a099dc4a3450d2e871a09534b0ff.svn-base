package com.webapp.apis.masters.domain;

import java.io.Serializable;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="roles")
public class RolesMaster implements Serializable {
	public static final Long SerialVersionULD=1L;
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	 @Column(name="id")
	 private int id;
	 @Column(name="name")
	 private String name;
	 @Column(name="enabled")
	 private String  enabled;
	 @Column(name="rolescol")
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
