import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bom } from "../domain/bom.model";

@Injectable({providedIn:'root'})
export class BomProductService {
   
  constructor(private http: HttpClient) {}
  saveBomMaster(bom:Bom){

    console.log(bom);
   return this.http.post("https://telugu-university-default-rtdb.firebaseio.com/bom.json",bom)

  }

  
}
