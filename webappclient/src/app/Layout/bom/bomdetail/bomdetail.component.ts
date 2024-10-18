import { Component, OnInit } from '@angular/core';
import {  Bom } from '../../domain';


@Component({
  selector: 'app-bomdetail',
  templateUrl: './bomdetail.component.html',
  styleUrls: ['./bomdetail.component.css']
})
export class BomdetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  bom = new Bom();
  
  constructor() { }

  ngOnInit(): void {
    this.active =1;
  }

  editEntry(){
    this.active =2;
this.bom = new Bom();
  }

  editBomEntry(bom: any) {
    debugger;
    this.bom = bom;
    this.editmod=true;
    this.active = 1;
  }

  clear() {
    this.editmod=false;
    this.bom = new Bom();
  }

  setTab(){
    this.editmod=false;
      this.bom = new Bom();
  }

  editEntry1(){
    this.active =3;
    this.bom = new Bom();
   // this.bom.invoiceDetList = this.products2;
  }

  

}
