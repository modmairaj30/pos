package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.StockEntry;
import com.webapp.apis.transactions.domain.StockentryDetail;
import com.webapp.apis.transactions.model.StockEntryDetailFormBean;
import com.webapp.apis.transactions.model.StockEntryFormBean;

public class StockEntryMapper {
	private static final Logger LOGGER = LoggerFactory.getLogger(StockEntryMapper.class);

	public static StockEntry mapFormToDomain(StockEntryFormBean StockEntryFormBean) {
		StockEntry StockEntry = new StockEntry();
		List<StockentryDetail> StockEntryDetailList = new ArrayList<>();

		StockEntry.setId(StockEntryFormBean.getId());
		StockEntry.setLocationId(StockEntryFormBean.getLocationId());
		StockEntry.setDocDt(StockEntryFormBean.getDocDt());
		StockEntry.setDocNo(StockEntryFormBean.getDocNo());
		StockEntry.setGrossAmt(StockEntryFormBean.getGrossAmt());
		StockEntry.setCreatedBy(StockEntryFormBean.getCreatedBy());
		StockEntry.setCreatedDate(StockEntryFormBean.getCreatedDate());
		StockEntry.setUpdatedBy(StockEntryFormBean.getUpdatedBy());
		StockEntry.setUpdatedDate(StockEntryFormBean.getUpdatedDate());

		List<StockEntryDetailFormBean> formdetailList = StockEntryFormBean.getStockEntryDetailList();
		for (StockEntryDetailFormBean detailFormbeam : formdetailList) {
			StockentryDetail detailDomain = new StockentryDetail();

			detailDomain.setId(detailFormbeam.getId());
			detailDomain.setAmount(detailFormbeam.getAmount());
			detailDomain.setRate(detailFormbeam.getRate());
			detailDomain.setQty(detailFormbeam.getQty());
			detailDomain.setProductId(detailFormbeam.getProductId());
			detailDomain.setAuthor(detailFormbeam.getAuthor());
			detailDomain
					.setBaseId(detailFormbeam.getBaseId() != null ? new StockEntry(detailFormbeam.getBaseId()) : null);
			detailDomain.setDiscPc(detailFormbeam.getDiscPc());
			detailDomain.setFldDisc(detailFormbeam.getFldDisc());
			detailDomain.setFldSrate(detailFormbeam.getFldSrate());
			detailDomain.setIsbnCode(detailFormbeam.getIsbnCode());
			detailDomain.setProductCode(detailFormbeam.getProductCode());
			detailDomain.setProductName(detailFormbeam.getProductName());
			detailDomain.setPublisher(detailFormbeam.getPublisher());
			detailDomain.setSupplier(detailFormbeam.getSupplier());
			StockEntryDetailList.add(detailDomain);

		}

		StockEntry.setStockEntryDetailList(StockEntryDetailList);
		return StockEntry;
	}

	public static StockEntryFormBean mapDomainToForm(StockEntry StockEntry) {
		StockEntryFormBean StockEntryFormBean = new StockEntryFormBean();
		List<StockEntryDetailFormBean> StockEntryDetailList = new ArrayList<>();

		StockEntryFormBean.setId(StockEntry.getId());
		StockEntryFormBean.setLocationId(StockEntry.getLocationId());
		StockEntryFormBean.setDocDt(StockEntry.getDocDt());
		StockEntryFormBean.setDocNo(StockEntry.getDocNo());

		StockEntryFormBean.setGrossAmt(StockEntry.getGrossAmt());
		StockEntryFormBean.setCreatedBy(StockEntry.getCreatedBy());
		StockEntryFormBean.setCreatedDate(StockEntry.getCreatedDate());
		StockEntryFormBean.setUpdatedBy(StockEntry.getUpdatedBy());
		StockEntryFormBean.setUpdatedDate(StockEntry.getUpdatedDate());

		List<StockentryDetail> formdetailList = StockEntry.getStockEntryDetailList();
		for (StockentryDetail detailDomain : formdetailList) {
			StockEntryDetailFormBean detailFormbean = new StockEntryDetailFormBean();

			detailFormbean.setId(detailDomain.getId());
			detailFormbean.setAmount(detailDomain.getAmount());
			detailFormbean.setRate(detailDomain.getRate());
			detailFormbean.setQty(detailDomain.getQty());
			detailFormbean.setProductId(detailDomain.getProductId());
			detailFormbean.setAuthor(detailDomain.getAuthor());
			detailFormbean.setBaseId(detailDomain.getBaseId().getId());
			detailFormbean.setDiscPc(detailDomain.getDiscPc());
			detailFormbean.setFldDisc(detailDomain.getFldDisc());
			detailFormbean.setFldSrate(detailDomain.getFldSrate());
			detailFormbean.setIsbnCode(detailDomain.getIsbnCode());
			detailFormbean.setProductCode(detailDomain.getProductCode());
			detailFormbean.setProductName(detailDomain.getProductName());
			detailFormbean.setPublisher(detailDomain.getPublisher());
			detailFormbean.setSupplier(detailDomain.getSupplier());
			StockEntryDetailList.add(detailFormbean);

		}

		StockEntryFormBean.setStockEntryDetailList(StockEntryDetailList);
		return StockEntryFormBean;
	}

	public static List<StockEntryFormBean> mapDomainListToFormList(List<StockEntry> StockEntryList) {
		List<StockEntryFormBean> StockEntryListFormBeanList = new ArrayList<>();
		for (StockEntry StockEntry : StockEntryList) {
			StockEntryListFormBeanList.add(mapDomainToForm(StockEntry));
		}
		return StockEntryListFormBeanList;

	}
}
