import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SignupService } from './signup.service';



interface userDto{
  name: string,
  password: string,
  email: string,
  about: string,
} 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private singupService: SignupService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private ngxService: NgxUiLoaderService ) { }

  registerForm!:FormGroup
  initialType="password";
  initialIcon="remove_red_eye"

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required),
      about: new FormControl(null,Validators.required),
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

  registerUser(form:userDto){
    if(this.registerForm.status == "INVALID"){
      this._snackBar.open("All fields are mandatory", "Fill Again !!",{
        duration: 3000
      });
      return;
    }
    
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    this.singupService.registeration(form).subscribe(info=>{
      this._snackBar.open("User Created Successfully!!", "Let's Login.",{
        duration: 3000
      });
      this.registerForm.reset();
      this.ngxService.stop(); 

      setTimeout(()=>{
        this.router.navigateByUrl('/')
      },3000)
    },error=>{
      // console.log(error);
      this._snackBar.open("User Cannot be created", "Try Again",{
        duration: 3000
      });
      this.ngxService.stop(); 
    })
  }

}
