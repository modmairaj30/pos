package com.webapp.apis.transactions.mapper;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webapp.apis.transactions.domain.Invoice;
import com.webapp.apis.transactions.domain.Stocktransfers;
import com.webapp.apis.transactions.domain.StocktransfersDetail;
import com.webapp.apis.transactions.model.StocktransfersDetailFormBean;
import com.webapp.apis.transactions.model.StocktransfersFormBean;

public class StocktransfersMapper {
	private static final Logger LOGGER = LoggerFactory.getLogger(StocktransfersMapper.class);

	public static Stocktransfers mapFormToDomain(StocktransfersFormBean stocktransfersFormBean) {
		Stocktransfers stocktransfers = new Stocktransfers();
		List<StocktransfersDetail> StocktransfersDetailList = new ArrayList<>();
		
		stocktransfers.setId(stocktransfersFormBean.getId());
		stocktransfers.setLocationId(stocktransfersFormBean.getLocationId());
		stocktransfers.setDocDt(stocktransfersFormBean.getDocDt());
		stocktransfers.setDocNo(stocktransfersFormBean.getDocNo());
		stocktransfers.setComment(stocktransfersFormBean.getComment());
		stocktransfers.setCreatedBy(stocktransfersFormBean.getCreatedBy());
		stocktransfers.setCreatedDate(stocktransfersFormBean.getCreatedDate());
		stocktransfers.setDiscAmt(stocktransfersFormBean.getDiscAmt());
		stocktransfers.setDriverName(stocktransfersFormBean.getDriverName());
		stocktransfers.setEmployee(stocktransfersFormBean.getEmployee());
		stocktransfers.setFldDocno(stocktransfersFormBean.getFldDocno());
		stocktransfers.setGrossAmt(stocktransfersFormBean.getGrossAmt());
		stocktransfers.setNetAmt(stocktransfersFormBean.getNetAmt());
		stocktransfers.setTolocation(stocktransfersFormBean.getTolocation());
		stocktransfers.setTruckNo(stocktransfersFormBean.getTruckNo());
		stocktransfers.setCreatedBy(stocktransfersFormBean.getCreatedBy());
		stocktransfers.setCreatedDate(stocktransfersFormBean.getCreatedDate());
		stocktransfers.setUpdatedBy(stocktransfersFormBean.getUpdatedBy());
		stocktransfers.setUpdatedDate(stocktransfersFormBean.getUpdatedDate());
		
		List<StocktransfersDetailFormBean> formdetailList = stocktransfersFormBean.getStocktransfersDetailList();
		for (StocktransfersDetailFormBean detailFormbeam : formdetailList) {
			StocktransfersDetail detailDomain = new StocktransfersDetail();

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
			StocktransfersDetailList.add(detailDomain);
			
		}
		
		stocktransfers.setStocktransfersDetailList(StocktransfersDetailList);
		return stocktransfers;
	}
	
	
	public static StocktransfersFormBean mapDomainToForm(Stocktransfers stocktransfers) {
		StocktransfersFormBean stocktransfersFormBean = new StocktransfersFormBean();
		List<StocktransfersDetailFormBean> stocktransfersDetailList = new ArrayList<>();

		stocktransfersFormBean.setId(stocktransfers.getId());
		stocktransfersFormBean.setLocationId(stocktransfers.getLocationId());
		stocktransfersFormBean.setDocDt(stocktransfers.getDocDt());
		stocktransfersFormBean.setDocNo(stocktransfers.getDocNo());
		
		stocktransfersFormBean.setComment(stocktransfers.getComment());
		stocktransfersFormBean.setCreatedBy(stocktransfers.getCreatedBy());
		stocktransfersFormBean.setCreatedDate(stocktransfers.getCreatedDate());
		stocktransfersFormBean.setDiscAmt(stocktransfers.getDiscAmt());
		stocktransfersFormBean.setDriverName(stocktransfers.getDriverName());
		stocktransfersFormBean.setEmployee(stocktransfers.getEmployee());
		stocktransfersFormBean.setFldDocno(stocktransfers.getFldDocno());
		stocktransfersFormBean.setGrossAmt(stocktransfers.getGrossAmt());
		stocktransfersFormBean.setNetAmt(stocktransfers.getNetAmt());
		stocktransfersFormBean.setTolocation(stocktransfers.getTolocation());
		stocktransfersFormBean.setTruckNo(stocktransfers.getTruckNo());
				
		stocktransfersFormBean.setCreatedBy(stocktransfers.getCreatedBy());
		stocktransfersFormBean.setCreatedDate(stocktransfers.getCreatedDate());
		stocktransfersFormBean.setUpdatedBy(stocktransfers.getUpdatedBy());
		stocktransfersFormBean.setUpdatedDate(stocktransfers.getUpdatedDate());
		
		List<StocktransfersDetail> formdetailList = stocktransfers.getStocktransfersDetailList();
		for (StocktransfersDetail detailDomain : formdetailList) {
			StocktransfersDetailFormBean detailFormbean = new StocktransfersDetailFormBean();

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
			stocktransfersDetailList.add(detailFormbean);
			
				
		}
		
		stocktransfersFormBean.setStocktransfersDetailList(stocktransfersDetailList);
		return stocktransfersFormBean;
	}
	
	public static List<StocktransfersFormBean> mapDomainListToFormList(List<Stocktransfers> StocktransfersList) {
		List<StocktransfersFormBean> StocktransfersListFormBeanList = new ArrayList<>();
		for (Stocktransfers Stocktransfers : StocktransfersList) {
			StocktransfersListFormBeanList.add(mapDomainToForm(Stocktransfers));
		}
		return StocktransfersListFormBeanList;

	}
}
