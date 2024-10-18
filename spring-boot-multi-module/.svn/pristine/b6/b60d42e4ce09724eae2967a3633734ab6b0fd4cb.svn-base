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
import com.webapp.apis.transactions.domain.StockVerification;



@Repository
public interface PurchaseInvoiceRepository extends JpaRepository<PurchaseInvoive, Integer>, PagingAndSortingRepository<PurchaseInvoive, Integer>, JpaSpecificationExecutor<PurchaseInvoive> {
	Page<PurchaseInvoive> findAll(Pageable pageable);
	public Page<PurchaseInvoive> findAllByOrderByIdDesc(Pageable pageable);
	@Query("SELECT location FROM PurchaseInvoive location WHERE location.locationId IN (:locationId)")
	Page<PurchaseInvoive> findByLocationAll(@Param("locationId")List<Integer> locationId,Pageable pageable);
	@Query(value = "SELECT (max(id)+1) FROM PurchaseInvoive")
	public Integer getMaxId();
	public List<PurchaseInvoive> findAllByOrderByIdAsc();

}