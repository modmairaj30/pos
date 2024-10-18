package com.webapp.apis.reports.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.reports.constant.ReportConstant;
import com.webapp.apis.reports.model.ReportInput;
import com.webapp.apis.reports.utility.FindingOSUtil;
import com.webapp.apis.utility.SessionUtility;

import net.sf.jasperreports.engine.DefaultJasperReportsContext;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.export.SimpleXlsxReportConfiguration;

/**
 * @author Mairaj
 * @copyright
 * @email
 * @date May 14,2022
 * @purpose This is to generate report through JRXML
 */

@RestController
@RequestMapping(value = "jasperreport/dynamic")
public class DynamicJasperReportController {

	private static final Logger LOGGER = LoggerFactory.getLogger(DynamicJasperReportController.class);

	@Autowired
	DataSource dataSource;
	@Inject
	private SessionUtility sessionUtility;

	@Value("${app.filePath.win}")
	public String windowPath;
	@Value("${app.filePath.linux}")
	public String linuxPath;

	@RequestMapping(value = "/generatereport", method = RequestMethod.GET)
	public void getRpt1(HttpServletResponse response, ReportInput reportInput)
			throws JRException, IOException, SQLException {
		LOGGER.info("DynamicJasperReportController getRpt1 method");

		Connection con = dataSource.getConnection();

		// Timestamp fromDate = null;
		String fileType = "PDF";
		if (reportInput.getFileType() != null) {
			fileType = reportInput.getFileType();
		}

		Date toDate = null;
		if (reportInput.getToDate() != null) {
			Date reportToDate = new Date(reportInput.getToDate());
			toDate = new Timestamp(reportToDate.getTime());
		}

		Date fromDate = null;
		if (reportInput.getFromDate() != null) {
			Date reportToDate = new Date(reportInput.getFromDate());
			fromDate = new Timestamp(reportToDate.getTime());
		}

		Map<String, Object> params = new HashMap<>();
		String filePath = null;
		String os = FindingOSUtil.findOs();
		if (os.equals("windows")) {
			filePath = windowPath;
		} else if (os.equals("linux")) {
			filePath = linuxPath;
		}
		InputStream jasperStream = null;
		switch (reportInput.getReportName()) {

		case ReportConstant.STOCK_VERIFICATION:
			jasperStream = new FileInputStream(new File(filePath + "jasperreports/" + reportInput.getJasperName()));
			// jasperStream =
			// this.getClass().getResourceAsStream("/jasperreports/stock_verification.jrxml");

			String pf12 = "dd-MM-yyyy";
			SimpleDateFormat fd12 = new SimpleDateFormat(pf12);
			params.put("dfromDate", fd12.format(fromDate));
			params.put("dtoDate", fd12.format(toDate));
			params.put("fromDate", fromDate);
			params.put("toDate", toDate);
			params.put("locationId", reportInput.getLocationId());
			LOGGER.info("params:-" + params);
			response.setHeader("Content-disposition", "inline; filename=" + reportInput.getReportName() + ".pdf");
			break;
			default:
				jasperStream = new FileInputStream(new File(filePath + "jasperreports/" + reportInput.getJasperName()));
				// jasperStream =
				// this.getClass().getResourceAsStream("/jasperreports/stock_verification.jrxml");

				String pf13 = "dd-MM-yyyy";
				SimpleDateFormat fd13 = new SimpleDateFormat(pf13);
				//params.put("dfromDate", fd13.format(fromDate));
				//params.put("dtoDate", fd13.format(toDate));
				//params.put("fromDate", fromDate);
				//params.put("toDate", toDate);
				//params.put("locationId", reportInput.getLocationId());
				params.put("supplierName", reportInput.getPartyId());
				params.put("authorName", reportInput.getAuthorId());
				LOGGER.info("params:-" + params);
				response.setHeader("Content-disposition", "inline; filename=" + reportInput.getReportName() + ".pdf");

		}

		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		response.setContentType("application/pdf");

		JasperDesign design = JRXmlLoader.load(jasperStream);

		JasperReport jasperReport = JasperCompileManager.compileReport(design);
		// JRResultSetDataSource jasperReports = new JRResultSetDataSource(rs);
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, params, con);

		// String
		// ImageExpression="D:/jsw/jsteelReports/src/main/resources/jasperreports/";
		// params.put("ImageExpression",ImageExpression);
		// JasperReport jasperReport = (JasperReport) JRLoader.loadObject(jasperStream);
		// JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, params,
		// con);
		String contentType;
		// contentType = ReportConstant.APPLICATION_XLS;
		// response.setContentType(contentType);
		final OutputStream outStream = response.getOutputStream();

		if (fileType.equalsIgnoreCase("XLS")) {

			contentType = ReportConstant.APPLICATION_XLS;
			String filename = reportInput.getReportName() + ReportConstant.XLS_FILE_EXTENSION;
			response.setHeader(ReportConstant.CONTENT_DISPOSITION, ReportConstant.ATTACHMENT_FILENAME + filename);
			response.setContentType(contentType);
			byte[] pdfOutput = null;
			ByteArrayOutputStream xlsReport = new ByteArrayOutputStream();
			JRXlsxExporter exporter = new JRXlsxExporter(DefaultJasperReportsContext.getInstance());
			exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
			// exporter.setParameter(JRXlsExporterParameter.IS_COLLAPSE_ROW_SPAN,Boolean.TRUE)
			// exporter.setParameter(JRExporterParameter.JASPER_PRINT,jasperPrint);

			exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(xlsReport));

			// exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, xlsReport);

			SimpleXlsxReportConfiguration configuration = new SimpleXlsxReportConfiguration();
			configuration.setOnePagePerSheet(false);
			configuration.setIgnorePageMargins(true);
			configuration.setDetectCellType(Boolean.TRUE);
			/// new config
			/*
			 * configuration.setIgnoreGraphics(Boolean.FALSE);
			 * configuration.setCollapseRowSpan(Boolean.FALSE);
			 * configuration.setDetectCellType(Boolean.TRUE);
			 * configuration.setFontSizeFixEnabled(Boolean.TRUE);
			 * configuration.setRemoveEmptySpaceBetweenColumns(Boolean.FALSE);
			 * configuration.setRemoveEmptySpaceBetweenRows(Boolean.FALSE);
			 * configuration.setIgnoreCellBorder(Boolean.FALSE);
			 * configuration.setImageBorderFixEnabled(Boolean.FALSE);
			 * configuration.setShowGridLines(Boolean.FALSE);
			 * configuration.setIgnoreCellBackground(Boolean.FALSE);
			 * configuration.setWrapText(Boolean.FALSE);
			 * configuration.setOnePagePerSheet(Boolean.TRUE);
			 * configuration.setColumnWidthRatio(1.25f);
			 */
			// end config

			// configuration.setRemoveEmptySpaceBetweenRows(true);
			// configuration.setRemoveEmptySpaceBetweenColumns(true);
			// configuration.setCollapseRowSpan(true);
			// configuration.setForcePageBreaks(false);
			// configuration.setOffsetX(1000);
			configuration.setWrapText(true);
			exporter.setConfiguration(configuration);
			exporter.exportReport();
			pdfOutput = xlsReport.toByteArray();
			response.getOutputStream().write(pdfOutput);
		} else {
			contentType = ReportConstant.APPLICATION_PDF;
			response.setContentType(contentType);
			net.sf.jasperreports.engine.JasperExportManager.exportReportToPdfStream(jasperPrint, baos);
			response.setContentLength(baos.size());
			ServletOutputStream out1 = response.getOutputStream();
			baos.writeTo(out1);
			out1.flush();
			// JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
		}

		response.getOutputStream().flush();
		response.getOutputStream().close();

	}

}
