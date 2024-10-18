package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.apis.masters.domain.ContraLocationMaster;


public interface ContraLocationMasterRepository extends JpaRepository<ContraLocationMaster, Integer> {

	List<ContraLocationMaster> findAllByOrderByIdAsc();
	public List<ContraLocationMaster> findAllByOrderByIdDesc();

}
