import { Component, OnInit, ViewChild } from '@angular/core';
import { Subjectmaster } from '../../domain/subjectsMaster.model';
import { SubjectsentryComponent } from './subjectsentry/subjectsentry.component';


@Component({
  selector: 'app-subjectsdetail',
  templateUrl: './subjectsdetail.component.html',
  styleUrls: ['./subjectsdetail.component.css']
})
export class SubjectsdetailComponent implements OnInit {
  active: number;

  subjectmaster = new Subjectmaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editBranchentry(subjectmaster: any) {
    
    this.subjectmaster = subjectmaster;
    this.active = 1;
  }
  clear() {
    this.subjectmaster = new Subjectmaster();
  }
}
