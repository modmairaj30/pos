package com.webapp.apis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.webapp.apis.domian.TblAutonumberLocation;



public interface TblAutoNumberLocationRepository extends JpaRepository<TblAutonumberLocation, Integer> {
	@Modifying	  
	  @Query(value = "UPDATE TblAutonumberLocation s SET s.number=s.number+1    WHERE s.txnId=:txnId AND s.locationId=:locationId")
	  public Integer updateNumber(@Param("txnId") Integer txnId,@Param("locationId") Integer locationId);
		public TblAutonumberLocation findByTxnIdAndLocationId(Integer txnId,Integer locationId);
}