package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.masters.domain.DesignationMaster;
import com.webapp.apis.masters.domain.Destination;


@Repository
public interface DestinationRepository extends JpaRepository<Destination, Integer> {
	public List<Destination> findAllByOrderByIdAsc();
	public List<Destination> findAllByOrderByIdDesc();
}
