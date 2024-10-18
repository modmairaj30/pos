import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { ProductGroupMaster } from 'src/app/Layout/domain/ProductGroupMaster.model';
;import { MessageService } from 'primeng/api';
import { MasterService } from 'src/app/layout/service';

@Component({
  selector: 'app-productgroupsentry',
  templateUrl: './productgroupsentry.component.html',
  styleUrls: ['./productgroupsentry.component.scss']
})
export class ProductgroupsentryComponent implements OnInit {

  map = new Map();
  error: string;
  errorMessage:string
  

  @Input()
  productGroupMaster = new ProductGroupMaster();
  constructor(private userService: UserService, private masterService: MasterService,private messageService: MessageService){ }

  ngOnInit(): void {
    }
save() {

    let copy = JSON.parse(JSON.stringify(this.productGroupMaster))
  //  copy.parent = copy.parent.id;
   this.masterService.saveproductGroupMaster(copy).subscribe(
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
    this.productGroupMaster = new ProductGroupMaster();
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
