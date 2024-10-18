package com.webapp.apis.masters.services.impl;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.StockMaster;
import com.webapp.apis.masters.mapper.StockMasterMapper;
import com.webapp.apis.masters.model.StockMasterFormBean;
import com.webapp.apis.masters.repository.StockMasterRepository;
import com.webapp.apis.masters.service.StockMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class StockMasterServiceImpl implements StockMasterService {

	private static final Logger LOGGER = LoggerFactory.getLogger(StockMasterServiceImpl.class);

	@Inject
	private StockMasterRepository stockMasterRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<StockMasterFormBean> getAllStockMasters() {
		List<StockMaster> listStockmaster = stockMasterRepository.findAllByOrderByIdDesc();
		return StockMasterMapper.mapDomainListToFormList(listStockmaster);

	}

	@Transactional
	@Override
	public String saveStockMaster(StockMasterFormBean stockMasterFormBean) {
		StockMaster obj = stockMasterRepository.save(StockMasterMapper.mapFormToDomain(stockMasterFormBean));
		if (obj != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

}
