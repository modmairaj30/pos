package com.webapp.apis.masters.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Date;
import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.PaymentModeMaster;
import com.webapp.apis.masters.model.PaymentModeMasterFromBean;
import com.webapp.apis.masters.repository.PaymentModeMasterRepository;
import com.webapp.apis.masters.service.PaymentMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class PaymentmodeMasterServiceImpl implements PaymentMasterService {
	private static final Logger LOGGER = LoggerFactory.getLogger(LocationMasterServiceImpl.class);

	@Inject
	private PaymentModeMasterRepository paymentModeMasterRepository;
	@Inject
	private SessionUtility sessionUtility;

	@Transactional
	@Override
	public String savePaymnetModeMaster(PaymentModeMasterFromBean paymentModeMasterFromBean) {
		PaymentModeMaster branchMaster = new PaymentModeMaster();
		BeanUtils.copyProperties(paymentModeMasterFromBean, branchMaster);
		
		if (paymentModeMasterFromBean.getId() == null) {
			branchMaster.setCreatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setCreatedDate(new Date());
		} else {
			branchMaster.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			branchMaster.setUpdatedDate(new Date());
		}
		branchMaster = paymentModeMasterRepository.save(branchMaster);
		if (branchMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

	@Override
	public List<PaymentModeMasterFromBean> getAllPaymentmode() {
		List<PaymentModeMaster> listpaymnetmodeMasters = paymentModeMasterRepository.findAllByOrderByIdDesc();
		List<PaymentModeMasterFromBean> listpaymentmodeMaster = new ArrayList<PaymentModeMasterFromBean>();
		for (PaymentModeMaster paymentmodeMaster : listpaymnetmodeMasters) {
			PaymentModeMasterFromBean paymentModeMasterFromBean = new PaymentModeMasterFromBean();
			BeanUtils.copyProperties(paymentmodeMaster, paymentModeMasterFromBean);
			listpaymentmodeMaster.add(paymentModeMasterFromBean);
		}

		return listpaymentmodeMaster;
	}

}
