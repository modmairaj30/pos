package com.webapp.apis.masters.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.masters.domain.StockMaster;
import com.webapp.apis.masters.domain.StockMasterDetail;
import com.webapp.apis.masters.model.StockMasterDetailFormBean;
import com.webapp.apis.masters.model.StockMasterFormBean;

public class StockMasterMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(StockMasterMapper.class);

	public static StockMaster mapFormToDomain(StockMasterFormBean stockMasterFormBean) {
		StockMaster stockMaster = new StockMaster();
		List<StockMasterDetail> detailDomainList = new ArrayList<>();
		stockMaster.setcPrefix(stockMasterFormBean.getcPrefix());
		stockMaster.setId(stockMasterFormBean.getId());
		stockMaster.setDocDt(stockMasterFormBean.getDocDt());
		stockMaster.setDocNo(stockMasterFormBean.getDocNo());
		stockMaster.setUid(stockMasterFormBean.getUid());
		stockMaster.setLocationId(stockMasterFormBean.getLocationId());
		stockMaster.setPartyId(stockMasterFormBean.getPartyId());
		stockMaster.setUserId(stockMasterFormBean.getUserId());
		stockMaster.setFromNo(stockMasterFormBean.getFromNo());
		stockMaster.setToNo(stockMasterFormBean.getToNo());
		stockMaster.setCustId(stockMasterFormBean.getCustId());
		stockMaster.setUdate(stockMasterFormBean.getUdate());
		stockMaster.setNtime(stockMasterFormBean.getNtime());
		stockMaster.setUploadFlag(stockMasterFormBean.getUploadFlag());

		List<StockMasterDetailFormBean> formdetailList = stockMasterFormBean.getStockMasterDetailFormBeanList();
		for (StockMasterDetailFormBean detailFormbeam : formdetailList) {
			StockMasterDetail detailDomain = new StockMasterDetail();
			detailDomain.setBaseId(detailFormbeam.getBaseId());
			detailDomain.setBatchNo(detailFormbeam.getBatchNo());
			detailDomain.setId(detailFormbeam.getId());
			detailDomain.setProductId(detailFormbeam.getProductId());
			detailDomain.setQty(detailFormbeam.getQty());
			detailDomainList.add(detailDomain);
		}
		stockMaster.setStockMasterDetailList(detailDomainList);
		return stockMaster;
	}

	public static StockMasterFormBean mapDomainToForm(StockMaster stockMaster) {
		StockMasterFormBean stockMasterFormBean = new StockMasterFormBean();
		List<StockMasterDetailFormBean> detailFormList = new ArrayList<>();
		stockMasterFormBean.setId(stockMaster.getId());
		stockMasterFormBean.setDocDt(stockMaster.getDocDt());
		stockMasterFormBean.setDocNo(stockMaster.getDocNo());
		stockMasterFormBean.setUid(stockMaster.getUid());
		stockMasterFormBean.setLocationId(stockMaster.getLocationId());
		stockMasterFormBean.setUserId(stockMaster.getUserId());
		stockMasterFormBean.setPartyId(stockMaster.getPartyId());
		stockMasterFormBean.setcPrefix(stockMaster.getcPrefix());
		stockMasterFormBean.setFromNo(stockMaster.getFromNo());
		stockMasterFormBean.setToNo(stockMaster.getToNo());
		stockMasterFormBean.setCustId(stockMaster.getCustId());
		stockMasterFormBean.setUdate(stockMaster.getUdate());
		stockMasterFormBean.setNtime(stockMaster.getNtime());
		stockMasterFormBean.setUploadFlag(stockMaster.getUploadFlag());
		List<StockMasterDetail> domainDetailList = stockMaster.getStockMasterDetailList();
		for (StockMasterDetail detailDomain : domainDetailList) {
			StockMasterDetailFormBean detailForm = new StockMasterDetailFormBean();
			detailForm.setId(detailDomain.getId());
			detailForm.setBatchNo(detailDomain.getBatchNo());
			detailForm.setBaseId(detailDomain.getBaseId());
			detailForm.setProductId(detailDomain.getProductId());
			detailDomain.setQty(detailDomain.getQty());
			detailFormList.add(detailForm);
		}
		stockMasterFormBean.setStockMasterDetailFormBeanList(detailFormList);
		return stockMasterFormBean;

	}

	public static List<StockMasterFormBean> mapDomainListToFormList(List<StockMaster> stockMasterList) {
		List<StockMasterFormBean> stockMasterFormBeanList = new ArrayList<>();
		for (StockMaster stockmaster : stockMasterList) {
			stockMasterFormBeanList.add(mapDomainToForm(stockmaster));
		}
		return stockMasterFormBeanList;

	}

	public static List<StockMaster> mapFormListToDomainList(List<StockMasterFormBean> stockMasterFormBeanList) {
		List<StockMaster> stockMasterList = new ArrayList<>();
		for (StockMasterFormBean stockmasterFormBean : stockMasterFormBeanList) {
			stockMasterList.add(mapFormToDomain(stockmasterFormBean));
		}
		return stockMasterList;
	}

}
