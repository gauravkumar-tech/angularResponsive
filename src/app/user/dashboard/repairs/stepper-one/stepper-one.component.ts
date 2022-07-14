import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'stream';

export interface Mobile {
  value: string;
  viewValue: string;
}

export interface firstFormGroupVal {
  firstCtrl: string,
    telephone: string,
    complaint: string,
}

@Component({
  selector: 'app-stepper-one',
  templateUrl: './stepper-one.component.html',
  styleUrls: ['./stepper-one.component.scss']
})
export class StepperOneComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    telephone: ['', Validators.required],
    complaint: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  foods: Mobile[] = [
    {value: 'Mi', viewValue: 'Mi'},
    {value: 'Nokia', viewValue: 'Nokia'},
    {value: 'Realme', viewValue: 'Realme'},
  ];
  
  sendValue(form:firstFormGroupVal){
    const json:firstFormGroupVal={
      firstCtrl: form.firstCtrl,
      telephone: form.telephone,
      complaint: form.complaint,
    }
  }
}
