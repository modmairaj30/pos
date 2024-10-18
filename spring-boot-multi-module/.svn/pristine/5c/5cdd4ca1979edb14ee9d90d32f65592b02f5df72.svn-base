package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;

import com.webapp.apis.transactions.domain.StockVerification;
import com.webapp.apis.transactions.domain.StockVerificationDetail;
import com.webapp.apis.transactions.model.StockVerificationDetailFromBean;
import com.webapp.apis.transactions.model.StockVerificationFormBean;

/**
 * @author Mairaj
 */

public class StockVerificationMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(StockVerificationMapper.class);

	public static StockVerification mapFormToDomain(StockVerificationFormBean stockVerificationFormBean) {
		StockVerification stockVerification = new StockVerification();
		List<StockVerificationDetail> stockVerificationDetailList = new ArrayList<>();
		stockVerification.setId(stockVerificationFormBean.getId());
		stockVerification.setDocDt(stockVerificationFormBean.getDocDt());
		stockVerification.setDocNo(stockVerificationFormBean.getDocNo());
		stockVerification.setDummy(stockVerificationFormBean.getDummy());
		stockVerification.setLocationId(stockVerificationFormBean.getLocationId());
		stockVerification.setUserId(stockVerificationFormBean.getUserId());
		stockVerification.setVerifiedBy(stockVerificationFormBean.getVerifiedBy());
		stockVerification.setCreatedBy(stockVerificationFormBean.getCreatedBy());
		stockVerification.setCreatedDate(stockVerificationFormBean.getCreatedDate());
		stockVerification.setUpdatedBy(stockVerificationFormBean.getUpdatedBy());
		stockVerification.setUpdatedDate(stockVerificationFormBean.getUpdatedDate());
		
		List<StockVerificationDetailFromBean> formdetailList = stockVerificationFormBean
				.getStockVerificationDetailList();
		for (StockVerificationDetailFromBean detailFormbeam : formdetailList) {
			StockVerificationDetail detailDomain = new StockVerificationDetail();
			detailDomain.setId(detailFormbeam.getId());
			detailDomain.setBaseId(
					detailFormbeam.getBaseId() != null ? new StockVerification(detailFormbeam.getBaseId()) : null);
			detailDomain.setAuthor(detailFormbeam.getAuthor());
			detailDomain.setAvailQty(detailFormbeam.getAvailQty());
			detailDomain.setDescription(detailFormbeam.getDescription());
			detailDomain.setDifference(detailFormbeam.getDifference());
			detailDomain.setDummyD(detailFormbeam.getDummyD());
			detailDomain.setFldBin(detailFormbeam.getFldBin());
			detailDomain.setFldDisc(detailFormbeam.getFldDisc());
			detailDomain.setFldSrate(detailFormbeam.getFldSrate());
			detailDomain.setProductCode(detailFormbeam.getProductCode());
			detailDomain.setProductId(detailFormbeam.getProductId());
			detailDomain.setProductName(detailFormbeam.getProductName());
			detailDomain.setPublisher(detailFormbeam.getPublisher());
			detailDomain.setQty(detailFormbeam.getQty());
			detailDomain.setRackNo(detailFormbeam.getRackNo());
			detailDomain.setRate(detailFormbeam.getRate());
			detailDomain.setSupplier(detailFormbeam.getSupplier());
			detailDomain.setTotalAmt(detailFormbeam.getTotalAmt());
			// BeanUtils.copyProperties(detailFormbeam, detailDomain);
			stockVerificationDetailList.add(detailDomain);
		}
		stockVerification.setStockVerificationDetailList(stockVerificationDetailList);
		return stockVerification;
	}

	public static StockVerificationFormBean mapDomainToForm(StockVerification stockVerification) {
		StockVerificationFormBean stockVerificationFormBean = new StockVerificationFormBean();
		List<StockVerificationDetailFromBean> detailFormList = new ArrayList<>();
		stockVerificationFormBean.setId(stockVerification.getId());
		stockVerificationFormBean.setDocDt(stockVerification.getDocDt());
		stockVerificationFormBean.setDocNo(stockVerification.getDocNo());
		stockVerificationFormBean.setDummy(stockVerification.getDummy());
		stockVerificationFormBean.setLocationId(stockVerification.getLocationId());
		stockVerificationFormBean.setUserId(stockVerification.getUserId());
		stockVerificationFormBean.setVerifiedBy(stockVerification.getVerifiedBy());
		stockVerificationFormBean.setCreatedBy(stockVerification.getCreatedBy());
		stockVerificationFormBean.setCreatedDate(stockVerification.getCreatedDate());
		stockVerificationFormBean.setUpdatedBy(stockVerification.getUpdatedBy());
		stockVerificationFormBean.setUpdatedDate(stockVerification.getUpdatedDate());

		List<StockVerificationDetail> formdetailList = stockVerification.getStockVerificationDetailList();
		for (StockVerificationDetail detailDomain : formdetailList) {
			StockVerificationDetailFromBean detailFormbeam = new StockVerificationDetailFromBean();
			// BeanUtils.copyProperties(detailDomain, detailFormbeam);
			detailFormbeam.setId(detailDomain.getId());
			detailFormbeam.setBaseId(detailDomain.getBaseId().getId());
			detailFormbeam.setAuthor(detailDomain.getAuthor());
			detailFormbeam.setAvailQty(detailDomain.getAvailQty());
			detailFormbeam.setDescription(detailDomain.getDescription());
			detailFormbeam.setDifference(detailDomain.getDifference());
			detailFormbeam.setDummyD(detailDomain.getDummyD());
			detailFormbeam.setFldBin(detailDomain.getFldBin());
			detailFormbeam.setFldDisc(detailDomain.getFldDisc());
			detailFormbeam.setFldSrate(detailDomain.getFldSrate());
			detailFormbeam.setProductCode(detailDomain.getProductCode());
			detailFormbeam.setProductId(detailDomain.getProductId());
			detailFormbeam.setProductName(detailDomain.getProductName());
			detailFormbeam.setPublisher(detailDomain.getPublisher());
			detailFormbeam.setQty(detailDomain.getQty());
			detailFormbeam.setRackNo(detailDomain.getRackNo());
			detailFormbeam.setRate(detailDomain.getRate());
			detailFormbeam.setSupplier(detailDomain.getSupplier());
			detailFormbeam.setTotalAmt(detailDomain.getTotalAmt());
			detailFormList.add(detailFormbeam);
		}
		stockVerificationFormBean.setStockVerificationDetailList(detailFormList);
		return stockVerificationFormBean;
	}

	public static List<StockVerificationFormBean> mapDomainListToFormList(
			List<StockVerification> stockVerificationList) {
		List<StockVerificationFormBean> stockVerificationFormBeanList = new ArrayList<>();
		for (StockVerification stockVerification : stockVerificationList) {
			stockVerificationFormBeanList.add(mapDomainToForm(stockVerification));
		}
		return stockVerificationFormBeanList;

	}

}
