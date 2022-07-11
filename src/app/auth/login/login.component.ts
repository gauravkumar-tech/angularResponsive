import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showSpinner = false;
  constructor() { }

  ngOnInit(): void {
    this.showSpinner = false;
  }

  login(){
    this.showSpinner=true;
  }

}
