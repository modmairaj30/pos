package com.webapp.apis.transactions.utility;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.DecimalFormat;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.webapp.apis.utility.SessionUtility;
@Component
public class StockUpdate  {
	
	@Autowired
	@Qualifier("dataSource")
	private JdbcTemplate jdbcTemplateObject;
	@Inject
	private SessionUtility sessionUtility;
	
	public void updateStockValues() {
		
		Connection con = null;
		  String qry = "";
	      String prod_qry = "";
	      DecimalFormat numberFormat = new DecimalFormat("0.000");

	      try {
	    	  
	    	  con = jdbcTemplateObject.getDataSource().getConnection();
			qry = "SELECT * FROM tbl_stock_info WHERE cum_qty IS NULL";
	         Statement st_stock = con.createStatement();
	         ResultSet rs_stock = st_stock.executeQuery(qry);
	         ResultSet rs_prod = null;
	         Statement st_prod = con.createStatement();
	         double cum_qty = 0.0D;
	         double lifo_val = 0.0D;
	         double fifo_val = 0.0D;
	         double warate = 0.0D;
	         double wavalue = 0.0D;

	         while(true) {
	            while(rs_stock.next()) {
	               if (rs_stock.getString("batch_no") != null && !rs_stock.getString("batch_no").equals("")) {
	                  if (rs_stock.getString("batch_tracker") != null && !rs_stock.getString("batch_tracker").equals("")) {
	                     //prod_qry = "SELECT * FROM tbl_stock_info WHERE product_id=" + rs_stock.getString("product_id") + " AND location_id=" + rs_stock.getString("location_id") + " AND batch_no='" + rs_stock.getString("batch_no") + "' AND batch_tracker='" + rs_stock.getString("batch_tracker") + "' AND cum_qty IS NOT NULL AND last_row='TRUE'  and cum_qty>=0 order by cum_qty asc";
	                	 prod_qry = "SELECT * FROM tbl_stock_info WHERE product_id in (1) AND location_id=11  AND batch_no=0  AND cum_qty IS NOT NULL AND last_row='TRUE'  and cum_qty>=0 order by cum_qty asc";
	                  } else {
	                     prod_qry = "SELECT * FROM tbl_stock_info WHERE product_id=" + rs_stock.getString("product_id") + " AND location_id=" + rs_stock.getString("location_id") + " AND batch_no='" + rs_stock.getString("batch_no") + "' AND cum_qty IS NOT NULL AND last_row='TRUE'  and cum_qty>=0 order by cum_qty asc";
	                  }
	               } else {
	                    prod_qry = "SELECT * FROM tbl_stock_info WHERE product_id=" + rs_stock.getString("product_id") + " AND location_id=" + rs_stock.getString("location_id") + " AND cum_qty IS NOT NULL and Last_row='TRUE' and cum_qty>=0 order by cum_qty asc";  
	               }

	               System.out.println("prod qry == " + prod_qry);
	               rs_prod = st_prod.executeQuery(prod_qry);
	               fifo_val = 0.0D;
	               lifo_val = 0.0D;
	               cum_qty = 0.0D;
	               System.out.println("rs.getString('txn_function').equals('PLUS') == " + rs_stock.getString("txn_function"));
	               if (rs_stock.getString("txn_function").equals("PLUS")) {
	                  cum_qty = rs_stock.getDouble("qty");
	                  lifo_val = rs_stock.getDouble("qty") * rs_stock.getDouble("rate");
	                  fifo_val = rs_stock.getDouble("qty") * rs_stock.getDouble("rate");
	                  wavalue = rs_stock.getDouble("qty") * rs_stock.getDouble("rate");
	                  rs_prod.afterLast();
	                  if (rs_prod.previous()) {
	                     rs_prod.updateString("last_row", "FALSE");
	                     rs_prod.updateRow();
	                  }

	                  rs_prod.afterLast();
	                  if (rs_prod.previous()) {
	                     cum_qty += rs_prod.getDouble("cum_qty");
	                     lifo_val += rs_prod.getDouble("lifo_value");
	                     fifo_val += rs_prod.getDouble("fifo_value");
	                     wavalue += rs_prod.getDouble("wet_avg_value");
	                  }

	                  rs_stock.updateDouble("lifo_qty", rs_stock.getDouble("qty"));
	                  rs_stock.updateDouble("fifo_qty", rs_stock.getDouble("qty"));
	                  rs_stock.updateDouble("cum_qty", cum_qty);
	                  rs_stock.updateDouble("lifo_value", lifo_val);
	                  rs_stock.updateDouble("fifo_value", fifo_val);
	                  rs_stock.updateDouble("wet_avg_value", wavalue);
	                  if (cum_qty > 0.0D) {
	                     rs_stock.updateDouble("wet_avg_rate", wavalue / cum_qty);
	                  } else {
	                     rs_stock.updateDouble("wet_avg_rate", wavalue);
	                  }

	                  rs_stock.updateRow();
	               } else if (rs_stock.getString("txn_function").equals("MINUS")) {
	                  cum_qty = rs_stock.getDouble("qty");
	                  double qty = -rs_stock.getDouble("qty");
	                  double rate = 0.0D;
	                  rs_prod.afterLast();
	                  if (rs_prod.previous()) {
	                     rate = rs_prod.getDouble("rate");
	                     rs_prod.updateString("last_row", "FALSE");
	                     rs_prod.updateRow();
	                  }

	                  rs_prod.afterLast();
	                  if (rs_prod.previous()) {
	                     cum_qty = rs_prod.getDouble("cum_qty") - cum_qty;
	                     fifo_val = rs_prod.getDouble("fifo_value");
	                     lifo_val = rs_prod.getDouble("lifo_value");
	                     warate = rs_prod.getDouble("wet_avg_rate");
	                     wavalue = rs_prod.getDouble("wet_avg_value");
	                  } else {
	                     cum_qty = -cum_qty;
	                     fifo_val = 0.0D;
	                     lifo_val = 0.0D;
	                     warate = 0.0D;
	                     warate = 0.0D;
	                  }

	                  System.out.println(rs_stock.getDouble("qty") + " == " + cum_qty);
	                  rs_prod.afterLast();
	                  double value = 0.0D;

	                  while(rs_prod.previous() && qty < 0.0D) {
	                     if (rs_prod.getDouble("lifo_qty") != 0.0D) {
	                        qty += rs_prod.getDouble("lifo_qty");
	                        if (qty > 0.0D) {
	                           rs_prod.updateDouble("lifo_qty", qty);
	                           value += (rs_prod.getDouble("lifo_qty") - qty) * rs_prod.getDouble("rate");
	                        } else {
	                           rs_prod.updateDouble("lifo_qty", 0.0D);
	                           value += rs_prod.getDouble("lifo_qty") * rs_prod.getDouble("rate");
	                        }

	                        rs_prod.updateRow();
	                        rs_stock.updateDouble("lifo_value", lifo_val - value);
	                     }
	                  }

	                  qty = -rs_stock.getDouble("qty");
	                  value = 0.0D;
	                  rs_prod.beforeFirst();

	                  while(rs_prod.next() && qty < 0.0D) {
	                     if (rs_prod.getDouble("fifo_qty") != 0.0D) {
	                        qty += rs_prod.getDouble("fifo_qty");
	                        if (qty > 0.0D) {
	                           rs_prod.updateDouble("fifo_qty", qty);
	                           value += (rs_prod.getDouble("fifo_qty") - qty) * rs_prod.getDouble("rate");
	                        } else {
	                           rs_prod.updateDouble("fifo_qty", 0.0D);
	                           value += rs_prod.getDouble("fifo_qty") * rs_prod.getDouble("rate");
	                        }

	                        rs_stock.updateDouble("fifo_value", fifo_val - value);
	                     }
	                  }

	                  wavalue -= rs_stock.getDouble("qty") * warate;
	                  System.out.println(" W.Rate == " + warate + " -W.Value == " + wavalue);
	                  System.out.println(numberFormat.format(wavalue) + " == " + numberFormat.format(warate));
	                  rs_stock.updateDouble("lifo_qty", 0.0D);
	                  rs_stock.updateDouble("fifo_qty", 0.0D);
	                  rs_stock.updateDouble("cum_qty", cum_qty);
	                  rs_stock.updateDouble("rate", rate);
	                  rs_stock.updateObject("wet_avg_value", numberFormat.format(wavalue));
	                  rs_stock.updateObject("wet_avg_rate", numberFormat.format(warate));
	                  rs_stock.updateRow();
	               }
	            }

	            return;
	         }
	      } catch (Exception var29) {
	         var29.printStackTrace();
	      } finally {
	         System.out.println("qry == " + qry);
	      }

	   }
  }

