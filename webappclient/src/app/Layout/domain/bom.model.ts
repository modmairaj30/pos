import { BomDetail } from "./bomdetail.model";

export class Bom {
  id?: number;
  prodName?: string;
  prodCode?: string;
  productId?: any;
  uom?: String;
  qty?: number;
  rate?: number;
   bomName?: number;
   description?: string;
  createdBy?: string;
    updatedBy?: string;
    createdDate?: Date;
    updatedDate?: Date;
  bomDetailList?: Array<BomDetail>
    
  
}
