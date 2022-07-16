import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserInfoService } from 'src/app/services/user-info.service';
import { LoginService } from './login.service';

interface userToken {    
  username: String;  
  password: String;  
}  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private ngxService: NgxUiLoaderService,
    private loginservice:LoginService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private userInfoService : UserInfoService) { }

  message = "loading..."
  loginForm!:FormGroup
  initialType="password";
  initialIcon="remove_red_eye"

  ngOnInit(): void {
    localStorage.clear();
    this.loginForm = new FormGroup({
      username: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    })
  }
  changeEyeAndType(){
    if(this.initialType == "password"){
      this.initialType = "text"
      this.initialIcon = "visibility_off"
    }else{
      this.initialType = "password"
      this.initialIcon = "remove_red_eye"
    }
  }

  login(form:userToken){
    if(this.loginForm.status == "INVALID"){
      this._snackBar.open("All fields are mandatory", "Fill Again !!",{
        duration: 3000
      });
      return;
    }
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId

    this.loginservice.login(form).subscribe(info=>{
      localStorage.clear();
      this.userInfoService.changeUser(info);
      localStorage.setItem("token",info.token)
      localStorage.setItem("userType",info.userType)

      this._snackBar.open("Welcome "+form.username+" !!" , "Let's get you started.",{
        duration: 3000
      });
      this.loginForm.reset();
      this.ngxService.stop(); 

      setTimeout(()=>{
        this.router.navigateByUrl('/user/dashboard')
      },3000)
    },(error)=>{
      // console.log(error);
      this._snackBar.open(error.error.message, "New User?",{
        duration: 3000
      });
      this.ngxService.stop(); 
    })
  }

}
