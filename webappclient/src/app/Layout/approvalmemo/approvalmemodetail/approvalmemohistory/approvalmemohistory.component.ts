import { Component, OnInit } from '@angular/core';
import { QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';


import { UserService,
 } from 'src/app/DemoPages/UserPages/_services/user.service';
import { MasterService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-approvalmemohistory',
  templateUrl: './approvalmemohistory.component.html',
  styleUrls: ['./approvalmemo.scss'],
  providers: [MessageService]
})
export class ApprovalmemoHistoryComponent  implements OnInit{
  
   user: any = [];
  content:any []= [];
  
  
  constructor(private masterService: MasterService,private messageService: MessageService) {
    
  }
  ngOnInit():void {

  }

}

function tableDragger(id: HTMLElement, arg1: { mode: string; onlyBody: boolean; animation: number; }) {
  throw new Error('Function not implemented.');
}
