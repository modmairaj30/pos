package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.webapp.apis.masters.domain.MembershipMaster;


@Repository
public interface MembershipMasterRepository extends JpaRepository<MembershipMaster, Integer>,JpaSpecificationExecutor<MembershipMaster> {
	public List<MembershipMaster> findAllByOrderByIdAsc();
	public List<MembershipMaster> findAllByOrderByIdDesc();
	public Page<MembershipMaster> findAllByOrderByIdDesc(Pageable requestedPage);
	
}
