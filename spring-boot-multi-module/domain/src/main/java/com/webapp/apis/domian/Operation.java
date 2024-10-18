package com.webapp.apis.domian;

import java.io.Serializable;

public class Operation implements Serializable {

	private static final long serialVersionUID = 1L;

	 private Boolean view = Boolean.FALSE;
	 private Boolean edit = Boolean.FALSE;
	 private Boolean menu = Boolean.FALSE;
	public Boolean getView() {
		return view;
	}
	public void setView(Boolean view) {
		this.view = view;
	}
	public Boolean getEdit() {
		return edit;
	}
	public void setEdit(Boolean edit) {
		this.edit = edit;
	}
	public Boolean getMenu() {
		return menu;
	}
	public void setMenu(Boolean menu) {
		this.menu = menu;
	}
	 
	 
}
