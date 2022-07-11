import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import user from "./pass.json";


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
  users:pass[]=user;
  loginForm!:FormGroup

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login(){

    let userObj = this.users.filter(e=>e.name == this.loginForm.controls['username'].value)[0]
    
    if(userObj!=undefined || userObj!=null){
      if(userObj.password == this.loginForm.controls['password'].value){
        this.message = `welcome ${userObj.name} ...`
        localStorage.setItem("user",JSON.stringify(userObj));
      }else{

      }
    }

    // setTimeout(()=>{
    //   this.spinner.hide();
    // },2000)
  }

}
