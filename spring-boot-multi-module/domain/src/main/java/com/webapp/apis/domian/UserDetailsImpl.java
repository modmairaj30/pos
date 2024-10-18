package com.webapp.apis.domian;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;

	private Integer id;

	private String username;

	private String email;
	private String role;
	private List<String> screenId;
	private Map<String, Operation> userRoles;
	private Integer role_id;
	private String location;

	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl(Integer id, String username, String email, String password, Integer role_id,String location) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.role_id = role_id;
		this.location = location;
		
	}

	public static UserDetailsImpl build(User user) {
		
		return new UserDetailsImpl(
				user.getId(), 
				user.getUsername(), 
				user.getEmail(),
				user.getPassword(),
				user.getRole_id(),
				user.getLocation()
				);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public Integer getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
	
	public List<String> getScreenId() {
	    return screenId;
	  }

	  /**
	   * @param screenId the screenId to set
	   */
	  public void setScreenId(List<String> screenId) {
	    this.screenId = screenId;
	  }

	  /**
	   * @return the userRoles
	   */
	  public Map<String, Operation> getUserRoles() {
	    return userRoles;
	  }

	  /**
	   * @param userRoles the userRoles to set
	   */
	  public void setUserRoles(Map<String, Operation> userRoles) {
	    this.userRoles = userRoles;
	  }


	public Integer getRole_id() {
		return role_id;
	}

	public void setRole_id(Integer role_id) {
		this.role_id = role_id;
	}
	
	

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}
}
