package com.webapp.apis.masters.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.masters.domain.BomDetail;
import com.webapp.apis.masters.domain.BomMaster;
import com.webapp.apis.masters.model.BomDetailFormBean;
import com.webapp.apis.masters.model.BomMasterFormBean;

/**
 * @author Mairaj
 */

public class BomMasterMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(BomMasterMapper.class);

	public static BomMaster mapFormToDomain(BomMasterFormBean bomMasterFormBean) {
		BomMaster bomMaster = new BomMaster();

		bomMaster.setId(bomMasterFormBean.getId());
		bomMaster.setDocDt(bomMasterFormBean.getDocDt());
		bomMaster.setDocNo(bomMasterFormBean.getDocNo());
		bomMaster.setDescription(bomMasterFormBean.getDescription());
		bomMaster.setRate(bomMasterFormBean.getRate());
		bomMaster.setProductId(bomMasterFormBean.getProductId());
		bomMaster.setProdName(bomMasterFormBean.getProdName().toUpperCase());
		bomMaster.setProdCode(bomMasterFormBean.getProdCode().toUpperCase());
		bomMaster.setUom(bomMasterFormBean.getUom());

		bomMaster.setUpdatedBy(bomMasterFormBean.getUpdatedBy());
		bomMaster.setUpdatedDate(bomMasterFormBean.getUpdatedDate());
		bomMaster.setCreatedBy(bomMasterFormBean.getCreatedBy());
		bomMaster.setCreatedDate(bomMasterFormBean.getCreatedDate());
		
		List<BomDetail> detailList = new ArrayList<>();
		List<BomDetailFormBean> formdetailList = bomMasterFormBean.getBomDetailList();
		for (BomDetailFormBean detailForm : formdetailList) {
			BomDetail detail = new BomDetail();
			detail.setId(detailForm.getId());
			detail.setBaseId(detailForm.getBaseId() != null ? new BomMaster(detailForm.getBaseId()) : null);
			detail.setRate(detailForm.getRate());
			detail.setQty(detailForm.getQty());
			detail.setAmount(detailForm.getAmount());
			detail.setUom(detailForm.getUom());
			
			detail.setProductId(detailForm.getProductId());
			detail.setProductCode(detailForm.getProductCode());
			detail.setProductName(detailForm.getProductName());
			
			detailList.add(detail);
		}
		bomMaster.setBomDetailList(detailList);

		return bomMaster;
	}

	public static BomMasterFormBean mapDomainToForm(BomMaster bomMaster) {
		BomMasterFormBean bomMasterFormBean = new BomMasterFormBean();

		bomMasterFormBean.setId(bomMaster.getId());
		bomMasterFormBean.setDocDt(bomMaster.getDocDt());
		bomMasterFormBean.setDocNo(bomMaster.getDocNo());
		bomMasterFormBean.setDescription(bomMaster.getDescription());
		bomMasterFormBean.setRate(bomMaster.getRate());
		bomMasterFormBean.setProdName(bomMaster.getProdName());
		bomMasterFormBean.setUom(bomMaster.getUom());
		bomMasterFormBean.setProductId(bomMaster.getProductId());

		bomMasterFormBean.setUpdatedBy(bomMaster.getUpdatedBy());
		bomMasterFormBean.setUpdatedDate(bomMaster.getUpdatedDate());
		bomMasterFormBean.setCreatedBy(bomMaster.getCreatedBy());
		bomMasterFormBean.setCreatedDate(bomMaster.getCreatedDate());
		List<BomDetailFormBean> detailFormList = new ArrayList<>();
		List<BomDetail> formdetailList = bomMaster.getBomDetailList();
		for (BomDetail detailDomain : formdetailList) {
			BomDetailFormBean detailFormbeam = new BomDetailFormBean();
			detailFormbeam.setId(detailDomain.getId());
			detailFormbeam.setBaseId(detailDomain.getBaseId().getId());
			detailFormbeam.setRate(detailDomain.getRate());
			detailFormbeam.setQty(detailDomain.getQty());
			detailFormbeam.setAmount(detailDomain.getAmount());
			
			detailFormbeam.setProductId(detailDomain.getProductId());
			detailFormbeam.setProductCode(detailDomain.getProductCode());
			detailFormbeam.setProductName(detailDomain.getProductName());
			detailFormbeam.setUom(detailDomain.getUom());
			detailFormList.add(detailFormbeam);
		}
		bomMasterFormBean.setBomDetailList(detailFormList);


		return bomMasterFormBean;
	}

	public static List<BomMasterFormBean> mapDomainListToFormList(List<BomMaster> bomMasterList) {
		List<BomMasterFormBean> bomMasterFormBeanList = new ArrayList<>();
		for (BomMaster bomMaster : bomMasterList) {
			bomMasterFormBeanList.add(mapDomainToForm(bomMaster));
		}
		return bomMasterFormBeanList;

	}

}
