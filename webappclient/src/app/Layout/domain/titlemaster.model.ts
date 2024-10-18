import { ProductDetail } from "./ProductDetail.model";
import { TitleMasterDetail } from "./titlemasterdetail.model";

export class TitleMaster {
  id?: number;
  prodName?: String;
  docDt?: Date;
  docNo?: string;
  uom?:string;
  productGroup?: string;
  category?: number;
  rate?: number;
  productCode?: string;
  discount?: number;
  cst?: number;
  batchNo?: string;
  description?: string;
  subject?: string;
  author?: string;
  publisher?: string;
  publishedYear?: string;
  isbnCode?: string;
  binNo?: string;
  rackNo?: string;
  updatedBy?: String;
  createdBy?: String;
  createdDate?: Date;
  updatedDate?: Date;
  productDetailList?: Array<ProductDetail>
}
