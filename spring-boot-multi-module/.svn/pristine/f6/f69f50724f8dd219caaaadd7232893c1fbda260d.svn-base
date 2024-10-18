package com.webapp.apis.masters.constants;

public class MasterQueryConstants {
	public static final String DATEWISEREPORT = "DateWise";
	public static final String DATEWISEREPORT_QUERY = "SELECT creation_date, heat_id, strand_no, billet_ord, highest_defect_type,\r\n"
			+ "  assigned_grade, actual_length, actual_weight,heat_id||STRAND_NO||lpad(billet_ord,2,'0') Billet_id\r\n"
			+ "  FROM cwarel3.rpt_ccm_billet  where creation_date>= TRUNC(TO_DATE('@fromDate','DD-MM-YY'))   and creation_date <=TRUNC(TO_DATE('@toDate','DD-MM-YY'))";

	public static final String HEATWISEREPORT_QUERY = "SELECT creation_date, heat_id, strand_no, billet_ord, highest_defect_type,assigned_grade, "
			+ " actual_length, actual_weight,heat_id||STRAND_NO||lpad(billet_ord,2,'0') Billet_id\r\n"
			+ "  FROM cwarel3.rpt_ccm_billet  where substr(heat_id,2,7) >='@fromHeat'   and substr(heat_id,2,7) <='@toHeat'";

	public static final String DATEWISESPEED_QUERY = "select measure_date,heat_id, measure_no, superheat, tundish_weight, speed_strand_1, speed_strand_2, speed_strand_3,\r\n"
			+ "  speed_strand_4, speed_strand_5,speed_strand_6, speed_strand_7, speed_strand_8 from cwarel3.rpt_heat_measure \r\n"
			+ "	where measure_date>=TRUNC(TO_DATE('@fromDate','DD-MM-YY'))  and measure_date <=TRUNC(TO_DATE('@toDate','DD-MM-YY'))";
	public static final String HEATWISESPEED_QUERY = "select measure_date,heat_id, measure_no, superheat, tundish_weight, speed_strand_1,speed_strand_2, speed_strand_3, \r\n"
			+ "  speed_strand_4, speed_strand_5,speed_strand_6, speed_strand_7, speed_strand_8  from cwarel3.rpt_heat_measure  \r\n"
			+ "  where substr(heat_id,2,7)>='@fromHeat'  and substr(heat_id,2,7) <='@toHeat'";

}
