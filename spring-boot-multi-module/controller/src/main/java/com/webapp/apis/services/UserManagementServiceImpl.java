package com.webapp.apis.services;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.webapp.apis.constants.WebAppConstants;
import com.webapp.apis.domian.Operation;



@Service
public class UserManagementServiceImpl implements UserManagementService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserManagementServiceImpl.class);

	
	@Autowired
	@Qualifier("dataSource")
	private JdbcTemplate jdbcTemplateObject;

		
	@Override
	public Map<String, Operation> getAllScreensAndOperationOfUser(Integer role_id) {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;

		Map<String, Operation> map = new HashMap<>();
		try {
			StringBuilder query = new StringBuilder();
			conn = jdbcTemplateObject.getDataSource().getConnection();
			stmt = conn.createStatement();
			query.append("select screen_name  from screen order by screen_name");
			rs = stmt.executeQuery(query.toString());
			while (rs.next()) {
				Operation operation = new Operation();	
				map.put(rs.getString("screen_name"), operation);
			}
			query.delete(0, query.length());
			query.append("select  m.enabled, s.screen_name,s.id,o.operation_name from screen_operation_role_map m INNER JOIN screen s ON m.screen_id = s.id  INNER JOIN operation o ON m.operation_id = o.id where role_id="+role_id+" and m.enabled='Y'");
			// LOGGER.info("Query=" + query.toString());
			rs = stmt.executeQuery(query.toString());
			//ResultSetMetaData rsmd = rs.getMetaData();
			//int rowCount = rsmd.getColumnCount();

			while (rs.next()) {
			Operation operation1= map.get(rs.getString("screen_name"));
				switch(rs.getString("operation_name"))
		        {
		            case WebAppConstants.EDIT:
		            	operation1.setEdit(true);
		                break;
		            case WebAppConstants.MENU:
		            	operation1.setMenu(true);
		                break;
		            case WebAppConstants.VIEW:
		            	operation1.setView(true);
		                break;
		            default:
		                System.out.println("no match");
		        }
				map.put(rs.getString("screen_name"), operation1);
			
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
		return map;
	}

	

}
