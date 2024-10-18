import { Component, OnInit } from '@angular/core';
import { QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';


import { UserService,
 } from 'src/app/DemoPages/UserPages/_services/user.service';
import { MasterService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-stockadjustmenthistory',
  templateUrl: './stockadjustmenthistory.component.html',
  styleUrls: ['./stockadjustment.scss'],
  providers: [MessageService]
})
export class StockadjustmentHistoryComponent  implements OnInit{
  
   user: any = [];
  content:any []= [];
  
  
  constructor(private masterService: MasterService,private messageService: MessageService) {
    
  }
  ngOnInit():void {

}
}