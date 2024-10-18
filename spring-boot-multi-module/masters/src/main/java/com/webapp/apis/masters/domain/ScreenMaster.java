package com.webapp.apis.masters.domain;
	import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

	@Entity
	@Table(name = "screen")
	public class ScreenMaster implements Serializable{
		
		private static final long serialVersionUID = 1L;
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "id")
		private Integer id;
		@OneToMany(cascade = CascadeType.ALL)
		@JoinColumn(name = "screen_id", referencedColumnName = "id")
		
	    private List<ScreenOperationMaster> screenOperationList;
		
			
		@Column(name = "screen_name")
		private String screenname;
		
		@Column(name = "enabled")
		private String enabled;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		

		public List<ScreenOperationMaster> getScreenOperationList() {
			return screenOperationList;
		}

		public void setScreenOperationList(List<ScreenOperationMaster> screenOperationList) {
			this.screenOperationList = screenOperationList;
		}

		public String getScreenname() {
			return screenname;
		}

		public void setScreenname(String screenname) {
			this.screenname = screenname;
		}

		public String getEnabled() {
			return enabled;
		}

		public void setEnabled(String enabled) {
			this.enabled = enabled;
		}
	}
		

		
		

		


