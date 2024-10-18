package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import com.webapp.apis.transactions.domain.Receipts;
import com.webapp.apis.transactions.model.ReceiptsFormBean;



/**
 * @author Mairaj
 */

public class ReceiptsMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(ReceiptsMapper.class);

	public static Receipts mapFormToDomain(ReceiptsFormBean receiptsFormBean) {
		Receipts Receipts = new Receipts();
		Receipts.setId(receiptsFormBean.getId());
		Receipts.setDocDt(receiptsFormBean.getDocDt());
		Receipts.setDocNo(receiptsFormBean.getDocNo());
		Receipts.setPartyId(receiptsFormBean.getPartyId());
		Receipts.setLocationId(receiptsFormBean.getLocationId());
		Receipts.setParticulars(receiptsFormBean.getParticulars());
	
		Receipts.setTotalAmt(receiptsFormBean.getTotalAmt());
		Receipts.setCreatedBy(receiptsFormBean.getCreatedBy());
		Receipts.setCreatedDate(receiptsFormBean.getCreatedDate());
		Receipts.setUpdatedBy(receiptsFormBean.getUpdatedBy());
		Receipts.setUpdatedDate(receiptsFormBean.getUpdatedDate());
		return Receipts;
		
	}
		



	public static ReceiptsFormBean mapDomainToForm(Receipts receipts) {
		ReceiptsFormBean receiptsFormBean = new ReceiptsFormBean();
		
		receiptsFormBean.setId(receipts.getId());
		receiptsFormBean.setDocDt(receipts.getDocDt());
		receiptsFormBean.setDocNo(receipts.getDocNo());
		receiptsFormBean.setPartyId(receipts.getPartyId());
		receiptsFormBean.setLocationId(receipts.getLocationId());
		receiptsFormBean.setLocationId(receipts.getLocationId());
		receiptsFormBean.setParticulars(receipts.getParticulars());
	
		receiptsFormBean.setTotalAmt(receipts.getTotalAmt());
		receiptsFormBean.setCreatedBy(receipts.getCreatedBy());
		receiptsFormBean.setCreatedDate(receipts.getCreatedDate());
		receiptsFormBean.setUpdatedBy(receipts.getUpdatedBy());
		receiptsFormBean.setUpdatedDate(receipts.getUpdatedDate());
		return receiptsFormBean;
	}


	public static List<ReceiptsFormBean> mapDomainListToFormList(
			List<Receipts>ReceiptsList) {
		List<ReceiptsFormBean> receiptsListFormBeanList = new ArrayList<>();
		for (Receipts receipts : ReceiptsList) {
			receiptsListFormBeanList.add(mapDomainToForm(receipts));
		}
		return receiptsListFormBeanList;

	}

}
