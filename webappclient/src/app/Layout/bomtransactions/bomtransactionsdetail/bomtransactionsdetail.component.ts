import { Component, OnInit } from '@angular/core';
import { BomTransaction } from '../../domain/bomtransaction.model';

@Component({
  selector: 'app-bomtransactionsdetail',
  templateUrl: './bomtransactionsdetail.component.html',
  styleUrls: ['./bomtransactionsdetail.component.sass']
})
export class BomtransactionsdetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
   bomtransaction = new BomTransaction();
  
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
   // this.editmod=false;
   // this.titlemaster = titlemaster;
  }
  editBomTransactionsentry(bomtransaction: any) {
    
    this.editmod=true;
    this.bomtransaction = bomtransaction;
    this.active = 1;
  }
editEntry($event){
    this.active =2;
   // this.editmod=false;
    this.bomtransaction = new BomTransaction();
  }
  clear() {
 this.editmod=false;
    this.bomtransaction = new BomTransaction();
  }
setTab(){
  this.editmod=false;
  this.bomtransaction = new BomTransaction();
}

}
