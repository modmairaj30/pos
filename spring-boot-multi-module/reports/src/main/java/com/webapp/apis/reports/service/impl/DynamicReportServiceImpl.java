package com.webapp.apis.reports.service.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.apache.commons.lang.WordUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.webapp.apis.reports.domain.Report;
import com.webapp.apis.reports.model.ReportColumn;
import com.webapp.apis.reports.model.ReportInput;
import com.webapp.apis.reports.repository.ReportRepository;
import com.webapp.apis.reports.service.DynamicReportService;
import com.webapp.apis.utility.SessionUtility;

/**
 * @author Mairaj
 * @copyright
 * @email
 * @date 26-May-2021
 * @purpose .
 */
@Service
public class DynamicReportServiceImpl implements DynamicReportService {

	private static final Logger LOGGER = LoggerFactory.getLogger(DynamicReportServiceImpl.class);

	@Autowired
	@Qualifier("dataSource")
	private JdbcTemplate jdbcTemplateObject;

	@Inject
	ReportRepository reportRepository;

	@Inject
	private SessionUtility sessionUtility;;

	@Override
	public Map<String, Object> generateReport(ReportInput reportInput) {
		LOGGER.info("START: generateReport() service method is called with query: {}");
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		Map<String, Object> output = new HashMap<>();
		List<Map<String, String>> list = new ArrayList<>();

		try {

			Report report = reportRepository.findByReportId(reportInput.getReportId());
			// StringBuilder query = new StringBuilder();
			
			List<Object> objects = new ArrayList<>();
			
			if(reportInput.getFromDate()!=null) {
			 objects.add(reportInput.getFromDate());
			}
			if(reportInput.getToDate()!=null) {
			 objects.add(reportInput.getToDate());
			}
			if(reportInput.getLocationId()!=null) {
				objects.add(reportInput.getLocationId());
				}
			/*
			Date toDate = null;
			if (reportInput.getToDate() != null) {
				Date reportToDate = new Date(reportInput.getToDate());
				toDate = new Timestamp(reportToDate.getTime());
			}
			
			Date fromDate = null;
			if (reportInput.getFromDate() != null) {
				Date reportToDate = new Date(reportInput.getFromDate());
				fromDate = new Timestamp(reportToDate.getTime());
			}*/
			ResultSet rset = getResultSetOutput(report.getSqlSelectQry(), objects);
			ResultSetMetaData rsmd = rset.getMetaData();
			List<ReportColumn> columns = new ArrayList<>();
			while (rset.next()) {

				
				LinkedHashMap<String, String> row = new LinkedHashMap<>();
				List<String> arr = new ArrayList<>();
				int columnCount = rset.getMetaData().getColumnCount();
				String cValue = "";
				for (int i = 1; i <= columnCount; i++) {
					String cName = rsmd.getColumnName(i) != null ? rsmd.getColumnName(i).toString() : "";

					if (rset.getMetaData().getColumnType(i) == 91) {
						if (true) {
							cValue = rset.getObject(cName) != null
									? new SimpleDateFormat("dd/MM/yyyy ").format((rset.getTimestamp(cName)))
									: "";
						} else {

							cValue = rset.getObject(cName) != null
									? new SimpleDateFormat("dd/MM/yyyy kk:mm:ss").format((rset.getTimestamp(cName)))
									: "";
						}

					} else {
						cValue = rset.getObject(cName) != null ? rset.getObject(cName).toString() : "";
					}

					// StringUtils.capitalize(StringUtils.join(StringUtils.splitByCharacterTypeCamelCase(cName),
					// StringUtils.SPACE)); // Your Camel Case Text
					// cName= StringUtils.join(StringUtils.splitByCharacterTypeCamelCase(cName),'
					// ');
					cName = cName.replace('_', ' ');
					cName = WordUtils.capitalizeFully(removeSingleQuotes(cName));

					row.put(cName, cValue);
					

				}
				
				list.add(row);
				
			}
			for (int i = 1; i <= rset.getMetaData().getColumnCount(); i++) {
				
				String cName = rsmd.getColumnName(i) != null ? rsmd.getColumnName(i).toString() : "";
				cName = cName.replace('_', ' ');
				cName = WordUtils.capitalizeFully(removeSingleQuotes(cName));
				ReportColumn obj= new ReportColumn(cName,cName,null);
				columns.add(obj);
				
			}
			output.put("header",columns);
			output.put("objects", list);
			output.put("title", reportInput.getReportName());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			LOGGER.error("IN: generateReport() service method ", e.getMessage());
		}
		finally {
			try {
				if (rs != null)
					rs.close();
				if (stmt != null)
					stmt.close();
				if (conn != null)
					conn.close();
			} catch (Exception e) {
			}
		}
		LOGGER.info("END: generateReport() service method is called with query: {}");

		return output;

	}

	private ResultSet getResultSetOutput(String reportGenQuery, List<Object> parameters) {
		LOGGER.info("START: getResultSetOutput() method is called with reportGenQuery: {}", reportGenQuery);
		ResultSet rs = null;
		try {
			Connection con = jdbcTemplateObject.getDataSource().getConnection();
			if (parameters.isEmpty()) {

				Statement st = con.createStatement();
				rs = st.executeQuery(reportGenQuery);

			} else {
				PreparedStatement psmt = con.prepareStatement(reportGenQuery);
				if (parameters != null && !parameters.isEmpty()) {

					for (int i = 0; i < parameters.size(); i++) {
						if (i == 0 || i == 1) {
							Timestamp t = new Timestamp((long) parameters.get(i));

							if (i == 1) { // 24 difference
								long oneDay = 1 * 24 * 60 * 60 * 1000;
								t.setTime(t.getTime() + oneDay);
							}
							psmt.setTimestamp(i + 1, t);
						} else {
							psmt.setObject(i + 1, parameters.get(i));
						}
					}
				}
				rs = psmt.executeQuery();

			}

		} catch (SQLException e) {
			LOGGER.error("Error: getResultSetOutput() method error: {}", e.fillInStackTrace());
		}
		LOGGER.info("END: getResultSetOutput() method is called with reportGenQuery: {}", reportGenQuery);
		return rs;
	}

	private String checkEnumValues(String colName) {
		// LOGGER.info("START: checkEnumValues() method colName=>",colName);
		try {
			// colName=EnumUtils.isValidEnum(ReportEnums.class, colName)
			// ?ReportEnums.valueOf(colName).getVal():colName;
			colName = WordUtils.capitalizeFully(removeSingleQuotes(colName));
		} catch (Exception e) {
			LOGGER.error("IN: checkEnumValues() method ERROR=>", e.getMessage());
		}
		// LOGGER.info("END: checkEnumValues() method colName=>",colName);
		return colName;
	}

	private String removeSingleQuotes(String str) {
		if (str != null && str.contains("'")) {
			return str.replaceAll("'", "");
		} else {
			return str;
		}
	}

}
