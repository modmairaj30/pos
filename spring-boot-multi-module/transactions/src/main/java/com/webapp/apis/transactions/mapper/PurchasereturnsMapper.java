package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.PurchaseInvoive;
import com.webapp.apis.transactions.domain.Purchasereturns;
import com.webapp.apis.transactions.domain.PurchasereturnsDetail;
import com.webapp.apis.transactions.model.PurchasereturnsDetForm;
import com.webapp.apis.transactions.model.PurchasereturnsFormbean;

/**
 * @author Mairaj
 */

public class PurchasereturnsMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(PurchasereturnsMapper.class);

	public static Purchasereturns mapFormToDomain(PurchasereturnsFormbean purchasereturnsFormbean) {
		Purchasereturns purchasereturns = new Purchasereturns();
		List<PurchasereturnsDetail> purchasereturnsDetailList = new ArrayList<>();

		   	 purchasereturns.setId(purchasereturnsFormbean.getId());
		   	 purchasereturns.setCreditAcc(purchasereturnsFormbean.getCreditAcc());
		     purchasereturns.setDebitAcc(purchasereturnsFormbean.getDebitAcc());
		     purchasereturns.setDocNo(purchasereturnsFormbean.getDocNo());
		     purchasereturns.setDocDt(purchasereturnsFormbean.getDocDt());
		     purchasereturns.setPartyId(purchasereturnsFormbean.getPartyId());
		     purchasereturns.setAddress(purchasereturnsFormbean.getAddress());
		     purchasereturns.setGrossAmt(purchasereturnsFormbean.getGrossAmt());
		     purchasereturns.setNetAmt(purchasereturnsFormbean.getNetAmt());
		     purchasereturns.setVchId(purchasereturnsFormbean.getVchId());
			 purchasereturns.setVat(purchasereturnsFormbean.getVat());
			 purchasereturns.setLocationId(purchasereturnsFormbean.getLocationId());
			 purchasereturns.setInvNo(purchasereturnsFormbean.getInvNo());
			 purchasereturns.setPurInvdt(purchasereturnsFormbean.getPurInvdt());
			 purchasereturns.setVATPc(purchasereturnsFormbean.getvATPc());
			 purchasereturns.setDiscountAmt(purchasereturnsFormbean.getDiscountAmt());
			 purchasereturns.setCreatedBy(purchasereturnsFormbean.getCreatedBy());
			 purchasereturns.setCreatedDate(purchasereturnsFormbean.getCreatedDate());
			 purchasereturns.setUpdatedBy(purchasereturnsFormbean.getUpdatedBy());
			 purchasereturns.setUpdatedDate(purchasereturnsFormbean.getUpdatedDate());

		List<PurchasereturnsDetForm> formdetailList = purchasereturnsFormbean.getPurchaseInvoiveDetList();
		for (PurchasereturnsDetForm detailFormbeam : formdetailList) {
			PurchasereturnsDetail detailDomain = new PurchasereturnsDetail();
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
					.setBaseId(purchasereturnsFormbean.getId() != null ? new Purchasereturns(purchasereturnsFormbean.getId()) : null);

			
			// BeanUtils.copyProperties(detailFormbeam, detailDomain);
			purchasereturnsDetailList.add(detailDomain);
		}
		purchasereturns.setPurchaseInvoiveDetList(purchasereturnsDetailList);
		return purchasereturns;
	}

	public static PurchasereturnsFormbean mapDomainToForm(Purchasereturns purchasereturns) {
		PurchasereturnsFormbean purchasereturnsFormbean = new PurchasereturnsFormbean();
		List<PurchasereturnsDetForm> purchasereturnsDetFormBeanList = new ArrayList<>();

		     purchasereturnsFormbean.setId(purchasereturns.getId());
		     purchasereturnsFormbean.setCreditAcc(purchasereturns.getCreditAcc());
		     purchasereturnsFormbean.setDebitAcc(purchasereturns.getDebitAcc());
		     purchasereturnsFormbean.setDocNo(purchasereturns.getDocNo());
		     purchasereturnsFormbean.setDocDt(purchasereturns.getDocDt());
		     purchasereturnsFormbean.setPartyId(purchasereturns.getPartyId());
		     purchasereturnsFormbean.setAddress(purchasereturns.getAddress());
		     purchasereturnsFormbean.setGrossAmt(purchasereturns.getGrossAmt());
		     purchasereturnsFormbean.setNetAmt(purchasereturns.getNetAmt());
		     purchasereturnsFormbean.setVchId(purchasereturns.getVchId());
			 purchasereturnsFormbean.setVat(purchasereturns.getVat());
			 purchasereturnsFormbean.setLocationId(purchasereturns.getLocationId());
			 purchasereturnsFormbean.setInvNo(purchasereturns.getInvNo());
			 purchasereturnsFormbean.setPurInvdt(purchasereturns.getPurInvdt());
			 purchasereturnsFormbean.setvATPc(purchasereturns.getVATPc());
			 purchasereturnsFormbean.setDiscountAmt(purchasereturns.getDiscountAmt());
			 purchasereturnsFormbean.setCreatedBy(purchasereturns.getCreatedBy());
			 purchasereturnsFormbean.setCreatedDate(purchasereturns.getCreatedDate());
			 purchasereturnsFormbean.setUpdatedBy(purchasereturns.getUpdatedBy());
			 purchasereturnsFormbean.setUpdatedDate(purchasereturns.getUpdatedDate());
		
		
		List<PurchasereturnsDetail> formdetailList = purchasereturns.getPurchaseInvoiveDetList();
		for (PurchasereturnsDetail detailDomain : formdetailList) {
			PurchasereturnsDetForm detailFormbean = new PurchasereturnsDetForm();
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

			   
			purchasereturnsDetFormBeanList.add(detailFormbean);
		}
		purchasereturnsFormbean.setPurchaseInvoiveDetList(purchasereturnsDetFormBeanList);
		return purchasereturnsFormbean;

	}

	public static List<PurchasereturnsFormbean> mapDomainListToFormList(List<Purchasereturns> PurchasereturnsList) {
		List<PurchasereturnsFormbean> PurchasereturnsFormBeanList = new ArrayList<>();
		for (Purchasereturns Purchasereturns : PurchasereturnsList) {
			PurchasereturnsFormBeanList.add(mapDomainToForm(Purchasereturns));
		}
		return PurchasereturnsFormBeanList;

	}

}
