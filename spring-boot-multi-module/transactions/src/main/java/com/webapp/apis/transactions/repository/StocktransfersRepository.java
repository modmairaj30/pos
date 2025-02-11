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

import com.webapp.apis.transactions.domain.Stocktransfers;
 
@Repository
public interface StocktransfersRepository extends JpaRepository<Stocktransfers, Integer>, PagingAndSortingRepository<Stocktransfers, Integer>,JpaSpecificationExecutor<Stocktransfers> {
	
	public List<Stocktransfers> findAllByOrderByIdAsc();
	@Query("SELECT location FROM Stocktransfers location WHERE location.locationId IN (:locationId)")
	Page<Stocktransfers> findByLocationAll(@Param("locationId")List<Integer> locationId,Pageable pageable);
	@Query(value = "SELECT (max(id)+1) FROM Stocktransfers")
	public Integer getMaxId();

}
