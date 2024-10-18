package com.webapp.apis.transactions.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.webapp.apis.transactions.domain.StockInfo;

@Repository
public interface StockInfoRepository extends JpaRepository<StockInfo, Integer> {
		@Modifying	  
	  @Query(value = "DELETE FROM StockInfo s WHERE s.docNo=:docNo")
	  public Integer deleteRowsByDocNo(@Param("docNo") String docNo);
		 @Query(nativeQuery = true, value = "SELECT * FROM tbl_stock_info s WHERE s.doc_no=:docNo ")
			public List<StockInfo> findByDocNo1(@Param("docNo") String docNo);
		
		  @Query(nativeQuery = true, value = "SELECT * FROM tbl_stock_info s WHERE s.product_id in (:productIds) and s.cum_qty IS NULL ")
		  public List<StockInfo> getAllCumQtyIsNull(@Param("productIds")List  productIds);
		  
		  @Query(nativeQuery = true, value = "SELECT * FROM tbl_stock_info WHERE product_id=:productId AND location_id=:locationId  AND batch_no=:batchNo  AND cum_qty IS NOT NULL AND last_row='TRUE'  and cum_qty>=0 order by cum_qty asc")
			public List<StockInfo> getStockProducts(@Param("productId")Integer  productId, @Param("locationId") Integer locationId,@Param("batchNo") String batchNo);
		  @Query(nativeQuery = true, value = "SELECT * FROM tbl_stock_info WHERE product_id in (:productIds) AND location_id=:locationId  AND batch_no=0  AND cum_qty IS NOT NULL AND last_row='TRUE'  and cum_qty>=0 order by cum_qty asc")
			public List<StockInfo> getStockProductsLastRowTrue(@Param("productIds")List  productIds, @Param("locationId") Integer locationId);
		  
		  @Modifying	  
		  @Query(value = "UPDATE  StockInfo  SET partyId=:partyId WHERE docNo=:docNo AND productId=:productId")
		  public Integer updateStock(@Param("partyId") Integer partyId,@Param("docNo") String docNo,@Param("productId") Integer productId);
	  
}
