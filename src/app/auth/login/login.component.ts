import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface pass {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
  password: String;  
  user_role: String;    
}  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }
  message = "loading..."
  loginForm!:FormGroup
  initialType="password";
  initialIcon="remove_red_eye"

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(null),
      password: new FormControl(null)
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


  login(){

  }

}
