import { Injectable } from '@angular/core';  
  
@Injectable({providedIn: 'root'})  
export class LocationService {  
  
 
  private locationList: any[] = [];
  
  setOption(value) {  
    debugger;  
    this.locationList = value;  
  }  
  
  getOption() {  
    return this.locationList;  
  }  
}  