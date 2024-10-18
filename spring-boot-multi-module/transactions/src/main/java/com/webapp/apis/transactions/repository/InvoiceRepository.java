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

import com.webapp.apis.transactions.domain.Invoice;
import com.webapp.apis.transactions.domain.StockVerification;


@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer>, PagingAndSortingRepository<Invoice, Integer>,JpaSpecificationExecutor <Invoice>{
	public List<Invoice> findAllByOrderByIdAsc();
	Page<Invoice> findAll(Pageable pageable);
	public Page<Invoice> findAllByOrderByIdDesc(Pageable pageable);
	@Query("SELECT location FROM Invoice location WHERE location.locationId IN (:locationId)")
	Page<Invoice> findByLocationAll(@Param("locationId")List<Integer> locationId,Pageable pageable);
	@Query(value = "SELECT (max(id)+1) FROM Invoice")
	public Integer getMaxId();
	
}
 