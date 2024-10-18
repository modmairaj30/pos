package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.Invoice;
import com.webapp.apis.transactions.domain.StockReceipts;
import com.webapp.apis.transactions.domain.StockReceiptsDet;
import com.webapp.apis.transactions.model.StockReceiptsDetFormBean;
import com.webapp.apis.transactions.model.StockReceiptsFormBean;

public class StockReceiptsMapper {
	private static final Logger LOGGER = LoggerFactory.getLogger(StockReceiptsMapper.class);

	public static StockReceipts mapFormToDomain(StockReceiptsFormBean stockReceiptsFormBean) {
		StockReceipts stockReceipts = new StockReceipts();
		List<StockReceiptsDet> StockReceiptsDetailList = new ArrayList<>();
		
		stockReceipts.setId(stockReceiptsFormBean.getId());
		stockReceipts.setDocDt(stockReceiptsFormBean.getDocDt());
		stockReceipts.setDocNo(stockReceiptsFormBean.getDocNo());
		stockReceipts.setLocationId(stockReceiptsFormBean.getLocationId());
		stockReceipts.setTolocation(stockReceiptsFormBean.getTolocation());
		stockReceipts.setTruckNo(stockReceiptsFormBean.getTruckNo());
		stockReceipts.setDriverName(stockReceiptsFormBean.getDriverName());
		stockReceipts.setComment(stockReceiptsFormBean.getComment());
		stockReceipts.setEmployee(stockReceiptsFormBean.getEmployee());
		stockReceipts.setGrossAmt(stockReceiptsFormBean.getGrossAmt());
		stockReceipts.setDiscAmt(stockReceiptsFormBean.getDiscAmt());
		stockReceipts.setNetAmt(stockReceiptsFormBean.getNetAmt());
		stockReceipts.setFldDocno(stockReceiptsFormBean.getFldDocno());
		stockReceipts.setFromLocation(stockReceiptsFormBean.getFromLocation());
		
		
		
		List<StockReceiptsDetFormBean> formdetailList = (List<StockReceiptsDetFormBean>) stockReceiptsFormBean.getStocktransfersDetailList();
		for (StockReceiptsDetFormBean detailFormbeam : formdetailList) {
			StockReceiptsDet detailDomain = new StockReceiptsDet();

			detailDomain.setId(detailFormbeam.getId());
			detailDomain.setQty(detailFormbeam.getQty());
			detailDomain.setRate(detailFormbeam.getRate());
			detailDomain.setAmount(detailFormbeam.getAmount());
			detailDomain.setBatchNo(detailFormbeam.getBatchNo());
			detailDomain.setExpDt(detailFormbeam.getExpDt());
			detailDomain.setFldMfgdt(detailFormbeam.getFldMfgdt());
			detailDomain.setPack(detailFormbeam.getPack());
			detailDomain.setProductId(detailFormbeam.getProductId());
			detailDomain.setBatchTracker(detailFormbeam.getBatchTracker());
			detailDomain.setFldQty2(detailFormbeam.getFldQty2());
			detailDomain.setFldLength(detailFormbeam.getFldLength());
			detailDomain.setPurity(detailFormbeam.getPurity());
			detailDomain.setFldQty1(detailFormbeam.getFldQty1());
			detailDomain.setUom(detailFormbeam.getUom());
			detailDomain.setPcsNet(detailFormbeam.getPcsNet());
			detailDomain.setTradingBOM(detailFormbeam.getTradingBOM());
			detailDomain.setFldQty3(detailFormbeam.getFldQty3());
			detailDomain.setDiscAmt(detailFormbeam.getDiscAmt());
			detailDomain.setNetAmt(detailFormbeam.getNetAmt());
			detailDomain.setVchId(detailFormbeam.getVchId());
			detailDomain.setProductName(detailFormbeam.getProductName());
			detailDomain.setProductGroup(detailFormbeam.getProductGroup());
			detailDomain.setProductCode(detailFormbeam.getProductCode());
			detailDomain.setAuthor(detailFormbeam.getAuthor());
			detailDomain.setIsbnCode(detailFormbeam.getIsbnCode());
			detailDomain.setDiscPc(detailFormbeam.getDiscPc());
			detailDomain.setPublisher(detailFormbeam.getPublisher());
			detailDomain.setSupplier(detailFormbeam.getSupplier());
			detailDomain.setFldSrate(detailFormbeam.getFldSrate());
			detailDomain.setFldDisc(detailFormbeam.getFldDisc());
			/*detailDomain.setChqNo(detailFormbeam.getChqNo());
			detailDomain.setChqDate(detailFormbeam.getChqDate());
			detailDomain.setChqAmt(detailFormbeam.getChqAmt());
			detailDomain.setChqIssueBank(detailFormbeam.getChqIssueBank());*/
			
			detailDomain
			.setBaseId(detailFormbeam.getBaseId() != null ? new Invoice(detailFormbeam.getBaseId()) : null);

			// BeanUtils.copyProperties(detailFormbeam, detailDomain);
			StockReceiptsDetailList.add(detailDomain);

			
		}
		stockReceipts.setStocktransfersDetailList(StockReceiptsDetailList);
		return stockReceipts;
			
	}
	
	public static StockReceiptsFormBean mapDomainToForm(StockReceipts stockReceipts) {
		StockReceiptsFormBean stockReceiptsFormBean = new StockReceiptsFormBean();
		List<StockReceiptsDetFormBean> stockReceiptsDetailList = new ArrayList<>();

		stockReceipts.setId(stockReceipts.getId());
		stockReceiptsFormBean.setDocDt(stockReceipts.getDocDt());
		stockReceiptsFormBean.setDocNo(stockReceipts.getDocNo());
		stockReceiptsFormBean.setLocationId(stockReceipts.getLocationId());
		stockReceiptsFormBean.setTolocation(stockReceipts.getTolocation());
		stockReceiptsFormBean.setTruckNo(stockReceipts.getTruckNo());
		stockReceiptsFormBean.setDriverName(stockReceipts.getDriverName());
		stockReceiptsFormBean.setComment(stockReceipts.getComment());
		stockReceiptsFormBean.setEmployee(stockReceipts.getEmployee());
		stockReceiptsFormBean.setGrossAmt(stockReceipts.getGrossAmt());
		stockReceiptsFormBean.setDiscAmt(stockReceipts.getDiscAmt());
		stockReceiptsFormBean.setNetAmt(stockReceipts.getNetAmt());
		stockReceiptsFormBean.setFldDocno(stockReceipts.getFldDocno());
		stockReceiptsFormBean.setFromLocation(stockReceipts.getFromLocation());
		
		
		List<StockReceiptsDet> formdetailList = stockReceipts.getStocktransfersDetailList();
		for (StockReceiptsDet detailDomain : formdetailList) {
			StockReceiptsDetFormBean detailFormbean = new StockReceiptsDetFormBean();

			detailFormbean.setId(detailDomain.getId());
			detailFormbean.setBaseId(detailDomain.getBaseId().getId());
			detailFormbean.setQty(detailDomain.getQty());
			detailFormbean.setRate(detailDomain.getRate());
			detailFormbean.setAmount(detailDomain.getAmount());
			detailFormbean.setBatchNo(detailDomain.getBatchNo());
			detailFormbean.setExpDt(detailDomain.getExpDt());
			detailFormbean.setFldMfgdt(detailDomain.getFldMfgdt());
			detailFormbean.setPack(detailDomain.getPack());
			detailFormbean.setProductId(detailDomain.getProductId());
			detailFormbean.setBatchTracker(detailDomain.getBatchTracker());
			detailFormbean.setFldQty2(detailDomain.getFldQty2());
			detailFormbean.setFldLength(detailDomain.getFldLength());
			detailFormbean.setPurity(detailDomain.getPurity());
			detailFormbean.setFldQty1(detailDomain.getFldQty1());
			detailFormbean.setUom(detailDomain.getUom());
			detailFormbean.setPcsNet(detailDomain.getPcsNet());
			detailFormbean.setTradingBOM(detailDomain.getTradingBOM());
			detailFormbean.setFldQty3(detailDomain.getFldQty3());
			detailFormbean.setDiscAmt(detailDomain.getDiscAmt());
			detailFormbean.setNetAmt(detailDomain.getNetAmt());
			detailFormbean.setVchId(detailDomain.getVchId());
			detailFormbean.setProductName(detailDomain.getProductName());
			detailFormbean.setProductGroup(detailDomain.getProductGroup());
			detailFormbean.setProductCode(detailDomain.getProductCode());
			detailFormbean.setAuthor(detailDomain.getAuthor());
			detailFormbean.setIsbnCode(detailDomain.getIsbnCode());
			detailFormbean.setDiscPc(detailDomain.getDiscPc());
			detailFormbean.setPublisher(detailDomain.getPublisher());
			detailFormbean.setSupplier(detailDomain.getSupplier());
			detailFormbean.setFldSrate(detailDomain.getFldSrate());
			detailFormbean.setFldDisc(detailDomain.getFldDisc());
			/*detailFormbean.setChqNo(detailDomain.getChqNo());
			detailFormbean.setChqDate(detailDomain.getChqDate());
			detailFormbean.setChqAmt(detailDomain.getChqAmt());
			detailFormbean.setChqIssueBank(detailDomain.getChqIssueBank());*/
			stockReceiptsDetailList.add(detailFormbean);
		}
		
		stockReceiptsFormBean.setStocktransfersDetailList(stockReceiptsDetailList);
		return stockReceiptsFormBean;
	}
	
	public static List<StockReceiptsFormBean> mapDomainListToFormList(List<StockReceipts> StockReceiptsList) {
		List<StockReceiptsFormBean> StockReceiptsListFormBeanList = new ArrayList<>();
		for (StockReceipts StockReceipts : StockReceiptsList) {
			StockReceiptsListFormBeanList.add(mapDomainToForm(StockReceipts));
		}
		return StockReceiptsListFormBeanList;

	}
}
