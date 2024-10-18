import { StockEntryDetail } from "./stockentrydetail.model";

export class StockEntry {
    
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
    stockEntryDetailList?: Array<StockEntryDetail>
        
    
}