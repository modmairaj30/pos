import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { MessageService } from 'primeng/api';
import { GlobalConstants } from 'src/app/global-constants';
import { UserMaster } from 'src/app/layout/domain';
import { UserManagementService } from 'src/app/layout/service';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {
  //username = 'techgeeknext'
  //password = 'password'
  
  public userRoles;
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username = 'webapp'
  password = 'password'
  
  invalidLogin = false
  base64Data: any;
  @Input() error: string | null;

  constructor(private router: Router,private authService: AuthService, private tokenStorage: TokenStorageService, private messageService: MessageService, private userManagementService: UserManagementService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  /*
public login(){
  this.router.navigate(['/layout']);
}*/
public login() {
  this.authService.login(this.form.username,this.form.password).subscribe(
      data => {
        
      if(data.statusCode=="BAD_REQUEST"){
        this.showFail(data.data);
      }
      else if(data!=null){
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      sessionStorage.setItem( 'isLoggedin', 'true' );
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      //this.router.navigate(['/layout']);
      this.addSession();
      }
      
      else{
        this.showFail("User Id Or Password is Incorrect");
      }
      
    },
    err => {
      debugger;
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
     this.showFail(this.errorMessage);
    }
  );

  
}
public addSession(){
  this.authService.addSession().subscribe(
    data => {
    if(data == null){
      this.showFail("User Id Or Password is Incorrect");
    }
      window.sessionStorage.setItem("userDetail",data);    
      window.sessionStorage.setItem( "userDetail", JSON.stringify( data.data ) );
      this.userRoles = JSON.parse(sessionStorage.getItem("userDetail"));
      var storedNames = JSON.parse( sessionStorage.getItem( "userDetail" ) );
	    GlobalConstants.userName=storedNames.username;
      window.sessionStorage.setItem("userId",storedNames.id);
     
      window.sessionStorage.setItem("userName",storedNames.username);
      window.sessionStorage.setItem("location",storedNames.location);
      
      this.router.navigate(['/layout']);
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
      this.showFail(this.errorMessage);
    }
  );
}

showSuccess(value: string) {
  this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: value });
 }
 showFail(value: string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail: value });
 }
}
