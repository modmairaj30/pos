package com.webapp.apis.masters.services.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.webapp.apis.masters.model.LookUpFormBean;
import com.webapp.apis.masters.service.LookUpMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class LookUpMasterServiceImpl implements LookUpMasterService {

	private static final Logger LOGGER = LoggerFactory.getLogger(LookUpMasterServiceImpl.class);
	@Autowired
	@Qualifier("dataSource")
	private JdbcTemplate jdbcTemplateObject;
	@Inject
	private SessionUtility sessionUtility;

	@Override
	public List<Map<String, String>> getLookUpValues(LookUpFormBean lookUpFormBean) {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;

		List<Map<String, String>> list = new ArrayList<>();
		try {
			StringBuilder query = new StringBuilder();
			conn = jdbcTemplateObject.getDataSource().getConnection();
			stmt = conn.createStatement();
			query.append(lookUpFormBean.getQuery());
			// LOGGER.info("Query=" + query.toString());
			rs = stmt.executeQuery(query.toString());
			ResultSetMetaData rsmd = rs.getMetaData();
			int rowCount = rsmd.getColumnCount();

			while (rs.next()) {
				Map<String, String> row = new HashMap<>();
				for (int i = 1; i < rowCount + 1; i++) {

					String cName = rsmd.getColumnName(i) != null ? rsmd.getColumnName(i).toString() : "";
					String cValue = rs.getObject(cName) != null ? rs.getObject(cName).toString() : "";
					row.put(cName, cValue);
				}
				list.add(row);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
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
		return list;
	}

	@Override
	public Map<String, List<Map<String, String>>> getMultipleDropdwonValues(List<LookUpFormBean> listLookUpFormBean) {
		// Map<String, List<Map<String, String>>> map= new HashMap<String, ArrayList>();
		Map<String, List<Map<String, String>>> map = new HashMap<String, List<Map<String, String>>>();
		for (LookUpFormBean lookUpFormBean : listLookUpFormBean) {
			map.put(lookUpFormBean.getListName(), getLookUpValues(lookUpFormBean));

		}
		return map;
	}

}
