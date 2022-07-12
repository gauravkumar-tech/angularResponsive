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

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login(){

    // setTimeout(()=>{
    //   this.spinner.hide();
    // },2000)
  }

}
