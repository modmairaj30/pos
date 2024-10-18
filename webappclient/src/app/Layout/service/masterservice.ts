import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Partymaster } from "src/app/Layout/domain/partymaster";
import { environment } from "src/environments/environment";
import {
  Employeemaster,
  ServerSidePagination,
  Locationmaster,
  LookUpFormBean,
} from "../domain";
import { Departmentmaster } from "../domain/departmentmaster.model";
import { ContraLocationmaster } from "../domain/contralocationmsater.model";
import { Authormaster } from "../domain/authormaster.model";
import { Categorymaster } from "../domain/categoryMaster.model";
import { ProductGroupMaster } from "../domain/ProductGroupMaster.model";
import { Subjectmaster } from "../domain/subjectsMaster.model";
import { PaymentModemaster } from "../domain/paymentmodemaster.model";
import { Designationmaster } from "../domain/designationmaster.model";
import { TitleMaster } from "../domain/titlemaster.model";
import { Membershipmaster } from "../domain/membershipmaster.model";
import { SearchCriteria } from "../domain/searchCriteria.model";
import { BomComponent } from "../bom/Bom.component";
import { Bom } from "../domain/bom.model";
import { Bomtransaction } from "../domain/bomtransaction.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

const httpOptions1 = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }).set(
    "Accept",
    "application/json"
  ),
  // headers.append({ 'Accept': 'application/json' });
  //headers=headers.append('Access-Control-Allow-Origin', '*')
  //headers=headers.append('content-type','application/x-www-form-urlencoded')
};

@Injectable({
  providedIn: "root",
})
export class MasterService {
  public actionUrl: string;
  public headers: Headers;

  constructor(private http: HttpClient) {
    this.actionUrl = environment.apiUrl + "/masters";
  }

  getPublicContent(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllPartys", {
      responseType: "json",
    });
  }

  savePartyMaster(partymaster: Partymaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/savePartyMaster",
      partymaster,
      httpOptions
    );
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllEmployees", {
      responseType: "json",
    });
  }
  saveEmployeeMaster(employeemaster: Employeemaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveEmployeeMaster",
      employeemaster,
      httpOptions
    );
  }

  getAllTitleMaster(
    serverSidePagination: ServerSidePagination
  ): Observable<any> {
    return this.http.get(
      this.actionUrl +
        "/getAllTitleMaster?page=" +
        serverSidePagination.page +
        "&size=" +
        serverSidePagination.size,
      { responseType: "json" }
    );
  }

  saveTitleMaster(titlemaster: TitleMaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveTitleMaster",
      titlemaster,
      httpOptions
    );
  }
  findTitleMaster(searchCriteria: SearchCriteria): Observable<any> {
    return this.http.post(
      this.actionUrl + "/findTitleMaster",
      searchCriteria,
      httpOptions
    );
  }
  findPartyMaster(searchCriteria: SearchCriteria): Observable<any> {
    return this.http.post(
      this.actionUrl + "/findPartyMaster",
      searchCriteria,
      httpOptions
    );
  }
  findAuthormaster(searchCriteria: SearchCriteria): Observable<any> {
    return this.http.post(
      this.actionUrl + "/findAuthorMaster",
      searchCriteria,
      httpOptions
    );
  }

  getAllPartys(serverSidePagination: ServerSidePagination): Observable<any> {
    return this.http.get(
      this.actionUrl +
        "/getAllPartys?page=" +
        serverSidePagination.page +
        "&size=" +
        serverSidePagination.size,
      { responseType: "json" }
    );
  }

  getAllLocations(): Observable<any> {
    debugger;
    return this.http.get(this.actionUrl + "/getAllLocations", {
      responseType: "json",
    });
  }

  saveLocationMaster(locationmaster: Locationmaster): Observable<any> {
    //http://localhost:8080/webapp/masters/saveLocationMaster
    return this.http.post(
      this.actionUrl + "/saveLocationMaster",
      locationmaster,
      httpOptions
    );
  }

  getAllDepartment(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllDepartment", {
      responseType: "json",
    });
  }

  saveDepartmentMaster(departmentmaster: Departmentmaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveDepartmentMaster",
      departmentmaster,
      httpOptions
    );
  }

  getAllContralocation(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllContralocation", {
      responseType: "json",
    });
  }

  saveContraLocationMaster(
    contraLocationmaster: ContraLocationmaster
  ): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveContraLocationMaster",
      contraLocationmaster,
      httpOptions
    );
  }

  getAllItem(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllItem", {
      responseType: "json",
    });
  }

  saveItemmaster(authormaster: Authormaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveItemMaster",
      authormaster,
      httpOptions
    );
  }

  getAllCategory(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllCategory", {
      responseType: "json",
    });
  }

  saveCategorymaster(categorymaster: Categorymaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveCategoryMaster",
      categorymaster,
      httpOptions
    );
  }

  getAllproductGroup(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllProductGroup", {
      responseType: "json",
    });
  }

  saveproductGroupMaster(
    productGroupMaster: ProductGroupMaster
  ): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveProductGroupMaster",
      productGroupMaster,
      httpOptions
    );
  }

  getAllSubject(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllSubject", {
      responseType: "json",
    });
  }
  saveSubjectmaster(subjectmaster: Subjectmaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveSubjectMaster",
      subjectmaster,
      httpOptions
    );
  }
  
  getAllpaymentmsater(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllPaymentmode", {
      responseType: "json",
    });
  }

  savePaymnetModemaster(paymentModemaster: PaymentModemaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/savePaymnetModeMaster",
      paymentModemaster,
      httpOptions
    );
  }

  getAlldesignationmaster(): Observable<any> {
    return this.http.get(this.actionUrl + "/getAllDesignation", {
      responseType: "json",
    });
  }

  saveDesignationmaster(designationmaster: Designationmaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveDesignationMaster",
      designationmaster,
      httpOptions
    );
  }
  findBom(searchCriteria:SearchCriteria): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/findBomMaster',searchCriteria,httpOptions);
  } 

  saveBom(bom:Bom): Observable<any> {
    
    return this.http.post(this.actionUrl+ '/saveBomMaster',bom,httpOptions);
  }

  /*getBom(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllBom?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }*/

  getAllBom(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllBomMaster?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }

  getBomPagination(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getBomPagination?page='+serverSidePagination.page+'&size='+serverSidePagination.size+'&location='+sessionStorage.getItem('location'), { responseType: 'json' });
  }
  saveMembershipMaster(membershipmaster: Membershipmaster): Observable<any> {
    return this.http.post(
      this.actionUrl + "/saveMembershipMaster",
      membershipmaster,
      httpOptions
    );
  }

  getAllMembershipMaster(
    serverSidePagination: ServerSidePagination
  ): Observable<any> {
    return this.http.get(
      this.actionUrl +
        "/getAllMembers?page=" +
        serverSidePagination.page +
        "&size=" +
        serverSidePagination.size,
      { responseType: "json" }
    );
  }

  getLookupValues(lookUpFormBean: LookUpFormBean): Observable<any> {
    return this.http
      .post(this.actionUrl + "/getLookUpValues", lookUpFormBean, httpOptions)
      .pipe(
        catchError((err) => {
          console.error("error cought in service", err);
          return throwError(err);
        })
      );
  }

  getMultipleDropdwonValues(
    listLookUpFormBean: Array<LookUpFormBean>
  ): Observable<any> {
    return this.http
      .post(
        this.actionUrl + "/getMultipleDropdwonValues",
        listLookUpFormBean,
        httpOptions
      )
      .pipe(
        catchError((err) => {
          console.error("error cought in service", err);
          return throwError(err);
        })
      );
  }
}
