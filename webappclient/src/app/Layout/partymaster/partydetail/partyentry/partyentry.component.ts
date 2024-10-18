import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';

import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { Partymaster } from 'src/app/Layout/domain/partymaster.model';
import { MasterService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-partyentry',
  templateUrl: './partyentry.component.html',
  styleUrls: ['./partyentry.component.scss']
})
export class PartyentryComponent implements OnInit {

  @Output()
  editEntry = new EventEmitter();
  @Input()
  editmod: boolean = false;
  parties: any[] = [];
  map = new Map();
  error: string;
  errorMessage: string
  @Input()
  public partymaster = new Partymaster();
  filteredParties: any[];

  lookUpFormBean3 = new LookUpFormBean();
  listLookUpFormBean: LookUpFormBean[] = new Array();


  constructor(private userService: UserService, private masterService: MasterService, private messageService: MessageService) { }

  ngOnInit(): void {

    /*
    this.lookUpFormBean.query="SELECT max(id)+1 id FROM tbl_party_info";
    this.userService.getLookupValues(this.lookUpFormBean).subscribe(
      data => {
        
        let temp =JSON.parse(JSON.stringify(data.data));
        this.count= parseInt(temp[0].id);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
*/
    /////list


    this.lookUpFormBean3.query = "SELECT id,type_name FROM tbl_party_type";
    this.lookUpFormBean3.listName = "LIST3";
    this.listLookUpFormBean.push(this.lookUpFormBean3);

    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.parties = JSON.parse(JSON.stringify(data.data.LIST3));
        if (this.editmod) {
          this.editmode();
        }
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );

  }




  filterParty(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.parties.length; i++) {
      let party = this.parties[i];
     // if (party.type_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (party.type_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(party);
      }
    }

    this.filteredParties = filtered;
  }



  save() {
    let copy = JSON.parse(JSON.stringify(this.partymaster))
    copy.partyType = copy.partyType.type_id;
    this.masterService.savePartyMaster(copy).subscribe(
      data => {
        debugger;
        if (data.statusCode == "OK") {
          this.showSuccess();
        }
        else {
          debugger;
          this.errorMessage = data.webAppException.webAppError[0].reason;
          this.showFail(this.errorMessage);
        }

      },
      error => {
        debugger;
        console.error('error caught in component')
        this.errorMessage = error;
        this.error = error;
        //this.loading = false;

        this.map = JSON.parse(error.error).message;
      }
    );

  }
  editmode() {
       this.partymaster.partyType = this.parties.find(x => x.type_id == this.partymaster.partyType);
    }

  showSuccess() {
    this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value: string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail: value });
  }
}




