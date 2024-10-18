package com.webapp.apis.masters.services.impl;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.apis.domian.TblAutoNumber;
import com.webapp.apis.masters.constants.MastersConstants;
import com.webapp.apis.masters.domain.TitleMaster;
import com.webapp.apis.masters.mapper.TitleMasterMapper;
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;
import com.webapp.apis.masters.model.TitleMasterFormBean;
import com.webapp.apis.masters.repository.TitleMasterRepository;
import com.webapp.apis.masters.repository.specs.SearchCriteria;
import com.webapp.apis.masters.repository.specs.SearchOperation;
import com.webapp.apis.masters.repository.specs.TitleMasterSpecification;
import com.webapp.apis.masters.service.TitleMasterService;
import com.webapp.apis.repository.TblAutoNumberRepository;
import com.webapp.apis.utility.SessionUtility;

@Service
public class TitleMasterServiceImpl implements TitleMasterService {

	@Value("${webapp.app.titleMaster.autoNum}")
	private String autoNum;
	private static final Logger LOGGER = LoggerFactory.getLogger(TitleMasterServiceImpl.class);
	@Inject
	private TitleMasterRepository titleMasterRepository;
	
	@Inject
	private TblAutoNumberRepository tblAutoNumberRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<TitleMasterFormBean> getAllTileMaster(ServerSidePagination serverSidePagination) {

		Page<TitleMaster> titleMaster = null;
		// Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(),
		// serverSidePagination.getSize(), Sort.by("id").descending());
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize());
		titleMaster = titleMasterRepository.findAllByOrderByIdDesc(requestedPage);

		return TitleMasterMapper.mapDomainListToFormList(titleMaster.getContent());
	}

	@Transactional
	@Override
	public String saveTitleMaster(TitleMasterFormBean titleMasterFormBean) {
		if (titleMasterFormBean.getId() == null) {
			if (titleMasterRepository.existsByProdName(titleMasterFormBean.getProdName())) {
				return "Error: Dublicate Title Name!";
			}
			titleMasterFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			titleMasterFormBean.setCreatedDate(new Date());
			TblAutoNumber autoNumber=	 tblAutoNumberRepository.findByTxnId(2);
			titleMasterFormBean.setDocNo(autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			//titleMasterFormBean.setDocNo(titleMasterRepository.getMaxId().toString()+'-'+autoNum);
			titleMasterFormBean.setProductCode("NPH"+autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			tblAutoNumberRepository.updateNumber(2);
		} else {
			titleMasterFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			titleMasterFormBean.setUpdatedDate(new Date());
		}
		TitleMaster titleMaster = titleMasterRepository.save(TitleMasterMapper.mapFormToDomain(titleMasterFormBean));

		if (titleMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

	@Override
	public List<TitleMasterFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		TitleMasterSpecification msTitleRating = new TitleMasterSpecification();
        msTitleRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
       // msTitleRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
        List<TitleMaster> titleMasterList = titleMasterRepository.findAll(msTitleRating);
		//List<titleMaster> titleMasterList = titleMasterRepository.findByWhereCondition(where);
        
		return TitleMasterMapper.mapDomainListToFormList(titleMasterList);
	}

}
