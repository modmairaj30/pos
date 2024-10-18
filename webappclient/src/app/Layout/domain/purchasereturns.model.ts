import { PurchasereturnsDetail } from "./purchasereturnsdetails.model";

export class Purchasereturn {
id?: number;
creditAcc?: number;
debitAcc?: number;
docNo?: string;
docDt?: Date;
partyId?: any;
address?: string;
grossAmt?: number;
netAmt?: number;
vchId?: string;
vat?: number;
locationId?: any;
invNo?: string;
purInvdt?: Date;
vATPc?: number;
discountAmt?: number;
totalQty?:number;
discPc?: number;
discAmt?: number;
purchaseInvoiveDetList?: Array<PurchasereturnsDetail>
}