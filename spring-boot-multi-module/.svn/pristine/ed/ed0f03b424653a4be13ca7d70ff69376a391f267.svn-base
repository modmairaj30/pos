package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.apis.masters.domain.DesignationMaster;

public interface DesignationMasterRepository extends JpaRepository<DesignationMaster, Integer>{

	List<DesignationMaster> findAllByOrderByIdAsc();
	public List<DesignationMaster> findAllByOrderByIdDesc();

}
