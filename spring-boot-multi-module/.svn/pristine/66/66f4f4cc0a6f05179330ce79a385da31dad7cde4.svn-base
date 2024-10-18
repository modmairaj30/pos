package com.webapp.apis.masters.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
@Entity
@Table(name = "bom")
public class BomMaster implements Serializable{
	 private static final long serialVersionUID = 1L;
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Basic(optional = false)
	    @Column(name = "id")
	    private Integer id;
	    @Column(name = "product_id")
	    private Integer productId;
	    @Column(name = "prod_name")
	    private String prodName;
	    @Column(name = "prod_code")
	    private String prodCode;
	    @Column(name = "doc_dt")
	    @Temporal(TemporalType.DATE)
	    private Date docDt;
	    @Column(name = "doc_no")
	    private String docNo;
	    @Column(name = "bom_name")
	    private Integer bomName;
	    @Column(name = "rate")
	    private BigDecimal rate;
	    @Column(name = "multidoc")
	    private String multidoc;
	    @Column(name = "description")
	    private String description;
	    @Column(name = "uom")
	    private String uom;
	    @Column(name = "created_by")
	    private String createdBy;
	    @Column(name = "updated_by")
	    private String updatedBy;
	    @Column(name = "created_date")
	    @Temporal(TemporalType.TIMESTAMP)
	    private Date createdDate;
	    @Column(name = "updated_date")
	    @Temporal(TemporalType.TIMESTAMP)
	    private Date updatedDate;
	    
	    @OneToMany(cascade = CascadeType.ALL)
	   	@JoinColumn(name = "base_id", referencedColumnName = "id")
	   	private List<BomDetail> bomDetailList;

	    public BomMaster() {
	    }

	    public BomMaster(Integer id) {
	        this.id = id;
	    }

	    public Integer getId() {
	        return id;
	    }

	    public void setId(Integer id) {
	        this.id = id;
	    }

	    public String getProdName() {
	        return prodName;
	    }

	    public void setProdName(String prodName) {
	        this.prodName = prodName;
	    }

	    public Date getDocDt() {
	        return docDt;
	    }

	    public void setDocDt(Date docDt) {
	        this.docDt = docDt;
	    }

	    public String getDocNo() {
	        return docNo;
	    }

	    public void setDocNo(String docNo) {
	        this.docNo = docNo;
	    }

	   
		public Integer getBomName() {
			return bomName;
		}

		public void setBomName(Integer bomName) {
			this.bomName = bomName;
		}

		public BigDecimal getRate() {
			return rate;
		}

		public void setRate(BigDecimal rate) {
			this.rate = rate;
		}

		public String getMultidoc() {
			return multidoc;
		}

		public void setMultidoc(String multidoc) {
			this.multidoc = multidoc;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public String getUom() {
			return uom;
		}

		public void setUom(String uom) {
			this.uom = uom;
		}
		
		

		public String getProdCode() {
			return prodCode;
		}

		public void setProdCode(String prodCode) {
			this.prodCode = prodCode;
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

		public Integer getProductId() {
			return productId;
		}

		public void setProductId(Integer productId) {
			this.productId = productId;
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

		public List<BomDetail> getBomDetailList() {
			return bomDetailList;
		}

		public void setBomDetailList(List<BomDetail> bomDetailList) {
			this.bomDetailList = bomDetailList;
		}

		@Override
	    public int hashCode() {
	        int hash = 0;
	        hash += (id != null ? id.hashCode() : 0);
	        return hash;
	    }

	    @Override
	    public boolean equals(Object object) {
	        // TODO: Warning - this method won't work in the case the id fields are not set
	        if (!(object instanceof BomMaster)) {
	            return false;
	        }
	        BomMaster other = (BomMaster) object;
	        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
	            return false;
	        }
	        return true;
	    }

	    @Override
	    public String toString() {
	        return "com.mycompany.javaapplication1.BomMaster[ id=" + id + " ]";
	    }

}
