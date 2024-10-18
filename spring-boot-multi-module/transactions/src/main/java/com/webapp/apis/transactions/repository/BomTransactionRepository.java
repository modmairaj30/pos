package com.webapp.apis.transactions.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.transactions.domain.BomTransaction;



@Repository
public interface BomTransactionRepository
		extends JpaRepository<BomTransaction, Integer>, PagingAndSortingRepository<BomTransaction, Integer>,JpaSpecificationExecutor<BomTransaction> {
	Page<BomTransaction> findAll(Pageable pageable);
	public Page<BomTransaction> findAllByOrderByIdDesc(Pageable pageable);
		
	
}
