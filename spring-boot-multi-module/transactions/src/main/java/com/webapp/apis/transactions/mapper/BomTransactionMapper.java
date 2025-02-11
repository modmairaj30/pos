package com.webapp.apis.transactions.mapper;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.BomTransactionDetail;
import com.webapp.apis.transactions.domain.BomTransaction;
import com.webapp.apis.transactions.model.BomTransactionDetailFormBean;
import com.webapp.apis.transactions.model.BomTransactionFormBean;

/**
 * @author Mairaj
 */

public class BomTransactionMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(BomTransactionMapper.class);

	public static BomTransaction mapFormToDomain(BomTransactionFormBean bomTransactionFormBean) {
		BomTransaction bomTransaction = new BomTransaction();

		bomTransaction.setId(bomTransactionFormBean.getId());
		bomTransaction.setBillDt(bomTransactionFormBean.getBillDt());
		bomTransaction.setBillNo(bomTransactionFormBean.getBillNo());
		bomTransaction.setTotQty(bomTransactionFormBean.getTotQty());
		bomTransaction.setTotAmt(bomTransactionFormBean.getTotAmt());
		bomTransaction.setTotDiscount(bomTransactionFormBean.getTotDiscount());

		bomTransaction.setUpdatedBy(bomTransactionFormBean.getUpdatedBy());
		bomTransaction.setUpdatedDate(bomTransactionFormBean.getUpdatedDate());
		bomTransaction.setCreatedBy(bomTransactionFormBean.getCreatedBy());
		bomTransaction.setCreatedDate(bomTransactionFormBean.getCreatedDate());

		List<BomTransactionDetail> detailList = new ArrayList<>();
		List<BomTransactionDetailFormBean> formdetailList = bomTransactionFormBean.getBomDetailList();
		for (BomTransactionDetailFormBean detailForm : formdetailList) {
			BomTransactionDetail detail = new BomTransactionDetail();
			detail.setId(detailForm.getId());
			detail.setBaseId(detailForm.getBaseId() != null ? new BomTransaction(detailForm.getBaseId()) : null);
			detail.setRate(detailForm.getRate());
			detail.setQty(detailForm.getQty());
			detail.setAmount(detailForm.getAmount());
			detail.setUom(detailForm.getUom());
			detail.setItemId(detailForm.getItemId());
			detail.setItemName(detailForm.getItemName());

			detailList.add(detail);
		}
		bomTransaction.setBomDetailList(detailList);

		return bomTransaction;
	}

	public static BomTransactionFormBean mapDomainToForm(BomTransaction bomTransaction) {
		BomTransactionFormBean bomTransactionFormBean = new BomTransactionFormBean();

		bomTransactionFormBean.setId(bomTransaction.getId());
		bomTransactionFormBean.setBillDt(bomTransaction.getBillDt());
		bomTransactionFormBean.setBillNo(bomTransaction.getBillNo());
		bomTransactionFormBean.setTotQty(bomTransaction.getTotQty());
		bomTransactionFormBean.setTotAmt(bomTransaction.getTotAmt());
		bomTransactionFormBean.setTotDiscount(bomTransaction.getTotDiscount());
		bomTransactionFormBean.setCashRecieved(new BigDecimal("0.00"));
		bomTransactionFormBean.setCashReturn(new BigDecimal("0.00"));

		bomTransactionFormBean.setUpdatedBy(bomTransaction.getUpdatedBy());
		bomTransactionFormBean.setUpdatedDate(bomTransaction.getUpdatedDate());
		bomTransactionFormBean.setCreatedBy(bomTransaction.getCreatedBy());
		bomTransactionFormBean.setCreatedDate(bomTransaction.getCreatedDate());
		List<BomTransactionDetailFormBean> detailFormList = new ArrayList<>();
		List<BomTransactionDetail> formdetailList = bomTransaction.getBomDetailList();
		for (BomTransactionDetail detailDomain : formdetailList) {
			BomTransactionDetailFormBean detailFormbeam = new BomTransactionDetailFormBean();
			detailFormbeam.setId(detailDomain.getId());
			detailFormbeam.setBaseId(bomTransaction.getId());
			detailFormbeam.setRate(detailDomain.getRate());
			detailFormbeam.setQty(detailDomain.getQty());
			detailFormbeam.setAmount(detailDomain.getAmount());

			detailFormbeam.setItemId(detailDomain.getItemId());
			detailFormbeam.setItemName(detailDomain.getItemName());
			detailFormbeam.setUom((detailDomain.getUom()!= null ?detailDomain.getUom():""));
			detailFormList.add(detailFormbeam);
		}
		bomTransactionFormBean.setBomDetailList(detailFormList);

		return bomTransactionFormBean;
	}

	public static List<BomTransactionFormBean> mapDomainListToFormList(List<BomTransaction> bomTransactionList) {
		List<BomTransactionFormBean> bomTransactionFormBeanList = new ArrayList<>();
		for (BomTransaction bomTransaction : bomTransactionList) {
			bomTransactionFormBeanList.add(mapDomainToForm(bomTransaction));
		}
		return bomTransactionFormBeanList;

	}

}
