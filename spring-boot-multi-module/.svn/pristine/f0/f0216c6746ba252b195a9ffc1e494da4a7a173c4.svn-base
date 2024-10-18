package com.webapp.apis.transactions.domain;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Collection;
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
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "stocktransfers")
public class Stocktransfers implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "doc_dt")
    @Temporal(TemporalType.DATE)
    private Date docDt;
    @Column(name = "doc_no")
    private String docNo;
    @Column(name = "location_id")
    private Integer locationId;
    @Column(name = "tolocation")
    private Integer tolocation;
    @Column(name = "truck_no")
    private String truckNo;
    @Column(name = "driver_name")
    private String driverName;
    @Lob
    @Column(name = "comment")
    private String comment;
    @Column(name = "employee")
    private String employee;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "gross_amt")
    private BigDecimal grossAmt;
    @Column(name = "disc_amt")
    private BigDecimal discAmt;
    @Column(name = "net_amt")
    private BigDecimal netAmt;
    @Column(name = "fld_docno")
    private String fldDocno;
    @Column(name = "created_by")
    private String createdBy;
    @Column(name = "updated_by")
	private String updatedBy;
    @Column(name = "created_date")
	private Date createdDate;
    @Column(name = "updated_date")
	private Date updatedDate;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "base_id", referencedColumnName = "id")
	private List<StocktransfersDetail> stocktransfersDetailList;

    public Stocktransfers() {
    }

    public Stocktransfers(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
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

       
    public Integer getTolocation() {
		return tolocation;
	}

	public void setTolocation(Integer tolocation) {
		this.tolocation = tolocation;
	}

	public String getTruckNo() {
		return truckNo;
	}

	public void setTruckNo(String truckNo) {
		this.truckNo = truckNo;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getEmployee() {
		return employee;
	}

	public void setEmployee(String employee) {
		this.employee = employee;
	}

	public BigDecimal getGrossAmt() {
		return grossAmt;
	}

	public void setGrossAmt(BigDecimal grossAmt) {
		this.grossAmt = grossAmt;
	}

	public BigDecimal getDiscAmt() {
		return discAmt;
	}

	public void setDiscAmt(BigDecimal discAmt) {
		this.discAmt = discAmt;
	}

	public BigDecimal getNetAmt() {
		return netAmt;
	}

	public void setNetAmt(BigDecimal netAmt) {
		this.netAmt = netAmt;
	}

	public String getFldDocno() {
		return fldDocno;
	}

	public void setFldDocno(String fldDocno) {
		this.fldDocno = fldDocno;
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

	public List<StocktransfersDetail> getStocktransfersDetailList() {
		return stocktransfersDetailList;
	}

	public void setStocktransfersDetailList(List<StocktransfersDetail> stocktransfersDetailList) {
		this.stocktransfersDetailList = stocktransfersDetailList;
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
        if (!(object instanceof Stocktransfers)) {
            return false;
        }
        Stocktransfers other = (Stocktransfers) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.javaapplication1.Stocktransfers[ id=" + id + " ]";
    }
    
}
