import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'stream';
import { firstFormGroupVal, Mobile } from '../stepper-one/stepper-one.component';


@Component({
  selector: 'app-stepper-two',
  templateUrl: './stepper-two.component.html',
  styleUrls: ['./stepper-two.component.scss']
})
export class StepperTwoComponent implements OnInit {

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
