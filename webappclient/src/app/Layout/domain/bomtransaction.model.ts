import { BomTransactionDetail } from "./bomtransactiondetail.model";

export class Bomtransaction {
  id?: number;

  billNo?: string;
  billDt?: Date;
  locationId?:any;
  totQty?: number=0.00;
  totAmt?: number=0.00;
  totDiscount?: number=0.00;
  cashRecieved?: number=0.00;
  cashReturn?: number=0.00;
  createdBy?: string;
  updatedBy?: string;
  createdDate?: Date;
  updatedDate?: Date;
  bomDetailList?: Array<BomTransactionDetail>
  
  
  
}
