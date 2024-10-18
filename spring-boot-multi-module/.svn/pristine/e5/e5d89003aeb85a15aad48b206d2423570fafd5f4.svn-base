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

import com.webapp.apis.transactions.domain.Receipts;

@Repository
public interface ReceiptsRepository extends JpaRepository<Receipts, Integer>, PagingAndSortingRepository<Receipts, Integer>,JpaSpecificationExecutor<Receipts> {
	public List<Receipts> findAllByOrderByIdAsc();
	
	public List<Receipts> findAllByOrderByIdDesc();
	@Query("SELECT location FROM Receipts location WHERE location.locationId IN (:locationId)")
	Page<Receipts> findByLocationAll(@Param("locationId")List<Integer> locationId,Pageable pageable);
	@Query(value = "SELECT (max(id)+1) FROM Receipts")
	public Integer getMaxId();

}