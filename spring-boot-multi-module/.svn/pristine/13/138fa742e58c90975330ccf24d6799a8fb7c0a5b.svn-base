package com.webapp.apis.domian;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "tbl_autonumber_location")
public class TblAutonumberLocation implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "auto_num_id")
    private Integer autoNumId;
    @Column(name = "txn_id")
    private Integer txnId;
    @Column(name = "txn_detail_id")
    private Integer txnDetailId;
    @Column(name = "prefix")
    private String prefix;
    @Column(name = "number")
    private Integer number;
    @Column(name = "suffix")
    private String suffix;
    @Column(name = "location_id")
    private Integer locationId;
    @Column(name = "lookup_field_name")
    private String lookupFieldName;
    @Column(name = "lookup_field_value")
    private String lookupFieldValue;
    @Column(name = "month_id")
    private Integer monthId;

    public TblAutonumberLocation() {
    }

    public TblAutonumberLocation(Integer autoNumId) {
        this.autoNumId = autoNumId;
    }

    public Integer getAutoNumId() {
        return autoNumId;
    }

    public void setAutoNumId(Integer autoNumId) {
        this.autoNumId = autoNumId;
    }

    public Integer getTxnId() {
        return txnId;
    }

    public void setTxnId(Integer txnId) {
        this.txnId = txnId;
    }

    public Integer getTxnDetailId() {
        return txnDetailId;
    }

    public void setTxnDetailId(Integer txnDetailId) {
        this.txnDetailId = txnDetailId;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
    }

    public String getLookupFieldName() {
        return lookupFieldName;
    }

    public void setLookupFieldName(String lookupFieldName) {
        this.lookupFieldName = lookupFieldName;
    }

    public String getLookupFieldValue() {
        return lookupFieldValue;
    }

    public void setLookupFieldValue(String lookupFieldValue) {
        this.lookupFieldValue = lookupFieldValue;
    }

    public Integer getMonthId() {
        return monthId;
    }

    public void setMonthId(Integer monthId) {
        this.monthId = monthId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (autoNumId != null ? autoNumId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TblAutonumberLocation)) {
            return false;
        }
        TblAutonumberLocation other = (TblAutonumberLocation) object;
        if ((this.autoNumId == null && other.autoNumId != null) || (this.autoNumId != null && !this.autoNumId.equals(other.autoNumId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.TblAutonumberLocation[ autoNumId=" + autoNumId + " ]";
    }
    
}
