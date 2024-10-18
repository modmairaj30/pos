package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.masters.domain.EmployeeMaster;


@Repository
public interface EmployeeMasterRepository extends JpaRepository<EmployeeMaster,Integer>{
	public List<EmployeeMaster> findAllByOrderByIdAsc();
	public List<EmployeeMaster> findAllByOrderByIdDesc();

}
