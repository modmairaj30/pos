package com.webapp.apis.masters.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "stockincnote_detail")
@Access(value=AccessType.FIELD)
public class StockMasterDetail implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "id")
    private Integer id;
	@Column(name= "base_id")
	private Integer baseId;
	@Column(name= "product_id")
	private String productId;
	@Column(name="qty")
	private Integer qty;
	@Column(name="batch_no")
	private String batchNo;
	
	 	@JoinColumn(name = "stockmaster", referencedColumnName = "id")
	    @ManyToOne
	    private StockMaster stockmaster;
	 	@Column(name = "created_by")
		private String createdBy;
		
		@Column(name = "updated_by")
		private String updatedBy;
		
		@Column(name = "created_date")
		private Date createdDate;
		
		@Column(name = "updated_date")
		private Date updatedDate;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public Integer getBaseId() {
			return baseId;
		}

		public void setBaseId(Integer baseId) {
			this.baseId = baseId;
		}

		public String getProductId() {
			return productId;
		}

		public void setProductId(String productId) {
			this.productId = productId;
		}

		public Integer getQty() {
			return qty;
		}

		public void setQty(Integer qty) {
			this.qty = qty;
		}

		public String getBatchNo() {
			return batchNo;
		}

		public void setBatchNo(String batchNo) {
			this.batchNo = batchNo;
		}

		public StockMaster getStockmaster() {
			return stockmaster;
		}

		public void setStockmaster(StockMaster stockmaster) {
			this.stockmaster = stockmaster;
		}

		
		public String getCreatedBy() {
			return createdBy;
		}

		public void setCreatedBy(String createdBy) {
			this.createdBy = createdBy;
		}

		public String getUpdatedBy() {
			return updatedBy;
		}

		public void setUpdatedBy(String updatedBy) {
			this.updatedBy = updatedBy;
		}

		public Date getCreatedDate() {
			return createdDate;
		}

		public void setCreatedDate(Date createdDate) {
			this.createdDate = createdDate;
		}

		public Date getUpdatedDate() {
			return updatedDate;
		}

		public void setUpdatedDate(Date updatedDate) {
			this.updatedDate = updatedDate;
		}
		

	
	
	

	
	

}
