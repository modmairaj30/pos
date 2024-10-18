import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { MasterService } from 'src/app/layout/service';
import { Membershipmaster } from 'src/app/Layout/domain/membershipmaster.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-membershipentry',
  templateUrl: './membershipentry.component.html',
  styleUrls: ['./membershipentry.component.scss']
})
export class MembershipentryComponent implements OnInit {

  date = new Date();
  parentlocationList3: any[] = [];
  localList2: any[] = [];
  empList1: any[] = [];

  map = new Map();
 
  error: string;
  errorMessage:string

  @Input()
  membershipmaster = new Membershipmaster();

  constructor(private userService: UserService, private masterService: MasterService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    
    if( this.membershipmaster.validityDate == null && this.membershipmaster.validityDate == undefined){
      let date = new Date();
      this.membershipmaster.validityDate = date;
    }
    if( this.membershipmaster.expiryDate == null && this.membershipmaster.expiryDate == undefined){
      let date = new Date();
      this.membershipmaster.expiryDate = date;
    }

  }
    

  save() {
    

    let copy = JSON.parse(JSON.stringify(this.membershipmaster))

    this.masterService.saveMembershipMaster(copy).subscribe(
      data => { 
        
        debugger;
       if (data.statusCode == "OK") {
       this.showSuccess();
       }
       else{
         debugger;
         this.errorMessage = data.webAppException.webAppError[0].reason;
         this.showFail(this.errorMessage);
       }
        
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );
  }
  reset() {
    this.membershipmaster = new Membershipmaster();
  }

  showSuccess() {
    // this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value:string) {
    // this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail:value });
  }
}
