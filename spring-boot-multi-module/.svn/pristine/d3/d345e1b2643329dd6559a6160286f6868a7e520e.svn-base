package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.StockRequisition;
import com.webapp.apis.transactions.domain.StockRequisitionDetail;
import com.webapp.apis.transactions.model.StockRequisitionDetailFormBean;
import com.webapp.apis.transactions.model.StockRequisitionFormBean;

public class StockRequisitionMapper {
	private static final Logger LOGGER = LoggerFactory.getLogger(StockRequisitionMapper.class);

	public static StockRequisition mapFormToDomain(StockRequisitionFormBean stockRequistionFormBean) {
		StockRequisition stockRequistion = new StockRequisition();
		List<StockRequisitionDetail> stockRequistionDetailList = new ArrayList<>();

		stockRequistion.setId(stockRequistionFormBean.getId());
		stockRequistion.setLocationId(stockRequistionFormBean.getLocationId());
		stockRequistion.setDocDt(stockRequistionFormBean.getDocDt());
		stockRequistion.setDocNo(stockRequistionFormBean.getDocNo());
		stockRequistion.setCreatedDate(stockRequistionFormBean.getCreatedDate());
		stockRequistion.setGrossAmt(stockRequistionFormBean.getGrossAmt());
		stockRequistion.setCreatedBy(stockRequistionFormBean.getCreatedBy());
		stockRequistion.setCreatedDate(stockRequistionFormBean.getCreatedDate());
		stockRequistion.setUpdatedBy(stockRequistionFormBean.getUpdatedBy());
		stockRequistion.setUpdatedDate(stockRequistionFormBean.getUpdatedDate());

		List<StockRequisitionDetailFormBean> formdetailList = stockRequistionFormBean.getStockRequisitionDetailList();
		for (StockRequisitionDetailFormBean detailFormbeam : formdetailList) {
			StockRequisitionDetail detailDomain = new StockRequisitionDetail();

			detailDomain.setId(detailFormbeam.getId());
			detailDomain.setRate(detailFormbeam.getRate());
			detailDomain.setQty(detailFormbeam.getQty());
			detailDomain.setProductId(detailFormbeam.getProductId());
			detailDomain.setAuthor(detailFormbeam.getAuthor());
			detailDomain.setBaseId(
					detailFormbeam.getBaseId() != null ? new StockRequisition(detailFormbeam.getBaseId()) : null);

			detailDomain.setFldDisc(detailFormbeam.getFldDisc());
			detailDomain.setFldSrate(detailFormbeam.getFldSrate());
			detailDomain.setIsbnCode(detailFormbeam.getIsbnCode());

			detailDomain.setProductcode(detailFormbeam.getProductcode());

			detailDomain.setProductName(detailFormbeam.getProductName());
			detailDomain.setPublisher(detailFormbeam.getPublisher());
			detailDomain.setSupplier(detailFormbeam.getSupplier());
			stockRequistionDetailList.add(detailDomain);

		}

		stockRequistion.setStockRequisitionDetailList(stockRequistionDetailList);
		return stockRequistion;
	}

	public static StockRequisitionFormBean mapDomainToForm(StockRequisition stockRequistion) {
		StockRequisitionFormBean stockRequistionFormBean = new StockRequisitionFormBean();
		List<StockRequisitionDetailFormBean> stockRequistionDetailList = new ArrayList<>();

		stockRequistionFormBean.setId(stockRequistion.getId());
		stockRequistionFormBean.setLocationId(stockRequistion.getLocationId());
		stockRequistionFormBean.setDocDt(stockRequistion.getDocDt());
		stockRequistionFormBean.setDocNo(stockRequistion.getDocNo());
		stockRequistionFormBean.setGrossAmt(stockRequistion.getGrossAmt());
		stockRequistionFormBean.setCreatedBy(stockRequistion.getCreatedBy());
		stockRequistionFormBean.setCreatedDate(stockRequistion.getCreatedDate());
		stockRequistionFormBean.setUpdatedBy(stockRequistion.getUpdatedBy());
		stockRequistionFormBean.setUpdatedDate(stockRequistion.getUpdatedDate());

		List<StockRequisitionDetail> formdetailList = stockRequistion.getStockRequisitionDetailList();
		for (StockRequisitionDetail detailDomain : formdetailList) {
			StockRequisitionDetailFormBean detailFormbean = new StockRequisitionDetailFormBean();

			detailFormbean.setId(detailDomain.getId());
			detailFormbean.setRate(detailDomain.getRate());
			detailFormbean.setQty(detailDomain.getQty());
			detailFormbean.setProductId(detailDomain.getProductId());
			detailFormbean.setAuthor(detailDomain.getAuthor());
			detailFormbean.setBaseId(detailDomain.getBaseId().getId());
			detailFormbean.setFldDisc(detailDomain.getFldDisc());
			detailFormbean.setFldSrate(detailDomain.getFldSrate());
			detailFormbean.setIsbnCode(detailDomain.getIsbnCode());
			detailFormbean.setProductcode(detailDomain.getProductcode());
			detailFormbean.setProductName(detailDomain.getProductName());
			detailFormbean.setPublisher(detailDomain.getPublisher());
			detailFormbean.setSupplier(detailDomain.getSupplier());
			stockRequistionDetailList.add(detailFormbean);

		}

		stockRequistionFormBean.setStockRequisitionDetailList(stockRequistionDetailList);
		return stockRequistionFormBean;
	}

	public static List<StockRequisitionFormBean> mapDomainListToFormList(List<StockRequisition> stockRequistionList) {
		List<StockRequisitionFormBean> stockRequistionListFormBeanList = new ArrayList<>();
		for (StockRequisition stockRequistion : stockRequistionList) {
			stockRequistionListFormBeanList.add(mapDomainToForm(stockRequistion));
		}
		return stockRequistionListFormBeanList;

	}
}
