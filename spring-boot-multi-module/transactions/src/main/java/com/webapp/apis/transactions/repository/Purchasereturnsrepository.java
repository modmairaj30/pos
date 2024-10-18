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

import com.webapp.apis.transactions.domain.PurchaseInvoive;
import com.webapp.apis.transactions.domain.Purchasereturns;



@Repository
public interface Purchasereturnsrepository extends JpaRepository<Purchasereturns, Integer>, PagingAndSortingRepository<Purchasereturns, Integer>,JpaSpecificationExecutor<Purchasereturns> {
	public List<Purchasereturns> findAllByOrderByIdAsc();
	@Query("SELECT location FROM Purchasereturns location WHERE location.locationId IN (:locationId)")
	Page<Purchasereturns> findByLocationAll(@Param("locationId")List<Integer> locationId,Pageable pageable);
	@Query(value = "SELECT (max(id)+1) FROM Purchasereturns")
	public Integer getMaxId();
	public Page<Purchasereturns> findAllByOrderByIdDesc(Pageable pageable);
	Page<Purchasereturns> findAll(Pageable pageable);
}