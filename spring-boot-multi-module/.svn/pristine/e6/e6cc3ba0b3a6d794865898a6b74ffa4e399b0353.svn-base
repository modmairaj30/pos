package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.Payments;
import com.webapp.apis.transactions.model.PaymentsFormBean;



/**
 * @author Mairaj
 */

public class PaymentsMapper {

	private static final Logger LOGGER = LoggerFactory.getLogger(PaymentsMapper.class);

	public static Payments mapFormToDomain(PaymentsFormBean paymentsFormBean) {
		Payments Payments = new Payments();
		Payments.setId(paymentsFormBean.getId());
		Payments.setDocDt(paymentsFormBean.getDocDt());
		Payments.setDocNo(paymentsFormBean.getDocNo());
		Payments.setPartyId(paymentsFormBean.getPartyId());
		Payments.setLocationId(paymentsFormBean.getLocationId());
		Payments.setParticulars(paymentsFormBean.getParticulars());
	
		Payments.setTotalAmt(paymentsFormBean.getTotalAmt());
		Payments.setCreatedBy(paymentsFormBean.getCreatedBy());
		Payments.setCreatedDate(paymentsFormBean.getCreatedDate());
		Payments.setUpdatedBy(paymentsFormBean.getUpdatedBy());
		Payments.setUpdatedDate(paymentsFormBean.getUpdatedDate());
		return Payments;
		
	}
		



	public static PaymentsFormBean mapDomainToForm(Payments payments) {
		PaymentsFormBean paymentsFormBean = new PaymentsFormBean();
		
		paymentsFormBean.setId(payments.getId());
		paymentsFormBean.setDocDt(payments.getDocDt());
		paymentsFormBean.setDocNo(payments.getDocNo());
		paymentsFormBean.setPartyId(payments.getPartyId());
		paymentsFormBean.setLocationId(payments.getLocationId());
		paymentsFormBean.setLocationId(payments.getLocationId());
		paymentsFormBean.setParticulars(payments.getParticulars());
	
		paymentsFormBean.setTotalAmt(payments.getTotalAmt());
		paymentsFormBean.setCreatedBy(payments.getCreatedBy());
		paymentsFormBean.setCreatedDate(payments.getCreatedDate());
		paymentsFormBean.setUpdatedBy(payments.getUpdatedBy());
		paymentsFormBean.setUpdatedDate(payments.getUpdatedDate());
		return paymentsFormBean;
	}


	public static List<PaymentsFormBean> mapDomainListToFormList(
			List<Payments> PaymentsList) {
		List<PaymentsFormBean> PaymentsFormBeanList = new ArrayList<>();
		for (Payments payments : PaymentsList) {
			PaymentsFormBeanList.add(mapDomainToForm(payments));
		}
		return PaymentsFormBeanList;

	}

}
