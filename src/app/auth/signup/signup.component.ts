import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private singupService: SignupService) { }
  registerForm!:FormGroup
  initialType="password";
  initialIcon="remove_red_eye"

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null),
      password: new FormControl(null),
      email: new FormControl(null),
      about: new FormControl(null),
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
    console.log(form);
    
    // this.singupService.registeration(form).subscribe(info=>{
    //   console.log(info);
    // },error=>{
    //   console.log(error);
    // })
  }

}
