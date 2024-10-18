package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.apis.masters.domain.ContraLocationMaster;
import com.webapp.apis.masters.domain.DepartmentMaster;

public interface DepartmentMasterRepository extends JpaRepository<DepartmentMaster, Integer> {

	List<DepartmentMaster> findAllByOrderByIdAsc();
	public List<DepartmentMaster> findAllByOrderByIdDesc();

}
