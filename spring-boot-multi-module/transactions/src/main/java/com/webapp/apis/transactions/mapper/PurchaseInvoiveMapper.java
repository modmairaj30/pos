package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.PurchaseInvoive;
import com.webapp.apis.transactions.domain.PurchaseInvoiveDet;
import com.webapp.apis.transactions.model.PurchaseInvoiveDetFormBean;
import com.webapp.apis.transactions.model.PurchaseInvoiveFormBean;

/**
 * @author Mairaj
 */

public class PurchaseInvoiveMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(PurchaseInvoiveMapper.class);

	public static PurchaseInvoive mapFormToDomain(PurchaseInvoiveFormBean purchaseInvoiveFormBean) {
		PurchaseInvoive purchaseInvoive = new PurchaseInvoive();
		List<PurchaseInvoiveDet> PurchaseInvoiveDetailList = new ArrayList<>();

		purchaseInvoive.setId(purchaseInvoiveFormBean.getId());
		purchaseInvoive.setGrossAmt(purchaseInvoiveFormBean.getGrossAmt());
		purchaseInvoive.setDocDt(purchaseInvoiveFormBean.getDocDt());
		purchaseInvoive.setDocNo(purchaseInvoiveFormBean.getDocNo());
		purchaseInvoive.setPartyId(purchaseInvoiveFormBean.getPartyId());
		purchaseInvoive.setExciseduty(purchaseInvoiveFormBean.getExciseduty());
		purchaseInvoive.setAddress(purchaseInvoiveFormBean.getAddress());
		purchaseInvoive.setCity(purchaseInvoiveFormBean.getCity());
		purchaseInvoive.setPin(purchaseInvoiveFormBean.getPin());
		purchaseInvoive.setState(purchaseInvoiveFormBean.getState());
		purchaseInvoive.setPayterms(purchaseInvoiveFormBean.getPayterms());
		purchaseInvoive.setTransporter(purchaseInvoiveFormBean.getTransporter());
		purchaseInvoive.setSalestax(purchaseInvoiveFormBean.getSalestax());
		purchaseInvoive.setCst(purchaseInvoiveFormBean.getCst());
		purchaseInvoive.setVatamt(purchaseInvoiveFormBean.getVatamt());
		purchaseInvoive.setCstamt(purchaseInvoiveFormBean.getCstamt());
		purchaseInvoive.setExciseamt(purchaseInvoiveFormBean.getExciseamt());
		purchaseInvoive.setPotype(purchaseInvoiveFormBean.getPotype());
		purchaseInvoive.setDiscount1(purchaseInvoiveFormBean.getDiscount1());
		purchaseInvoive.setLocationId(purchaseInvoiveFormBean.getLocationId());
		purchaseInvoive.setOtherCharges(purchaseInvoiveFormBean.getOtherCharges());
		purchaseInvoive.setLocationCode(purchaseInvoiveFormBean.getLocationCode());
		purchaseInvoive.setStatusCode(purchaseInvoiveFormBean.getStatusCode());
		purchaseInvoive.setApprovalComments(purchaseInvoiveFormBean.getApprovalComments());
		purchaseInvoive.setAddress2(purchaseInvoiveFormBean.getAddress2());
		purchaseInvoive.setPhoneNo(purchaseInvoiveFormBean.getPhoneNo());
		purchaseInvoive.setFaxNo(purchaseInvoiveFormBean.getFaxNo());
		purchaseInvoive.setRefNo(purchaseInvoiveFormBean.getRefNo());
		purchaseInvoive.setPOearlierno(purchaseInvoiveFormBean.getpOearlierno());
		purchaseInvoive.setRefdt(purchaseInvoiveFormBean.getRefdt());
		purchaseInvoive.setPOearlierdt(purchaseInvoiveFormBean.getpOearlierdt());
		purchaseInvoive.setFreight(purchaseInvoiveFormBean.getFreight());
		purchaseInvoive.setFreightType(purchaseInvoiveFormBean.getFreightType());
		purchaseInvoive.setModeDespatch(purchaseInvoiveFormBean.getModeDespatch());
		purchaseInvoive.setVchId(purchaseInvoiveFormBean.getVchId());
		purchaseInvoive.setAmt(purchaseInvoiveFormBean.getAmt());
		purchaseInvoive.setCreatedBy(purchaseInvoiveFormBean.getCreatedBy());
		purchaseInvoive.setCreatedDate(purchaseInvoiveFormBean.getCreatedDate());
		purchaseInvoive.setUpdatedBy(purchaseInvoiveFormBean.getUpdatedBy());
		purchaseInvoive.setUpdatedDate(purchaseInvoiveFormBean.getUpdatedDate());

		List<PurchaseInvoiveDetFormBean> formdetailList = purchaseInvoiveFormBean.getPurchaseInvoiveDetList();
		for (PurchaseInvoiveDetFormBean detailFormbeam : formdetailList) {
			PurchaseInvoiveDet detailDomain = new PurchaseInvoiveDet();

			detailDomain.setId(detailFormbeam.getId());
			detailDomain.setProductId(detailFormbeam.getProductId());
			detailDomain.setQty(detailFormbeam.getQty());
			detailDomain.setRate(detailFormbeam.getRate());
			detailDomain.setAmount(detailFormbeam.getAmount());
			detailDomain.setBatchNo(detailFormbeam.getBatchNo());
			detailDomain.setMfgdt(detailFormbeam.getMfgdt());
			detailDomain.setExpDt(detailFormbeam.getExpDt());
			detailDomain.setMrp(detailFormbeam.getMrp());
			detailDomain.setLns(detailFormbeam.getLns());
			detailDomain.setRemark(detailFormbeam.getRemark());
			detailDomain.setDiscamt(detailFormbeam.getDiscamt());
			detailDomain.setProductCode(detailFormbeam.getProductCode());
			detailDomain.setProductName(detailFormbeam.getProductName());
			detailDomain.setVATpc(detailFormbeam.getvATpc());
			detailDomain.setEDpc(detailFormbeam.geteDpc());
			detailDomain.setSuppRate(detailFormbeam.getSuppRate());
			detailDomain.setVATamt(detailFormbeam.getvATamt());
			detailDomain.setCSTpc(detailFormbeam.getcSTAmt());
			detailDomain.setDiscPc(detailFormbeam.getDiscPc());
			detailDomain.setBasicValue(detailFormbeam.getBasicValue());
			detailDomain.setQtyPo(detailFormbeam.getQtyPo());
			detailDomain.setSplNote(detailFormbeam.getSplNote());
			detailDomain.setVchId(detailFormbeam.getVchId());
			detailDomain.setNetAmt(detailFormbeam.getNetAmt());
			detailDomain.setAuthor(detailFormbeam.getAuthor());
			detailDomain.setPublisher(detailFormbeam.getPublisher());
			detailDomain.setSupplier(detailFormbeam.getSupplier());
			detailDomain
					.setBaseId(detailFormbeam.getBaseId() != null ? new PurchaseInvoive(purchaseInvoiveFormBean.getId()) : null);

			// BeanUtils.copyProperties(detailFormbeam, detailDomain);
			PurchaseInvoiveDetailList.add(detailDomain);
		}
		purchaseInvoive.setPurchaseInvoiveDetList(PurchaseInvoiveDetailList);
		return purchaseInvoive;
	}

	public static PurchaseInvoiveFormBean mapDomainToForm(PurchaseInvoive purchaseInvoive) {
		PurchaseInvoiveFormBean purchaseInvoiveFormBean = new PurchaseInvoiveFormBean();
		List<PurchaseInvoiveDetFormBean> purchaseInvoiveDetFormBeanList = new ArrayList<>();

		purchaseInvoiveFormBean.setId(purchaseInvoive.getId());
		purchaseInvoiveFormBean.setGrossAmt(purchaseInvoive.getGrossAmt());
		purchaseInvoiveFormBean.setDocDt(purchaseInvoive.getDocDt());
		purchaseInvoiveFormBean.setDocNo(purchaseInvoive.getDocNo());
		purchaseInvoiveFormBean.setPartyId(purchaseInvoive.getPartyId());
		purchaseInvoiveFormBean.setExciseduty(purchaseInvoive.getExciseduty());
		purchaseInvoiveFormBean.setAddress(purchaseInvoive.getAddress());
		purchaseInvoiveFormBean.setCity(purchaseInvoive.getCity());
		purchaseInvoiveFormBean.setPin(purchaseInvoive.getPin());
		purchaseInvoiveFormBean.setState(purchaseInvoive.getState());
		purchaseInvoiveFormBean.setPayterms(purchaseInvoive.getPayterms());
		purchaseInvoiveFormBean.setTransporter(purchaseInvoive.getTransporter());
		purchaseInvoiveFormBean.setSalestax(purchaseInvoive.getSalestax());
		purchaseInvoiveFormBean.setCst(purchaseInvoive.getCst());
		purchaseInvoiveFormBean.setVatamt(purchaseInvoive.getVatamt());
		purchaseInvoiveFormBean.setCstamt(purchaseInvoive.getCstamt());
		purchaseInvoiveFormBean.setExciseamt(purchaseInvoive.getExciseamt());
		purchaseInvoiveFormBean.setPotype(purchaseInvoive.getPotype());
		purchaseInvoiveFormBean.setDiscount1(purchaseInvoive.getDiscount1());
		purchaseInvoiveFormBean.setLocationId(purchaseInvoive.getLocationId());
		purchaseInvoiveFormBean.setOtherCharges(purchaseInvoive.getOtherCharges());
		purchaseInvoiveFormBean.setLocationCode(purchaseInvoive.getLocationCode());
		purchaseInvoiveFormBean.setStatusCode(purchaseInvoive.getStatusCode());
		purchaseInvoiveFormBean.setApprovalComments(purchaseInvoive.getApprovalComments());
		purchaseInvoiveFormBean.setAddress2(purchaseInvoive.getAddress2());
		purchaseInvoiveFormBean.setPhoneNo(purchaseInvoive.getPhoneNo());
		purchaseInvoiveFormBean.setFaxNo(purchaseInvoive.getFaxNo());
		purchaseInvoiveFormBean.setRefNo(purchaseInvoive.getRefNo());
		//purchaseInvoiveFormBean.setPOearlierno(purchaseInvoive.getpOearlierno());
		purchaseInvoiveFormBean.setRefdt(purchaseInvoive.getRefdt());
		//purchaseInvoiveFormBean.setPOearlierdt(purchaseInvoive.getpOearlierdt());
		purchaseInvoiveFormBean.setFreight(purchaseInvoive.getFreight());
		purchaseInvoiveFormBean.setFreightType(purchaseInvoive.getFreightType());
		purchaseInvoiveFormBean.setModeDespatch(purchaseInvoive.getModeDespatch());
		purchaseInvoiveFormBean.setVchId(purchaseInvoive.getVchId());
		purchaseInvoiveFormBean.setAmt(purchaseInvoive.getAmt());
		purchaseInvoiveFormBean.setCreatedBy(purchaseInvoive.getCreatedBy());
		purchaseInvoiveFormBean.setCreatedDate(purchaseInvoive.getCreatedDate());
		purchaseInvoiveFormBean.setUpdatedBy(purchaseInvoive.getUpdatedBy());
		purchaseInvoiveFormBean.setUpdatedDate(purchaseInvoive.getUpdatedDate());
		
		List<PurchaseInvoiveDet> formdetailList = purchaseInvoive.getPurchaseInvoiveDetList();
		for (PurchaseInvoiveDet detailDomain : formdetailList) {
			PurchaseInvoiveDetFormBean detailFormbean = new PurchaseInvoiveDetFormBean();

			detailFormbean.setId(detailDomain.getId());
			detailFormbean.setBaseId(detailDomain.getId());
			detailFormbean.setProductId(detailDomain.getProductId());
			detailFormbean.setQty(detailDomain.getQty());
			detailFormbean.setRate(detailDomain.getRate());
			detailFormbean.setAmount(detailDomain.getAmount());
			detailFormbean.setBatchNo(detailDomain.getBatchNo());
			detailFormbean.setMfgdt(detailDomain.getMfgdt());
			detailFormbean.setExpDt(detailDomain.getExpDt());
			detailFormbean.setMrp(detailDomain.getMrp());
			detailFormbean.setLns(detailDomain.getLns());
			detailFormbean.setRemark(detailDomain.getRemark());
			detailFormbean.setDiscamt(detailDomain.getDiscamt());
			detailFormbean.setProductCode(detailDomain.getProductCode());
			detailFormbean.setProductName(detailDomain.getProductName());
			// detailFormbean.setVATpc(detailDomain.getvATpc());
			// detailFormbean.setEDpc(detailDomain.geteDpc());
			detailFormbean.setSuppRate(detailDomain.getSuppRate());
			// detailFormbean.setVATamt(detailDomain.getvATamt());
			// detailFormbean.setCSTpc(detailDomain.getcSTAmt());
			detailFormbean.setDiscPc(detailDomain.getDiscPc());
			detailFormbean.setBasicValue(detailDomain.getBasicValue());
			detailFormbean.setQtyPo(detailDomain.getQtyPo());
			detailFormbean.setSplNote(detailDomain.getSplNote());
			detailFormbean.setVchId(detailDomain.getVchId());
			detailFormbean.setNetAmt(detailDomain.getNetAmt());
			detailFormbean.setAuthor(detailDomain.getAuthor());
			detailFormbean.setPublisher(detailDomain.getPublisher());
			detailFormbean.setSupplier(detailDomain.getSupplier());
			purchaseInvoiveDetFormBeanList.add(detailFormbean);
		}
		purchaseInvoiveFormBean.setPurchaseInvoiveDetList(purchaseInvoiveDetFormBeanList);
		return purchaseInvoiveFormBean;

	}

	public static List<PurchaseInvoiveFormBean> mapDomainListToFormList(List<PurchaseInvoive> PurchaseInvoiveList) {
		List<PurchaseInvoiveFormBean> PurchaseInvoiveFormBeanList = new ArrayList<>();
		for (PurchaseInvoive PurchaseInvoive : PurchaseInvoiveList) {
			PurchaseInvoiveFormBeanList.add(mapDomainToForm(PurchaseInvoive));
		}
		return PurchaseInvoiveFormBeanList;

	}

}
