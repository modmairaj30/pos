package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.masters.domain.PartyMaster;
import com.webapp.apis.masters.domain.TitleMaster;


@Repository
public interface PartyMasterRepository extends JpaRepository<PartyMaster, Integer>, PagingAndSortingRepository<PartyMaster, Integer>,JpaSpecificationExecutor<PartyMaster> {
	
	public Page<PartyMaster> findAllByOrderByIdDesc(Pageable pageable);
	
	@Query(value = "SELECT p FROM PartyMaster p WHERE p.partyType=2")
	public List<PartyMaster> getPartyMaster();

}
 