import { StockVerificationDetail } from "./stockverificationdetail.model";

export class StockVerification {
    
    id?: number;
    docDt?: Date;
    docNo?: string;
    locationId?: any;
    userId?: string;
   verifiedBy?: string;
    dummy?: string;
    stockVerificationDetailList?: Array<StockVerificationDetail>
        
    
}