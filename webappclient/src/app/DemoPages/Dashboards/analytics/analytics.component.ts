import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTh, faCheck, faTrash, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { UserMaster } from 'src/app/layout/domain';
import { UserManagementService } from 'src/app/layout/service';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {
  @Input()
  active = 1;
  
  usermaster = new UserMaster();
  constructor(private activatedRoute: ActivatedRoute,private userManagementService: UserManagementService, private messageService: MessageService) { }
  base64: any;
  ngOnInit(): void {
    debugger;
    //this.activatedRoute.snapshot.firstChild.data.extraParameter;
    this.active = this.activatedRoute.snapshot.data.active;
    console.log(this.activatedRoute.snapshot);
    console.log(this.activatedRoute.snapshot.data.active);
    this.base64 = 'data:image/jpeg;base64,';
    let userId =  Number(window.sessionStorage.getItem("userId"));
       // window.sessionStorage.getItem("userName");
        //window.sessionStorage.setItem("location", storedNames.location);
   // let userId =sessionStorage.getItem("userDetail");
    this.userManagementService.getUser(userId).subscribe(
      data => {
debugger;
        this.usermaster = JSON.parse(JSON.stringify(data.data));
        this.usermaster.picByte = this.base64 + this.usermaster.picByte;
        
      },
      err => {
       // this.content = JSON.parse(err.error).message;
      }
    );
   
  }
  edituserentry(usermaster: any) {

    this.usermaster = usermaster;
    this.active = this.activatedRoute.snapshot.data.active;
  }
  clear() {
    this.usermaster = new UserMaster();
  }
}
