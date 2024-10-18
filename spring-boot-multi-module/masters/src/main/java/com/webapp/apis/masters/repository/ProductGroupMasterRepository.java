package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.apis.masters.domain.PaymentModeMaster;
import com.webapp.apis.masters.domain.ProductGroupsMaster;



public interface ProductGroupMasterRepository extends JpaRepository<ProductGroupsMaster, Integer>{

	List<ProductGroupsMaster> findAllByOrderByIdAsc();
	public List<ProductGroupsMaster> findAllByOrderByIdDesc();

}
