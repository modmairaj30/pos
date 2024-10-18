package com.webapp.apis.masters.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.masters.domain.ProductDetail;
import com.webapp.apis.masters.domain.TitleMaster;
import com.webapp.apis.masters.model.ProductDetailFormBean;
import com.webapp.apis.masters.model.TitleMasterFormBean;

/**
 * @author Mairaj
 */

public class TitleMasterMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(TitleMasterMapper.class);

	public static TitleMaster mapFormToDomain(TitleMasterFormBean titleMasterFormBean) {
		TitleMaster titleMaster = new TitleMaster();

		titleMaster.setId(titleMasterFormBean.getId());
		titleMaster.setDocDt(titleMasterFormBean.getDocDt());
		titleMaster.setDocNo(titleMasterFormBean.getDocNo());
		titleMaster.setUom(titleMasterFormBean.getUom());
		titleMaster.setBatchNo(titleMasterFormBean.getBatchNo());
		titleMaster.setBinNo(titleMasterFormBean.getBinNo());

		titleMaster.setCategory(titleMasterFormBean.getCategory());
		titleMaster.setCst(titleMasterFormBean.getCst());
		titleMaster.setDescription(titleMasterFormBean.getDescription());
		titleMaster.setDiscount(titleMasterFormBean.getDiscount());
		titleMaster.setRate(titleMasterFormBean.getRate());
		titleMaster.setIsbnCode(titleMasterFormBean.getIsbnCode());
		titleMaster.setProdName(titleMasterFormBean.getProdName().toUpperCase());

		titleMaster.setProductCode(titleMasterFormBean.getProductCode().toUpperCase());
		titleMaster.setProductGroup(titleMasterFormBean.getProductGroup());
		titleMaster.setPublishedYear(titleMasterFormBean.getPublishedYear());
		titleMaster.setPublisher(titleMasterFormBean.getPublisher());
		titleMaster.setRackNo(titleMasterFormBean.getRackNo());
		titleMaster.setSubject(titleMasterFormBean.getSubject());

		titleMaster.setUpdatedBy(titleMasterFormBean.getUpdatedBy());
		titleMaster.setUpdatedDate(titleMasterFormBean.getUpdatedDate());
		titleMaster.setCreatedBy(titleMasterFormBean.getCreatedBy());
		titleMaster.setCreatedDate(titleMasterFormBean.getCreatedDate());
		
		List<ProductDetail> detailList = new ArrayList<>();
		List<ProductDetailFormBean> formdetailList = titleMasterFormBean.getProductDetailList();
		for (ProductDetailFormBean detailForm : formdetailList) {
			ProductDetail detail = new ProductDetail();
			detail.setId(detailForm.getId());
			detail.setBaseId(detailForm.getBaseId() != null ? new TitleMaster(detailForm.getBaseId()) : null);
			detail.setDiscount(detailForm.getDiscount());
			detail.setRate(detailForm.getRate());
			detail.setPartyId(detailForm.getPartyId());
			
			detailList.add(detail);
		}
		titleMaster.setProductDetailList(detailList);

		return titleMaster;
	}

	public static TitleMasterFormBean mapDomainToForm(TitleMaster titleMaster) {
		TitleMasterFormBean titleMasterFormBean = new TitleMasterFormBean();

		titleMasterFormBean.setId(titleMaster.getId());
		titleMasterFormBean.setDocDt(titleMaster.getDocDt());
		titleMasterFormBean.setDocNo(titleMaster.getDocNo());
		titleMasterFormBean.setUom(titleMaster.getUom());
		titleMasterFormBean.setBatchNo(titleMaster.getBatchNo());
		titleMasterFormBean.setBinNo(titleMaster.getBinNo());

		titleMasterFormBean.setCategory(titleMaster.getCategory());
		titleMasterFormBean.setCst(titleMaster.getCst());
		titleMasterFormBean.setDescription(titleMaster.getDescription());
		titleMasterFormBean.setDiscount(titleMaster.getDiscount());
		titleMasterFormBean.setRate(titleMaster.getRate());
		titleMasterFormBean.setIsbnCode(titleMaster.getIsbnCode());
		titleMasterFormBean.setProdName(titleMaster.getProdName());

		titleMasterFormBean.setProductCode(titleMaster.getProductCode());
		titleMasterFormBean.setProductGroup(titleMaster.getProductGroup());
		titleMasterFormBean.setPublishedYear(titleMaster.getPublishedYear());
		titleMasterFormBean.setPublisher(titleMaster.getPublisher());
		titleMasterFormBean.setRackNo(titleMaster.getRackNo());
		titleMasterFormBean.setSubject(titleMaster.getSubject());

		titleMasterFormBean.setUpdatedBy(titleMaster.getUpdatedBy());
		titleMasterFormBean.setUpdatedDate(titleMaster.getUpdatedDate());
		titleMasterFormBean.setCreatedBy(titleMaster.getCreatedBy());
		titleMasterFormBean.setCreatedDate(titleMaster.getCreatedDate());
		List<ProductDetailFormBean> detailFormList = new ArrayList<>();
		List<ProductDetail> formdetailList = titleMaster.getProductDetailList();
		for (ProductDetail detailDomain : formdetailList) {
			ProductDetailFormBean detailFormbeam = new ProductDetailFormBean();
			detailFormbeam.setId(detailDomain.getId());
			detailFormbeam.setBaseId(detailDomain.getBaseId().getId());
			detailFormbeam.setRate(detailDomain.getRate());
			detailFormbeam.setDiscount(detailDomain.getDiscount());
			detailFormbeam.setPartyId(detailDomain.getPartyId());
			
			detailFormList.add(detailFormbeam);
		}
		titleMasterFormBean.setProductDetailList(detailFormList);


		return titleMasterFormBean;
	}

	public static List<TitleMasterFormBean> mapDomainListToFormList(List<TitleMaster> titleMasterList) {
		List<TitleMasterFormBean> titleMasterFormBeanList = new ArrayList<>();
		for (TitleMaster titleMaster : titleMasterList) {
			titleMasterFormBeanList.add(mapDomainToForm(titleMaster));
		}
		return titleMasterFormBeanList;

	}

}
