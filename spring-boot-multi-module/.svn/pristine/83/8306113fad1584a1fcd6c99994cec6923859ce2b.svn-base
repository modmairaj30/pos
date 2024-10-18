package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.webapp.apis.masters.domain.ItemMaster;



public interface ItemMasterRepository
	extends JpaRepository< ItemMaster, Integer>, PagingAndSortingRepository< ItemMaster, Integer>,JpaSpecificationExecutor< ItemMaster> {
	List<ItemMaster> findAllByOrderByIdAsc();
	public List<ItemMaster> findAllByOrderByIdDesc();

}
