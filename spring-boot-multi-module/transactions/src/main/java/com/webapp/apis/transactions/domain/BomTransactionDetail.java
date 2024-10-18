package com.webapp.apis.transactions.domain;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



/**
 *
 * @author mohammed.mirajuddin
 */
@Entity
@Table(name = "bill_detail")
public class BomTransactionDetail implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	@Column(name = "id")
	private Integer id;
	@Column(name = "item_id")
	private Integer itemId;
	@Column(name = "item_name")
	private String itemName;
	@Column(name = "amt")
	private BigDecimal amount;
	@Column(name = "uom")
	private String uom;
	@Column(name = "qty")
	private BigDecimal qty;
	@Column(name = "rate")
	private BigDecimal rate;
	
	@JoinColumn(name = "base_id", referencedColumnName = "id")
    @ManyToOne
    private BomTransaction baseId;

	public BomTransactionDetail() {
	}

	public BomTransactionDetail(Integer id) {
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	
	public BigDecimal getRate() {
		return rate;
	}

	public void setRate(BigDecimal rate) {
		this.rate = rate;
	}
	
	

	public BomTransaction getBaseId() {
		return baseId;
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
		if (!(object instanceof BomTransactionDetail)) {
			return false;
		}
		BomTransactionDetail other = (BomTransactionDetail) object;
		if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "com.mycompany.javaapplication1.BomDetails[ id=" + id + " ]";
	}

	public void setBaseId(BomTransaction baseId) {
		this.baseId = baseId;
	}

	

	

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getUom() {
		return uom;
	}

	public void setUom(String uom) {
		this.uom = uom;
	}

	public BigDecimal getQty() {
		return qty;
	}

	public void setQty(BigDecimal qty) {
		this.qty = qty;
	}

	public Integer getItemId() {
		return itemId;
	}

	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	
	
	

}
