import { Component, OnInit } from '@angular/core';
import { TitleMaster } from '../../domain/titlemaster.model';


@Component({
  selector: 'app-titlemasterdetail',
  templateUrl: './titlemasterdetail.component.html',
  styleUrls: ['./titlemasterdetail.component.css']
})
export class TitlemasterdetailComponent implements OnInit {
  active: number;
 editmod: boolean=false;
  titlemaster = new TitleMaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
   // this.editmod=false;
   // this.titlemaster = titlemaster;
  }
  editTitleMasterentry(titlemaster: any) {
    
    this.editmod=true;
    this.titlemaster = titlemaster;
    this.active = 1;
  }
editEntry($event){
    this.active =2;
   // this.editmod=false;
    this.titlemaster = new TitleMaster();
  }
  clear() {
 this.editmod=false;
    this.titlemaster = new TitleMaster();
  }
setTab(){
  this.editmod=false;
  this.titlemaster = new TitleMaster();
}
}
