import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { MasterService } from 'src/app/layout/service';
import { Locationmaster } from 'src/app/layout/domain';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-locationmasterentry',
  templateUrl: './locationmasterentry.component.html',
  styleUrls: ['./locationmasterentry.component.scss']
})
export class LocationmasterentryComponent implements OnInit {

  map = new Map();
  error: string;
  errorMessage: string

  
  //@ViewChild('locationName') sInput: ElementRef;

  
  @Input()
  locationmaster = new Locationmaster();
  constructor(private userService: UserService, private masterService: MasterService, private messageService: MessageService) { }

  ngOnInit(): void {
     }

  save() {

    let copy = JSON.parse(JSON.stringify(this.locationmaster))
    //  copy.parent = copy.parent.id;
    this.masterService.saveLocationMaster(copy).subscribe(
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
    this.locationmaster = new Locationmaster();
  }
  showSuccess() {
   this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value: string) {
      this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail: value });
  }
}
