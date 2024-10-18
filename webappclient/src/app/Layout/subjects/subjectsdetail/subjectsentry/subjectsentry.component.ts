import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService } from 'src/app/layout/service';
import { Subjectmaster } from 'src/app/Layout/domain/subjectsMaster.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-subjectsentry',
  templateUrl: './subjectsentry.component.html',
  styleUrls: ['./subjectsentry.component.scss']
})
export class SubjectsentryComponent implements OnInit {

  parentlocationList3: any[] = [];
  localList2: any[] = [];
  empList1: any[] = [];

  map = new Map();
  error: string;
  errorMessage:string
  @Input()
  subjectmaster = new Subjectmaster();

  constructor(private userService: UserService, private masterService: MasterService,private messageService: MessageService) { }

  ngOnInit(): void {
  }
save() {

    let copy = JSON.parse(JSON.stringify(this.subjectmaster))
  //  copy.parent = copy.parent.id;
   this.masterService.saveSubjectmaster(copy).subscribe(
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
 


  reset() {
    this.subjectmaster = new Subjectmaster();
  }
  showSuccess() {
    this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value:string) {
  this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail:value });
  }
  
}
