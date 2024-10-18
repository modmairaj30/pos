package com.webapp.apis.masters.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.masters.domain.BomMaster;

@Repository
public interface BomMasterRepository
		extends JpaRepository<BomMaster, Integer>, PagingAndSortingRepository<BomMaster, Integer>,JpaSpecificationExecutor<BomMaster> {
	Page<BomMaster> findAll(Pageable pageable);
	public Page<BomMaster> findAllByOrderByIdDesc(Pageable pageable);
		
	
}
