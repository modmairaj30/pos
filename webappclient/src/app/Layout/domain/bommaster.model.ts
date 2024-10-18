import { BomDetail } from "./bomdetail.model";

export class Bom {
  id?: number;
  prodName?: String;
  docDt?: Date;
  docNo?: number;
  uom?: String;
  qty?: number;
  rate?: number;
  bomName?: number;
  description?: string;
  
  bomDetailList?: Array<BomDetail>
    
  
}
