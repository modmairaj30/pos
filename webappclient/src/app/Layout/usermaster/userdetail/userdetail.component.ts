import { Component, OnInit, ViewChild } from '@angular/core';
import { UserMaster } from '../../domain';
import { UserentryComponent } from './userentry/userentry.component';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  active: number;
  editmod: boolean = false;
  usermaster = new UserMaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  edituserentry(usermaster: any) {
    this.editmod = true;
    this.usermaster = usermaster;
    this.active = 1;
  }
  clear() {
    this.usermaster = new UserMaster();
  }
  tabChange() {
    if (this.active == 1) {
      this.editmod = false;
      this.clear();
    }
  }
}
