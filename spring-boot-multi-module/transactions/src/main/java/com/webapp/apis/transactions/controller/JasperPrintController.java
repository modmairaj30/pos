package com.webapp.apis.transactions.controller;

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
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.apis.transaction.constants.TransactionConstants;
import com.webapp.apis.transactions.model.ReportInput;
import com.webapp.apis.transactions.utility.FindingOSUtil1;
import com.webapp.apis.utility.SessionUtility;

import net.sf.jasperreports.engine.DefaultJasperReportsContext;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
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
@RequestMapping(value = "jasperreport/print")
public class JasperPrintController {

	private static final Logger LOGGER = LoggerFactory.getLogger(JasperPrintController.class);

	@Autowired
	DataSource dataSource;
	@Inject
	private SessionUtility sessionUtility;

	@Value("${app.filePath.win}")
	public String windowPath;
	@Value("${app.filePath.linux}")
	public String linuxPath;

	@RequestMapping(value = "/generateprint", method = RequestMethod.GET)
	public void getRpt1(HttpServletResponse response, ReportInput reportInput)
			throws JRException, IOException, SQLException {
		LOGGER.info("JasperPrintController getRpt1 method");

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
		String os = FindingOSUtil1.findOs();
		if (os.equals("windows")) {
			filePath = windowPath;
		} else if (os.equals("linux")) {
			filePath = linuxPath;
		}
		InputStream jasperStream = null;
		switch (reportInput.getReportName()) {

		case TransactionConstants.PURCHASE_INVOICE:
			jasperStream = new FileInputStream(new File(filePath + "jasperreports/PurchaseInvoice(NPH).jrxml"));
			// jasperStream =
			// this.getClass().getResourceAsStream("/jasperreports/stock_verification.jrxml");

			params.put("param_id", reportInput.getId());
			LOGGER.info("params:-" + params);
			response.setHeader("Content-disposition", "inline; filename=Stock verification.pdf");
			break;

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

			contentType = TransactionConstants.APPLICATION_XLS;
			String filename = reportInput.getReportName() + TransactionConstants.XLS_FILE_EXTENSION;
			response.setHeader(TransactionConstants.CONTENT_DISPOSITION, TransactionConstants.ATTACHMENT_FILENAME + filename);
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
			contentType = TransactionConstants.APPLICATION_PDF;
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

	@RequestMapping(value = "/generateZ", method = RequestMethod.GET)
	public ResponseEntity<byte[]> export(@RequestParam(value = "sampleNo", required = true) String sampleNo)
			throws Exception {

		LOGGER.info("JasperReportController's export method");
		Connection con = dataSource.getConnection();
		InputStream jasperStream = null;
		Map<String, Object> params = new HashMap<>();
		String filePath = null;
		String os = FindingOSUtil1.findOs();
		if (os.equals("windows")) {
			filePath = windowPath;
		} else if (os.equals("linux")) {
			filePath = linuxPath;
		}
		params.put("sampleNo", sampleNo);
		/*
		 * String filepath = this.getClass().getClassLoader().getResource("").getPath();
		 * String fullPath = URLDecoder.decode(filepath, "UTF-8"); String pathArr[] =
		 * fullPath.split("/jsteelWeb/"); fullPath = pathArr[0]; fullPath = fullPath +
		 * "/"; System.out.println(fullPath);
		 */
		jasperStream = new FileInputStream(new File(filePath + "jasperreports//z.jasper"));
		// jasperStream =
		// this.getClass().getResourceAsStream("/jasperreports/z.jasper");
		JasperPrint jprint = (JasperPrint) JasperFillManager.fillReport(jasperStream, params, con);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		JasperExportManager.exportReportToPdfStream(jprint, outputStream);

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.parseMediaType("application/pdf"));
		headers.add("content-disposition", "inline; filename=z.pdf");
		headers.set("Pragma", "no-cache");
		headers.set("Cache-Control", "no-cache");

		outputStream.flush();
		return new ResponseEntity<>(outputStream.toByteArray(), headers, HttpStatus.OK);

	}

}
