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
import com.webapp.apis.masters.domain.BomMaster;
import com.webapp.apis.masters.mapper.BomMasterMapper;
import com.webapp.apis.masters.model.SearchCriteriaFormBean;
import com.webapp.apis.masters.model.ServerSidePagination;
import com.webapp.apis.masters.model.BomMasterFormBean;
import com.webapp.apis.masters.repository.BomMasterRepository;
import com.webapp.apis.masters.repository.specs.SearchCriteria;
import com.webapp.apis.masters.repository.specs.SearchOperation;
import com.webapp.apis.masters.repository.specs.BomMasterSpecification;
import com.webapp.apis.masters.service.BomMasterService;
import com.webapp.apis.repository.TblAutoNumberRepository;
import com.webapp.apis.utility.SessionUtility;

@Service
public class BomMasterServiceImpl implements BomMasterService {

	
	private static final Logger LOGGER = LoggerFactory.getLogger(BomMasterServiceImpl.class);
	@Inject
	private BomMasterRepository BomMasterRepository;
	
	@Inject
	private TblAutoNumberRepository tblAutoNumberRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<BomMasterFormBean> getAllBomMaster(ServerSidePagination serverSidePagination) {

		Page<BomMaster> BomMaster = null;
		// Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(),
		// serverSidePagination.getSize(), Sort.by("id").descending());
		Pageable requestedPage = PageRequest.of(serverSidePagination.getPage(), serverSidePagination.getSize());
		BomMaster = BomMasterRepository.findAllByOrderByIdDesc(requestedPage);

		return BomMasterMapper.mapDomainListToFormList(BomMaster.getContent());
	}

	@Transactional
	@Override
	public String saveBomMaster(BomMasterFormBean BomMasterFormBean) {
		if (BomMasterFormBean.getId() == null) {
			/*if (BomMasterRepository.existsByProdName(BomMasterFormBean.getProdName())) {
				return "Error: Dublicate Bom Name!";
			}*/
			BomMasterFormBean.setCreatedBy(sessionUtility.getUserSession().getUsername());
			BomMasterFormBean.setCreatedDate(new Date());
			BomMasterFormBean.setDocDt(new Date());
			TblAutoNumber autoNumber=	 tblAutoNumberRepository.findByTxnId(1111);
			BomMasterFormBean.setDocNo(autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			//BomMasterFormBean.setDocNo(BomMasterRepository.getMaxId().toString()+'-'+autoNum);
		//	BomMasterFormBean.setProductCode("NPH"+autoNumber.getPrefix()+autoNumber.getNumber()+autoNumber.getSuffix());
			tblAutoNumberRepository.updateNumber(2);
		} else {
			BomMasterFormBean.setUpdatedBy(sessionUtility.getUserSession().getUsername());
			BomMasterFormBean.setUpdatedDate(new Date());
		}
		BomMaster BomMaster = BomMasterRepository.save(BomMasterMapper.mapFormToDomain(BomMasterFormBean));

		if (BomMaster != null) {
			return MastersConstants.SAVE;
		}
		return MastersConstants.FAIL;
	}

	@Override
	public List<BomMasterFormBean> findByWhereCondition(SearchCriteriaFormBean searchCriteriaFormBean) {
		BomMasterSpecification msBomRating = new BomMasterSpecification();
        msBomRating.add(new SearchCriteria(searchCriteriaFormBean.getKey(),searchCriteriaFormBean.getValue(), SearchOperation.valueOf(searchCriteriaFormBean.getOperation())));
       // msBomRating.add(new SearchCriteria("rating", 7, SearchOperation.GREATER_THAN));
        List<BomMaster> BomMasterList = BomMasterRepository.findAll(msBomRating);
		//List<BomMaster> BomMasterList = BomMasterRepository.findByWhereCondition(where);
        
		return BomMasterMapper.mapDomainListToFormList(BomMasterList);
	}

}
