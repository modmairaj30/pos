
import { SalesreturnsDetails } from "./salesreturnsdetail.model";

export class Salesreturns {

    id?: number;
	grossAmt?: number;
    netAmt?: number;
    creditAcc?: number;
    debitAcc?: number;
    docNo?: string;
    docDt?: Date;
    partyId?:number;
    address?: string;
    vchId?:string;
    invNo?:number;
    invDt?: Date;
    vat?: Date;
 
    vatamt?: number;
    cstamt?: number;
    tinno?: string;
    cstno?: string;
    dlno?: string;
    dlno21?: string;
    discamt?: number;
    locationId?: number;
    locationCode?: string;
    discount?: number;
    cash?: number;
    cheque?: number;
    chqNo?: string;
    chqDt?:Date;
    comment?:string;
    refNo?:number;
    refDate?:Date;
    discAmt?: number;
    
     paymentType?: any;
    card?: number;
    cardNo?: number;
    expDate?: Date;
    branch?: string;
    memberNo?: string;
    validDate?: Date;
    years?: number;
    expiryDate?: Date;
    dis?: number;
    discPay?: number;
    discamtPay?: number;
    netamtPay?: number;
    creditCharges?: number;
    creditDummy?: number;
    dcno?: string;
    dcdate?: Date;
    chqDate?: Date;
    chqAmt?: number;
    chqIssueBank?: string;
    createdBy?: string;
    updatedBy?: string;
    createdDate?: Date;
    updatedDate?: Date;
    invoiceDetList?: Array<SalesreturnsDetails>
    //   salesreturnsDetList: SalesreturnsDetails[];

}