package com.webapp.apis.masters.model;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 *
 * @author mohammed.mirajuddin
 */

public class ProductDetailFormBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;
	private Integer baseId;
	private Integer partyId;
	private BigDecimal discount;
	private BigDecimal rate;

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

	public Integer getPartyId() {
		return partyId;
	}

	public void setPartyId(Integer partyId) {
		this.partyId = partyId;
	}

	public BigDecimal getDiscount() {
		return discount;
	}

	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}

	public BigDecimal getRate() {
		return rate;
	}

	public void setRate(BigDecimal rate) {
		this.rate = rate;
	}

}
