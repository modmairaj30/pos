package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.Invoice;
import com.webapp.apis.transactions.domain.InvoiceDet;
import com.webapp.apis.transactions.model.InvoiceDetFormBean;
import com.webapp.apis.transactions.model.InvoiceFormBean;






public class InvoiceMapper {
	private static final Logger LOGGER = LoggerFactory.getLogger(InvoiceMapper.class);

	
	public static Invoice mapFormToDomain(InvoiceFormBean invoiceFormBean) {
		Invoice invoice = new Invoice();
		List<InvoiceDet> InvoiceDetailList = new ArrayList<>();

		invoice.setId(invoiceFormBean.getId());
		invoice.setDocDt(invoiceFormBean.getDocDt());
		invoice.setDocNo(invoiceFormBean.getDocNo());
		invoice.setLRno(invoiceFormBean.getlRno());
		invoice.setLRdate(invoiceFormBean.getlRdate());
		invoice.setGrossAmt(invoiceFormBean.getGrossAmt());
		invoice.setNetAmt(invoiceFormBean.getNetAmt());
		invoice.setPartyId(invoiceFormBean.getPartyId());
		invoice.setAddress(invoiceFormBean.getAddress());
		invoice.setAddress1(invoiceFormBean.getAddress1());
		invoice.setTransportref(invoiceFormBean.getTransportref());
		invoice.setOrdno(invoiceFormBean.getOrdno());
		invoice.setOrddt(invoiceFormBean.getOrddt());
		invoice.setVat(invoiceFormBean.getVat());
		invoice.setVatamt(invoiceFormBean.getVatamt());
		invoice.setCstamt(invoiceFormBean.getCstamt());
		invoice.setTinno(invoiceFormBean.getTinno());
		invoice.setCstno(invoiceFormBean.getCstno());
		invoice.setDlno(invoiceFormBean.getDlno());
		invoice.setDlno21(invoiceFormBean.getDlno21());
		invoice.setDiscamt(invoiceFormBean.getDiscamt());
		invoice.setLocationId(invoiceFormBean.getLocationId());
		invoice.setLocationCode(invoiceFormBean.getLocationCode());
		invoice.setPaymentType(invoiceFormBean.getPaymentType());
		invoice.setCard(invoiceFormBean.getCard());
		invoice.setCardNo(invoiceFormBean.getCardNo());
		invoice.setExpDate(invoiceFormBean.getExpDate());
		invoice.setBranch(invoiceFormBean.getBranch());
		invoice.setMemberNo(invoiceFormBean.getMemberNo());
		invoice.setValidDate(invoiceFormBean.getValidDate());
		invoice.setYears(invoiceFormBean.getYears());
		invoice.setExpiryDate(invoiceFormBean.getExpDate());
		invoice.setDis(invoiceFormBean.getDis());
		invoice.setDiscPay(invoiceFormBean.getDiscPay());
		invoice.setDiscamtPay(invoiceFormBean.getDiscamtPay());
		invoice.setNetamtPay(invoiceFormBean.getNetamtPay());
		invoice.setCreditCharges(invoiceFormBean.getCreditCharges());
		invoice.setCreditDummy(invoiceFormBean.getCreditDummy());
		invoice.setDcno(invoiceFormBean.getDcno());
		invoice.setDcdate(invoiceFormBean.getDcdate());
		invoice.setChqNo(invoiceFormBean.getChqNo());
		invoice.setChqDate(invoiceFormBean.getChqDate());
		invoice.setChqAmt(invoiceFormBean.getChqAmt());
		invoice.setChqIssueBank(invoiceFormBean.getChqIssueBank());
		
		
		List<InvoiceDetFormBean> formdetailList = invoiceFormBean.getInvoiceDetList();
		for (InvoiceDetFormBean detailFormbeam : formdetailList) {
			InvoiceDet detailDomain = new InvoiceDet();

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
			InvoiceDetailList.add(detailDomain);
		}
		invoice.setInvoiceDetList(InvoiceDetailList);
		return invoice;
					
		}
	
		public static InvoiceFormBean mapDomainToForm(Invoice invoice) {
			InvoiceFormBean invoiceFormBean = new InvoiceFormBean();
			List<InvoiceDetFormBean> invoiceDetFormBeanList = new ArrayList<>();
	
			invoiceFormBean.setId(invoice.getId());
			invoiceFormBean.setDocDt(invoice.getDocDt());
			invoiceFormBean.setDocNo(invoice.getDocNo());
			invoiceFormBean.setlRno(invoice.getLRno());
			invoiceFormBean.setlRdate(invoice.getLRdate());
			invoiceFormBean.setGrossAmt(invoice.getGrossAmt());
			invoiceFormBean.setNetAmt(invoice.getNetAmt());
			invoiceFormBean.setPartyId(invoice.getPartyId());
			invoiceFormBean.setAddress(invoice.getAddress());
			invoiceFormBean.setAddress1(invoice.getAddress1());
			invoiceFormBean.setTransportref(invoice.getTransportref());
			invoiceFormBean.setOrdno(invoice.getOrdno());
			invoiceFormBean.setOrddt(invoice.getOrddt());
			invoiceFormBean.setVat(invoice.getVat());
			invoiceFormBean.setVatamt(invoice.getVatamt());
			invoiceFormBean.setCstamt(invoice.getCstamt());
			invoiceFormBean.setTinno(invoice.getTinno());
			invoiceFormBean.setCstno(invoice.getCstno());
			invoiceFormBean.setDlno(invoice.getDlno());
			invoiceFormBean.setDlno21(invoice.getDlno21());
			invoiceFormBean.setDiscamt(invoice.getDiscamt());
			invoiceFormBean.setLocationId(invoice.getLocationId());
			invoiceFormBean.setLocationCode(invoice.getLocationCode());
			invoiceFormBean.setPaymentType(invoice.getPaymentType());
			invoiceFormBean.setCard(invoice.getCard());
			invoiceFormBean.setCardNo(invoice.getCardNo());
			invoiceFormBean.setExpDate(invoice.getExpDate());
			invoiceFormBean.setBranch(invoice.getBranch());
			invoiceFormBean.setMemberNo(invoice.getMemberNo());
			invoiceFormBean.setValidDate(invoice.getValidDate());
			invoiceFormBean.setYears(invoice.getYears());
			invoiceFormBean.setExpiryDate(invoice.getExpiryDate());
			invoiceFormBean.setDis(invoice.getDis());
			invoiceFormBean.setDiscPay(invoice.getDiscPay());
			invoiceFormBean.setDiscamtPay(invoice.getDiscamtPay());
			invoiceFormBean.setNetamtPay(invoice.getNetamtPay());
			invoiceFormBean.setCreditCharges(invoice.getCreditCharges());
			invoiceFormBean.setCreditDummy(invoice.getCreditDummy());
			invoiceFormBean.setDcno(invoice.getDcno());
			invoiceFormBean.setDcdate(invoice.getDcdate());
			invoiceFormBean.setChqNo(invoice.getChqNo());
			invoiceFormBean.setChqDate(invoice.getChqDate());
			invoiceFormBean.setChqAmt(invoice.getChqAmt());
			invoiceFormBean.setChqIssueBank(invoice.getChqIssueBank());

			
			List<InvoiceDet> formdetailList = invoice.getInvoiceDetList();
			for (InvoiceDet detailDomain : formdetailList) {
				InvoiceDetFormBean detailFormbean = new InvoiceDetFormBean();

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
				
				invoiceDetFormBeanList.add(detailFormbean);
				
			}
			
			invoiceFormBean.setInvoiceDetList(invoiceDetFormBeanList);
			return invoiceFormBean;
			
	}
		
		public static List<InvoiceFormBean> mapDomainListToFormList(List<Invoice> InvoiceList) {
			List<InvoiceFormBean> InvoiceFormBeanList = new ArrayList<>();
			for (Invoice Invoice : InvoiceList) {
				InvoiceFormBeanList.add(mapDomainToForm(Invoice));
			}
			return InvoiceFormBeanList;

		}
}


