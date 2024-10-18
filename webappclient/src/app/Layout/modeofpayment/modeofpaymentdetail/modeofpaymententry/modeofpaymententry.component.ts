import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService } from 'src/app/layout/service';
import { PaymentModemaster } from 'src/app/Layout/domain/paymentmodemaster.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modeofpaymententry',
  templateUrl: './modeofpaymententry.component.html',
  styleUrls: ['./modeofpaymententry.component.scss']
})
export class ModeofpaymententryComponent implements OnInit {

  parentlocationList3: any[] = [];
  localList2: any[] = [];
  empList1: any[] = [];

  map = new Map();
  error: string;
  errorMessage:string
 
  @Input()
  paymentModemaster = new PaymentModemaster();



  constructor(private userService: UserService, private masterService: MasterService,private messageService: MessageService) { }

  ngOnInit(): void {
     }
save() {

    let copy = JSON.parse(JSON.stringify(this.paymentModemaster))
  //  copy.parent = copy.parent.id;
   this.masterService.savePaymnetModemaster(copy).subscribe(
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
 public checkSelectOptionValue(value) {
    if (value == "undefined" || value == null) {
      return value;
    }
  }

  reset() {
    this.paymentModemaster = new PaymentModemaster();
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
