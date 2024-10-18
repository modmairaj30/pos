package com.webapp.apis.masters.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.PaymentModeMasterFromBean;

@Service
public interface PaymentMasterService {

	String savePaymnetModeMaster(PaymentModeMasterFromBean paymentModeMasterFromBean);

	List<PaymentModeMasterFromBean> getAllPaymentmode();

}
