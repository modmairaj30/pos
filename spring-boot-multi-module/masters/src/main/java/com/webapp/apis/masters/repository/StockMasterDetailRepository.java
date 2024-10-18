package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.masters.domain.ProductGroupsMaster;
import com.webapp.apis.masters.domain.StockMasterDetail;

@Repository
public interface StockMasterDetailRepository extends JpaRepository<StockMasterDetail, Integer> {
	public List<StockMasterDetail> findAllByOrderByIdDesc();
}
