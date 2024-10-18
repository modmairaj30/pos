package com.webapp.apis.reports.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.apis.reports.domain.Report;


public interface ReportRepository extends JpaRepository<Report, Integer> {
	
	Report	findByReportId(Integer id);
/*
	@Query("Select new com.jsteel.mes.model.ReportForm(processName, reportName) FROM Report WHERE plantB.plantId =:plantId AND  processName =:processName ")
	public List<ReportForm> findAllReportAndProcessNames(@Param("plantId") BigDecimal param, @Param("processName") String processName);

		
	@Query(nativeQuery = true, value = "select r.ref_doc_no,r.ref_rev_no,r.ref_doc_date from report_b r where r.plant_id=:plantId and r.report_name=:reportName")
	public Object getRefDocReportData(@Param("plantId")BigDecimal  plantId, @Param("reportName") String reportName);
	
	@Query(nativeQuery = true, value = QueryConstant.STOCK_VERIFICATION)
	public List<Object[]> getMachineNames(@Param("plantId")BigDecimal plantId,@Param("equipId")BigDecimal equipId,@Param("mfgId")BigDecimal mfgId);
*/
	
}
