package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.masters.domain.LocationMaster;

@Repository
public interface LocationMasterRepository extends JpaRepository<LocationMaster, Integer> {
	public List<LocationMaster> findAllByOrderByIdAsc();
	public List<LocationMaster> findAllByOrderByIdDesc();
}
