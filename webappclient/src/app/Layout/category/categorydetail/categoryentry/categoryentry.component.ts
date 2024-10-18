import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { Categorymaster } from 'src/app/Layout/domain/categoryMaster.model';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService } from 'src/app/layout/service';

@Component({
  selector: 'app-categoryentry',
  templateUrl: './categoryentry.component.html',
  styleUrls: ['./categoryentry.component.scss']
})
export class CategoryentryComponent implements OnInit {


  map = new Map();
  
  @Input()
  categorymaster = new Categorymaster();




  constructor(private userService: UserService, private masterService: MasterService) { }

  ngOnInit(): void {
  
  }


  save() {
    this.masterService.saveCategorymaster(this.categorymaster).subscribe(
      data => {
        
        alert(data.data);
        this.categorymaster = new Categorymaster();
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );
  }
  reset() {
    this.categorymaster = new Categorymaster();
  }

}
