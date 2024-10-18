package com.webapp.apis.transactions.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.webapp.apis.transactions.domain.Payments;

@Repository
public interface PaymentsRepository extends JpaRepository<Payments, Integer>, PagingAndSortingRepository<Payments, Integer>,JpaSpecificationExecutor<Payments> {
	public List<Payments> findAllByOrderByIdAsc();
	
	public List<Payments> findAllByOrderByIdDesc();
	@Query("SELECT location FROM Payments location WHERE location.locationId IN (:locationId)")
	Page<Payments> findByLocationAll(@Param("locationId")List<Integer> locationId,Pageable pageable);
	@Query(value = "SELECT (max(id)+1) FROM Payments")
	public Integer getMaxId();

}