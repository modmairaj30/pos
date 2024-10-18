package com.webapp.apis.transactions.model;

import java.io.Serializable;
import java.util.List;

import com.webapp.apis.transactions.domain.PurchaseInvoive;
import com.webapp.apis.transactions.domain.Purchasereturns;
import com.webapp.apis.transactions.domain.Salesreturns;
import com.webapp.apis.transactions.domain.StockInfo;
import com.webapp.apis.transactions.domain.StockReceipts;
import com.webapp.apis.transactions.domain.Stocktransfers;

public class StockObjects implements Serializable{
private static final long serialVersionUID = 1L;
private List<StockInfo> stockInfoList;
private List<StockInfo> stockInfoLastRowTrueList;
private List<StockInfo> stockInfoProductListLastRowFalse;
private List<StockInfo> stockInfoUpdateList;
private List<StockInfo> stockInfoDeleteList;
private PurchaseInvoive purchaseInvoive;
private Purchasereturns purchasereturns;
private StockReceipts stockReceipts;
private Salesreturns salesreturns;
private Stocktransfers stockTransfers;

public List<StockInfo> getStockInfoList() {
	return stockInfoList;
}
public void setStockInfoList(List<StockInfo> stockInfoList) {
	this.stockInfoList = stockInfoList;
}
public List<StockInfo> getStockInfoProductListLastRowFalse() {
	return stockInfoProductListLastRowFalse;
}
public void setStockInfoProductListLastRowFalse(List<StockInfo> stockInfoProductListLastRowFalse) {
	this.stockInfoProductListLastRowFalse = stockInfoProductListLastRowFalse;
}
public List<StockInfo> getStockInfoUpdateList() {
	return stockInfoUpdateList;
}
public void setStockInfoUpdateList(List<StockInfo> stockInfoUpdateList) {
	this.stockInfoUpdateList = stockInfoUpdateList;
}
public List<StockInfo> getStockInfoDeleteList() {
	return stockInfoDeleteList;
}
public void setStockInfoDeleteList(List<StockInfo> stockInfoDeleteList) {
	this.stockInfoDeleteList = stockInfoDeleteList;
}
public PurchaseInvoive getPurchaseInvoive() {
	return purchaseInvoive;
}
public void setPurchaseInvoive(PurchaseInvoive purchaseInvoive) {
	this.purchaseInvoive = purchaseInvoive;
}
public List<StockInfo> getStockInfoLastRowTrueList() {
	return stockInfoLastRowTrueList;
}
public void setStockInfoLastRowTrueList(List<StockInfo> stockInfoLastRowTrueList) {
	this.stockInfoLastRowTrueList = stockInfoLastRowTrueList;
}
public Purchasereturns getPurchasereturns() {
	return purchasereturns;
}
public void setPurchasereturns(Purchasereturns purchasereturns) {
	this.purchasereturns = purchasereturns;
}
public StockReceipts getStockReceipts() {
	return stockReceipts;
}
public void setStockReceipts(StockReceipts stockReceipts) {
	this.stockReceipts = stockReceipts;
}
public Salesreturns getSalesreturns() {
	return this.salesreturns;
}
public void setSalesreturns(Salesreturns salesreturns) {
	this.salesreturns = salesreturns;
}
public Stocktransfers getStockTransfers() {
	return stockTransfers;
}
public void setStockTransfers(Stocktransfers stockTransfers) {
	this.stockTransfers = stockTransfers;
}







}
