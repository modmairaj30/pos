package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.apis.masters.domain.SubjectsMaster;


public interface SubjectsMasterRepository extends JpaRepository<SubjectsMaster, Integer>{

	List<SubjectsMaster> findAllByOrderByIdAsc();
	public List<SubjectsMaster> findAllByOrderByIdDesc();

}
