package com.webapp.apis.domian;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "tbl_auto_number")
public class TblAutoNumber implements Serializable {

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

    public TblAutoNumber() {
    }

    public TblAutoNumber(Integer autoNumId) {
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

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (autoNumId != null ? autoNumId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TblAutoNumber)) {
            return false;
        }
        TblAutoNumber other = (TblAutoNumber) object;
        if ((this.autoNumId == null && other.autoNumId != null) || (this.autoNumId != null && !this.autoNumId.equals(other.autoNumId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.TblAutoNumber[ autoNumId=" + autoNumId + " ]";
    }
    
}
