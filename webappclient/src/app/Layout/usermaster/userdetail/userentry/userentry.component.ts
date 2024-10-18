import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { UserMaster } from 'src/app/layout/domain';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, UserManagementService } from 'src/app/layout/service';

@Component({
  selector: 'app-userentry',
  templateUrl: './userentry.component.html',
  styleUrls: ['./userentry.component.scss']
})
export class UserentryComponent implements OnInit {

  map = new Map();
  error: string;
  errorMessage: string

  @Input()
  usermaster = new UserMaster();
  editmode:boolean=false;
  localList2: any[] = [];
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  lookUpFormBean2 = new LookUpFormBean();
  listLookUpFormBean: LookUpFormBean[] = new Array();

  url: any;
  constructor(private userService: UserService, private userManagementService: UserManagementService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.lookUpFormBean2.query = "SELECT id,name FROM roles";
    this.lookUpFormBean2.listName = "LIST2";
    this.listLookUpFormBean.push(this.lookUpFormBean2);
    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.localList2 = JSON.parse(JSON.stringify(data.data.LIST2));
        if(this.usermaster.id == "undefined" || this.usermaster.id == null || this.usermaster.id == undefined){
          this.editmode=false;
          
        }
        else{
          this.editmode=true;
        }
      
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );

  }



  save1() {
    debugger;
    if(this.usermaster.id == "undefined" || this.usermaster.id == null || this.usermaster.id == undefined){
      this.save();
      
    }
    else{
      this.update();
    }
    
  }

  public checkSelectOptionValue(value) {
    if (value == "undefined" || value == null) {
      return value;
    }
  }

  reset() {
    this.usermaster = new UserMaster();
  }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    this.selectedFile = event.files[0];
    var reader = new FileReader();

    reader.readAsDataURL(event.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.usermaster.picByte = event.target.result;
    }
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'success', detail: 'Profile Pic Uploaded Successfully.' });
    //this.usermaster.picByte = event.target.files[0];
  }



  /////

  save() {
    let formData: FormData = new FormData();
    if (this.selectedFile != null) {
      formData.append('file', this.selectedFile, this.selectedFile.name);
    }
      if ( this.usermaster.id == undefined) {
      formData.append('id',null);
      }
     
      formData.append('username',this.usermaster.username);
      formData.append('firstname',this.usermaster.firstname);
      formData.append('lastname',this.usermaster.lastname);
      formData.append('address',this.usermaster.address);
      formData.append('password',this.usermaster.password);
      formData.append('mobile_no',this.usermaster.mobile_no);
      formData.append('role',this.usermaster.role);
      formData.append('email',this.usermaster.email);
      formData.append('role_id',this.usermaster.role_id);
      formData.append('location',this.usermaster.location);
       
    this.userManagementService.saveUser(formData).subscribe(
      data => {
        if (data.body.message == 'ok') {
          this.showSuccess();
        }
        else {
          this.showFail(data.body.message);

        }
        // this.usermaster = new UserMaster();
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );
  }

  update() {
    let formData: FormData = new FormData();
    if (this.selectedFile != null) {
      formData.append('file', this.selectedFile, this.selectedFile.name);
    }
      formData.append('id',this.usermaster.id);
      formData.append('username',this.usermaster.username);
      formData.append('firstname',this.usermaster.firstname);
      formData.append('lastname',this.usermaster.lastname);
      formData.append('address',this.usermaster.address);
      formData.append('password',this.usermaster.password);
      formData.append('mobile_no',this.usermaster.mobile_no);
      formData.append('role',this.usermaster.role);
      formData.append('email',this.usermaster.email);
      formData.append('role_id',this.usermaster.role_id);
      formData.append('location',this.usermaster.location);
      
    this.userManagementService.updateUser(formData).subscribe(
      data => {
        this.editmode=false;
        if (data.body.message == 'ok') {
          this.showSuccess();
        }
        else {
          this.showFail(data.body.message);

        }
        // this.usermaster = new UserMaster();
      },
      err => {
        this.editmode=false;
        this.map = JSON.parse(err.error).message;
      }
    );
  }
  
  showSuccess() {
    this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value: string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail: value });
  }
}
