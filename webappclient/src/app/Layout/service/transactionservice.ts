import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  ServerSidePagination, StockVerification,Payment, PurchaseInvoice, Receipt,StockReceipts,  Purchasereturn, StockTransfer, SalesInvoice, StockEntry, StockRequisition, ReportInput, Salesreturns, Bomtransaction, Bom } from '../domain';
import { SearchCriteria } from '../domain/searchCriteria.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
 
  public actionUrl: string;
  public headers: Headers;

  constructor(private http: HttpClient) {
    this.actionUrl = environment.apiUrl + '/transaction';
  }

  saveStockVerification(stockVerification:StockVerification): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveStockVerification',stockVerification,httpOptions);
  }

  findStockVerification(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findStockVerification',searchCriteria,httpOptions);
  }

  getStockVerification(): Observable<any> {
    
    return this.http.get(this.actionUrl+ '/getAllStockVerification', { responseType: 'json' });
  }
  getStockReceipts(): Observable<any> {
    
    return this.http.get(this.actionUrl+ '/getAllStockReceipts', { responseType: 'json' });
  }
  savePayments(payments:Payment): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/savePayments',payments,httpOptions);
  }
  findPayments(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findPayments',searchCriteria,httpOptions);
  }
  getPayments(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllPayments?page='+serverSidePagination.page+'&size='+serverSidePagination.size, { responseType: 'json' });
  }
  saveReceipts(receipt:Receipt): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveReceipts',receipt,httpOptions);
  }
  getReceipts(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllReceipts?page='+serverSidePagination.page+'&size='+serverSidePagination.size, { responseType: 'json' });
  }
  findReceipt(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findReceipt',searchCriteria,httpOptions);
  }
  getPurchasereturns(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllPurchasereturns?page='+serverSidePagination.page+'&size='+serverSidePagination.size, { responseType: 'json' });
  }
  savePurchaseReturns(purchasereturn:Purchasereturn): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/savePurchasereturns',purchasereturn,httpOptions);
  }
  findPurchaseReturns(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findPurchaseReturn',searchCriteria,httpOptions);
  }
  getPurchaseInvoice(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllPurchaseInvoive?page='+serverSidePagination.page+'&size='+serverSidePagination.size, { responseType: 'json' });
  }
  savePurchaseInvoice(purchaseInvoice:PurchaseInvoice): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/savePurchaseInvoice',purchaseInvoice,httpOptions);
  }
  findPurchaseInvoice(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findPurchaseInvoice',searchCriteria,httpOptions);
  }

  getStockReceiptsPagination(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllStockReceipts?page='+serverSidePagination.page+'&size='+serverSidePagination.size, { responseType: 'json' });
  }
  

  getStockVerificationPagination(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllStockVerification?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }

 

  saveStockTransfer(stockTransfer:StockTransfer): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveStockTransfer',stockTransfer,httpOptions);
  }

  findStockTransfer(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findStockTransfer',searchCriteria,httpOptions);
  }

  getStockTransfer(): Observable<any> {
    
    return this.http.get(this.actionUrl+ '/getAllStockTransfer', { responseType: 'json' });
  }

  getStockTransferPagination(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllStockTransfer?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }

  getAllStockRequisition(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllStockRequisition?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }
  saveStockRequisition(stockRequisition:StockRequisition): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveStockRequisition',stockRequisition,httpOptions);
  }
  findStockRequisition(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findStockRequisition',searchCriteria,httpOptions);
  }

  getAllStockEntry(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllStockEntry?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }
  saveStockEntry(stockEntry:StockEntry): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveStockEntry',stockEntry,httpOptions);
  }
  findStockEntry(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findStockEntry',searchCriteria,httpOptions);
  }
  saveSalesinvoice(salesinvoice:SalesInvoice): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveInvoice',salesinvoice,httpOptions);
  }

  getAllsalesinvoice(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllInvoice?page='+serverSidePagination.page+'&size='+serverSidePagination.size, { responseType: 'json' });
  }

  findInvoice(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findInvoice',searchCriteria,httpOptions);
  }
  saveStockReceipts(stockReceipts:StockReceipts): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveStockReceipt',stockReceipts,httpOptions);
  }
  savePurchasereturn(purchasereturn:Purchasereturn): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/savePurchasereturn',purchasereturn,httpOptions);
  } 
    findStocReceipts(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findStockReceipts',searchCriteria,httpOptions);
  } 

  findSalesreturns(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findSalesreturns',searchCriteria,httpOptions);
  } 

  saveSalesreturns(salesreturns:Salesreturns): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveSalesReturns',salesreturns,httpOptions);
  }

  /*getSalesreturns(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllSalesreturns?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }*/

  getAllsalesreturns(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllSalesReturns?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }

  getSalesreturnsPagination(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getSalesreturnsPagination?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }

  
  findBomtransaction(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findBomtransaction',searchCriteria,httpOptions);
  } 

  saveBomtransaction(bomtransaction:Bomtransaction): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveBomtransaction',bomtransaction,httpOptions);
  }

  /*getBomtransaction(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllBomtransaction?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }*/

  getAllBomtransaction(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllBomtransaction?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }

  getBomtransactionPagination(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getBomtransactionPagination?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }

  
  





}
