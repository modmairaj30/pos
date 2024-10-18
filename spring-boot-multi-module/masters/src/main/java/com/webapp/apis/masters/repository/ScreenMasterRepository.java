package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.webapp.apis.masters.domain.ScreenMaster;



public interface ScreenMasterRepository
	extends JpaRepository< ScreenMaster, Integer>, PagingAndSortingRepository< ScreenMaster, Integer>,JpaSpecificationExecutor< ScreenMaster> {
	List<ScreenMaster> findAllByOrderByIdAsc();
	public List<ScreenMaster> findAllByOrderByIdDesc();

}