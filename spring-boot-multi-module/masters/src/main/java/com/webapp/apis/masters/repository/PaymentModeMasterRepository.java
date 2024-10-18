package com.webapp.apis.masters.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.apis.masters.domain.PaymentModeMaster;


public interface PaymentModeMasterRepository extends JpaRepository<PaymentModeMaster, Integer>{

	List<PaymentModeMaster> findAllByOrderByIdAsc();
	public List<PaymentModeMaster> findAllByOrderByIdDesc();

}
