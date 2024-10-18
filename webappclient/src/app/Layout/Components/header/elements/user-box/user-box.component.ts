import {Component, Input, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/DemoPages/UserPages/_services/auth.service';
import { UserManagementService } from 'src/app/layout/service';
import { TokenStorageService } from 'src/app/DemoPages/UserPages/_services/token-storage.service';
import { MessageService } from 'primeng/api';
import { UserMaster } from 'src/app/layout/domain';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
user:string="";
  @Input()
  pic:any;
error: string;
  errorMessage: string
  constructor(private router: Router,public globals: ThemeOptions, private authService: AuthService, private tokenStorage: TokenStorageService, private messageService: MessageService, private userManagementService:UserManagementService) {
  }

  ngOnInit() {
   
    this.user= window.sessionStorage.getItem("userName");
   let userid:number=Number(window.sessionStorage.getItem("userId"));
   this.getPic(userid);
    //this.pic= 'data:image/jpeg;base64,'+window.sessionStorage.getItem("pic");
  }
  onLogout() {  
   
  this.authService.logout().subscribe(
    data => {
      this.showSuccess(data.data);
      this.tokenStorage.signOut
      sessionStorage.setItem( 'isLoggedin', 'false' );
    window.sessionStorage.clear();
    
    this.router.navigate(['/login']);
      
    },
    err => {
      this.errorMessage = err.error.message;
      this.showFail(this.errorMessage);
    }
  );
  }  
  public getPic(userId: number){

    this.userManagementService.getUser(userId).subscribe(
      data => {
       let usermaster = new UserMaster();
        usermaster = JSON.parse(JSON.stringify(data.data));
        this.pic= 'data:image/jpeg;base64,'+usermaster.picByte;
        
      },
      err => {
        JSON.parse(err.error).message;
      }
    );
  }
  showSuccess(value: string) {
   this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: value });
  }
  showFail(value: string) {
     this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail: value });
  }
 onSettings() {  
    //active
    this.router.navigate(['/settings']);
  } 
  
  onDashboard() {  
     this.router.navigate(['/layout']);
   }  


}
