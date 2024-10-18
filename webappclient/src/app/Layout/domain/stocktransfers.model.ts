import { StockTransferDetail } from "./stocktransfersdetail.model";

export class StockTransfer {
    id?: number;
    locationId?: number;
    docDt?: Date;
    docNo?: string;
    truckNo?: string;
    driverName?: string;
    comment?: string;
    tolocation?: number;
    employee?: string;
    grossAmt?: number;
    netAmt?: number;
    discAmt?: number;
    fldDocno?: string;
    stocktransfersDetailList?: Array<StockTransferDetail>
   
}