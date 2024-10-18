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


import com.webapp.apis.transactions.domain.Salesreturns;

@Repository
public interface SalesreturnsRepository extends JpaRepository<Salesreturns, Integer>, PagingAndSortingRepository<Salesreturns, Integer>, JpaSpecificationExecutor<Salesreturns> {
	public List<Salesreturns> findAllByOrderByIdAsc();
	@Query("SELECT location FROM Salesreturns  location WHERE location.locationId IN (:locationId)")
	Page<Salesreturns> findByLocationAll(@Param("locationId")List<Integer> locationId,Pageable pageable);
	@Query(value = "SELECT (max(id)+1) FROM Salesreturns")
	public Integer getMaxId();
/*
 * LIKE %?#{[0].toUpperCase()}%
 * List<Employee> findByEmployeeNameIn(List<String> names);                // 1. Spring JPA In cause using method name
    @Query("SELECT e FROM Employee e WHERE e.employeeName IN (:names)")     // 2. Spring JPA In cause using @Query
    List<Employee> findByEmployeeNames(@Param("names")List<String> names);
    @Query(nativeQuery =true,value = "SELECT * FROM Employee as e WHERE e.employeeName IN (:names)")   // 3. Spring JPA In cause using native query
    List<Employee> findByEmployeeName(@Param("names") List<String> names);
 */
	
}
