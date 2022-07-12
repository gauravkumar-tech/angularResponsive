import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  registerForm!:FormGroup

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

}
