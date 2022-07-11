import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }
  message = "loading..."
  ngOnInit(): void {
  }

  login(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },2000)
  }

}
