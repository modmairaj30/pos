package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.masters.domain.StockMaster;

@Repository
public interface StockMasterRepository extends JpaRepository<StockMaster, Integer> {
	public List<StockMaster> findAllByOrderByIdAsc();
	public List<StockMaster> findAllByOrderByIdDesc();
}
