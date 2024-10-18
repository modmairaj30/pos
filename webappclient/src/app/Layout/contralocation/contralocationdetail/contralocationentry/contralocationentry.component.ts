import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService } from 'src/app/layout/service';
import { ContraLocationmaster } from 'src/app/Layout/domain/contralocationmsater.model';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-contralocationentry',
  templateUrl: './contralocationentry.component.html',
  styleUrls: ['./contralocationentry.component.scss']
})
export class ContralocationentryComponent implements OnInit {

  parentlocationList3: any[] = [];
  localList2: any[] = [];
  empList1: any[] = [];

  map = new Map();
  error: string;
  errorMessage: string
   @Input()
  contraLocationmaster = new ContraLocationmaster();
  constructor(private userService: UserService, private masterService: MasterService, private messageService: MessageService) { }

  ngOnInit(): void {
   
  }


  save() {
    this.masterService.saveContraLocationMaster(this.contraLocationmaster).subscribe(
      data => { 
        if (data.statusCode == "OK") {
          this.showSuccess();
        }
        else {
          this.errorMessage = data.webAppException.webAppError[0].reason;
          this.showFail(this.errorMessage);
        }
      },
      error => {
       //   console.error('error caught in component')
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
    this.contraLocationmaster = new ContraLocationmaster();
  }
  showSuccess() {
   this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value: string) {
   this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail: value });
  }
}
