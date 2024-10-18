package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.Invoice;
import com.webapp.apis.transactions.domain.Salesreturns;
import com.webapp.apis.transactions.domain.SalesreturnsDetail;
import com.webapp.apis.transactions.model.SalesreturnsDetailFormBean;
import com.webapp.apis.transactions.model.SalesreturnsFormBean;

/**
 * @author Mairaj
 */

public class SalesreturnsMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(SalesreturnsMapper.class);

	public static Salesreturns mapFormToDomain(SalesreturnsFormBean salesreturnsFormBean) {
		Salesreturns salesreturns = new Salesreturns();
		List<SalesreturnsDetail> salesreturnsDetailList = new ArrayList<>();
		salesreturns.setId(salesreturnsFormBean.getId());
		salesreturns.setGrossAmt(salesreturnsFormBean.getGrossAmt());
		salesreturns.setNetAmt(salesreturnsFormBean.getNetAmt());
		salesreturns.setCreditAcc(salesreturnsFormBean.getCreditAcc());
		salesreturns.setDebitAcc(salesreturnsFormBean.getDebitAcc());
		salesreturns.setDocNo(salesreturnsFormBean.getDocNo());
		salesreturns.setDocDt(salesreturnsFormBean.getDocDt());
		salesreturns.setPartyId(salesreturnsFormBean.getPartyId());
		salesreturns.setAddress(salesreturnsFormBean.getAddress());
		salesreturns.setVchId(salesreturnsFormBean.getVchId());
		salesreturns.setInvNo(salesreturnsFormBean.getInvNo());
		salesreturns.setInvDt(salesreturnsFormBean.getInvDt());
		salesreturns.setVat(salesreturnsFormBean.getVat());
		salesreturns.setDiscount(salesreturnsFormBean.getDiscount());
		salesreturns.setLocationId(salesreturnsFormBean.getLocationId());
		salesreturns.setCash(salesreturnsFormBean.getCash());
		salesreturns.setCheque(salesreturnsFormBean.getCheque());
		salesreturns.setChqNo(salesreturnsFormBean.getChqNo());
		salesreturns.setChqDt(salesreturnsFormBean.getChqDt());
		salesreturns.setComment(salesreturnsFormBean.getComment());
		salesreturns.setRefNo(salesreturnsFormBean.getRefNo());
		salesreturns.setRefDate(salesreturnsFormBean.getRefDate());
		salesreturns.setDiscAmt(salesreturnsFormBean.getDiscAmt());
		salesreturns.setCreatedBy(salesreturnsFormBean.getCreatedBy());
		salesreturns.setCreatedDate(salesreturnsFormBean.getCreatedDate());
		salesreturns.setUpdatedBy(salesreturnsFormBean.getUpdatedBy());
		salesreturns.setUpdatedDate(salesreturnsFormBean.getUpdatedDate());
		
		
		List<SalesreturnsDetailFormBean> formdetailList = salesreturnsFormBean
				.getInvoiceDetList();
		for (SalesreturnsDetailFormBean detailFormbeam : formdetailList) {
			SalesreturnsDetail detailDomain = new SalesreturnsDetail();
			detailDomain.setId(detailFormbeam.getId());
			detailDomain.setQty(detailFormbeam.getQty());
			detailDomain.setRate(detailFormbeam.getRate());
			detailDomain.setAmount(detailFormbeam.getAmount());
			detailDomain.setBatchNo(detailFormbeam.getBatchNo());
			detailDomain.setExpDt(detailFormbeam.getExpDt());
			detailDomain.setFldMfgdt(detailFormbeam.getFldMfgdt());
			detailDomain.setPack(detailFormbeam.getPack());
			detailDomain.setProductId(detailFormbeam.getProductId());
			detailDomain.setBatchTracker(detailFormbeam.getBatchTracker());
			detailDomain.setFldQty2(detailFormbeam.getFldQty2());
			detailDomain.setFldLength(detailFormbeam.getFldLength());
			detailDomain.setPurity(detailFormbeam.getPurity());
			detailDomain.setFldQty1(detailFormbeam.getFldQty1());
			detailDomain.setUom(detailFormbeam.getUom());
			detailDomain.setPcsNet(detailFormbeam.getPcsNet());
			detailDomain.setTradingBOM(detailFormbeam.getTradingBOM());
			detailDomain.setFldQty3(detailFormbeam.getFldQty3());
			detailDomain.setDiscAmt(detailFormbeam.getDiscAmt());
			detailDomain.setNetAmt(detailFormbeam.getNetAmt());
			detailDomain.setVchId(detailFormbeam.getVchId());
			detailDomain.setProductName(detailFormbeam.getProductName());
			detailDomain.setProductGroup(detailFormbeam.getProductGroup());
			detailDomain.setProductCode(detailFormbeam.getProductCode());
			detailDomain.setAuthor(detailFormbeam.getAuthor());
			detailDomain.setIsbnCode(detailFormbeam.getIsbnCode());
			detailDomain.setDiscPc(detailFormbeam.getDiscPc());
			detailDomain.setPublisher(detailFormbeam.getPublisher());
			detailDomain.setSupplier(detailFormbeam.getSupplier());
			detailDomain.setFldSrate(detailFormbeam.getFldSrate());
			detailDomain.setFldDisc(detailFormbeam.getFldDisc());
			/*detailDomain.setChqNo(detailFormbeam.getChqNo());
			detailDomain.setChqDate(detailFormbeam.getChqDate());
			detailDomain.setChqAmt(detailFormbeam.getChqAmt());
			detailDomain.setChqIssueBank(detailFormbeam.getChqIssueBank());*/
			
			detailDomain
			.setBaseId(detailFormbeam.getBaseId() != null ? new Invoice(detailFormbeam.getBaseId()) : null);

			// BeanUtils.copyProperties(detailFormbeam, detailDomain);

						salesreturnsDetailList.add(detailDomain);
		}
		salesreturns.setInvoiceDetList(salesreturnsDetailList);
		return salesreturns;
	}

	public static SalesreturnsFormBean mapDomainToForm(Salesreturns salesreturns) {
		SalesreturnsFormBean salesreturnsFormBean = new SalesreturnsFormBean();
		List<SalesreturnsDetailFormBean> detailFormList = new ArrayList<>();
		salesreturnsFormBean.setId(salesreturns.getId());
		salesreturnsFormBean.setGrossAmt(salesreturns.getGrossAmt());
		salesreturnsFormBean.setNetAmt(salesreturns.getNetAmt());
		salesreturnsFormBean.setCreditAcc(salesreturns.getCreditAcc());
		salesreturnsFormBean.setDebitAcc(salesreturns.getDebitAcc());
		salesreturnsFormBean.setDocNo(salesreturns.getDocNo());
		salesreturnsFormBean.setDocDt(salesreturns.getDocDt());
		salesreturnsFormBean.setPartyId(salesreturns.getPartyId());
		salesreturnsFormBean.setAddress(salesreturns.getAddress());
		salesreturnsFormBean.setVchId(salesreturns.getVchId());
		salesreturnsFormBean.setInvNo(salesreturns.getInvNo());
		salesreturnsFormBean.setInvDt(salesreturns.getInvDt());
		salesreturnsFormBean.setVat(salesreturns.getVat());
		salesreturnsFormBean.setDiscount(salesreturns.getDiscount());
		salesreturnsFormBean.setLocationId(salesreturns.getLocationId());
		salesreturnsFormBean.setCash(salesreturns.getCash());
		salesreturnsFormBean.setCheque(salesreturns.getCheque());
		salesreturnsFormBean.setChqNo(salesreturns.getChqNo());
		salesreturnsFormBean.setChqDt(salesreturns.getChqDt());
		salesreturnsFormBean.setComment(salesreturns.getComment());
		salesreturnsFormBean.setRefNo(salesreturns.getRefNo());
		salesreturnsFormBean.setRefDate(salesreturns.getRefDate());
		salesreturnsFormBean.setDiscAmt(salesreturns.getDiscAmt());
		salesreturnsFormBean.setCreatedBy(salesreturns.getCreatedBy());
		salesreturnsFormBean.setCreatedDate(salesreturns.getCreatedDate());
		salesreturnsFormBean.setUpdatedBy(salesreturns.getUpdatedBy());
		salesreturnsFormBean.setUpdatedDate(salesreturns.getUpdatedDate());

		List<SalesreturnsDetail> formdetailList = salesreturns.getInvoiceDetList();
		for (SalesreturnsDetail detailDomain : formdetailList) {
			SalesreturnsDetailFormBean detailFormbean = new SalesreturnsDetailFormBean();
			detailFormbean.setId(detailDomain.getId());
			detailFormbean.setBaseId(detailDomain.getBaseId().getId());
			detailFormbean.setQty(detailDomain.getQty());
			detailFormbean.setRate(detailDomain.getRate());
			detailFormbean.setAmount(detailDomain.getAmount());
			detailFormbean.setBatchNo(detailDomain.getBatchNo());
			detailFormbean.setExpDt(detailDomain.getExpDt());
			detailFormbean.setFldMfgdt(detailDomain.getFldMfgdt());
			detailFormbean.setPack(detailDomain.getPack());
			detailFormbean.setProductId(detailDomain.getProductId());
			detailFormbean.setBatchTracker(detailDomain.getBatchTracker());
			detailFormbean.setFldQty2(detailDomain.getFldQty2());
			detailFormbean.setFldLength(detailDomain.getFldLength());
			detailFormbean.setPurity(detailDomain.getPurity());
			detailFormbean.setFldQty1(detailDomain.getFldQty1());
			detailFormbean.setUom(detailDomain.getUom());
			detailFormbean.setPcsNet(detailDomain.getPcsNet());
			detailFormbean.setTradingBOM(detailDomain.getTradingBOM());
			detailFormbean.setFldQty3(detailDomain.getFldQty3());
			detailFormbean.setDiscAmt(detailDomain.getDiscAmt());
			detailFormbean.setNetAmt(detailDomain.getNetAmt());
			detailFormbean.setVchId(detailDomain.getVchId());
			detailFormbean.setProductName(detailDomain.getProductName());
			detailFormbean.setProductGroup(detailDomain.getProductGroup());
			detailFormbean.setProductCode(detailDomain.getProductCode());
			detailFormbean.setAuthor(detailDomain.getAuthor());
			detailFormbean.setIsbnCode(detailDomain.getIsbnCode());
			detailFormbean.setDiscPc(detailDomain.getDiscPc());
			detailFormbean.setPublisher(detailDomain.getPublisher());
			detailFormbean.setSupplier(detailDomain.getSupplier());
			detailFormbean.setFldSrate(detailDomain.getFldSrate());
			detailFormbean.setFldDisc(detailDomain.getFldDisc());
			/*detailFormbean.setChqNo(detailDomain.getChqNo());
			detailFormbean.setChqDate(detailDomain.getChqDate());
			detailFormbean.setChqAmt(detailDomain.getChqAmt());
			detailFormbean.setChqIssueBank(detailDomain.getChqIssueBank());*/
			
			detailFormList.add(detailFormbean);
		}
		salesreturnsFormBean.setInvoiceDetList(detailFormList);
		return salesreturnsFormBean;
	}

	public static List<SalesreturnsFormBean> mapDomainListToFormList(
			List<Salesreturns> salesreturnsList) {
		List<SalesreturnsFormBean> salesreturnsFormBeanList = new ArrayList<>();
		for (Salesreturns salesreturns : salesreturnsList) {
			salesreturnsFormBeanList.add(mapDomainToForm(salesreturns));
		}
		return salesreturnsFormBeanList;

	}

}
