import { StockRequistionDetail } from "./stockrequisitiondetail.model";


export class StockRequisition {
    
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
    verifiedBy?: string;
    userId?: string;
    dummy?: string;
    createdBy?: string;
    stockRequisitionDetailList?: Array<StockRequistionDetail>
    
    
}