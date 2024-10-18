import { Component, OnInit } from '@angular/core';
import { Partymaster } from '../../domain';


@Component({
  selector: 'app-partydetail',
  templateUrl: './partydetail.component.html',
  styleUrls: ['./partydetail.component.css']
})
export class PartydetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  partymaster = new Partymaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editPartyMasterEntry(partymaster: any) {
    this.editmod=true;
    this.partymaster = partymaster;
    this.active = 1;
  }
  editEntry($event){
    this.active =2;
   // this.editmod=false;
    this.partymaster = new Partymaster();
  }
  clear() {
    this.editmod=false;
    this.partymaster = new Partymaster();
  }
  setTab(){
    this.editmod=false;
    this.partymaster = new Partymaster();
  }
}
