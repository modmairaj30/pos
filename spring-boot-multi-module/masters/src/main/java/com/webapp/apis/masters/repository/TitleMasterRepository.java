package com.webapp.apis.masters.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.masters.domain.TitleMaster;

@Repository
public interface TitleMasterRepository
		extends JpaRepository<TitleMaster, Integer>, PagingAndSortingRepository<TitleMaster, Integer>,JpaSpecificationExecutor<TitleMaster> {
	Page<TitleMaster> findAll(Pageable pageable);
	public Page<TitleMaster> findAllByOrderByIdDesc(Pageable pageable);
	@Query(value = "SELECT (max(id)+1) FROM TitleMaster")
	public Integer getMaxId();
	
	Boolean existsByProdName(String prodName);
}
