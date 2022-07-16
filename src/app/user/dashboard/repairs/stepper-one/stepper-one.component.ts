import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RepairSaveService } from 'src/app/services/repair-save.service';
import { EventEmitter } from 'stream';

export interface Mobile {
  value: string;
  viewValue: string;
}

export interface firstFormGroupVal {
  model: string;
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
    model: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder,private _snackBar: MatSnackBar,
    private saveService: RepairSaveService) { }
  
  currentObj!:firstFormGroupVal;

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
      model:form.model
    }
    if(this.firstFormGroup.status == 'INVALID'){
      this._snackBar.open("Form 1 Fields are mandatory", "Please Fill them !!",{
        duration: 3000
      });
      return;
    }
    this._snackBar.open("Form 1 Valid!! Saved", "Cannot Re-Edit Here !!",{
      duration: 3000
    });
    this.saveService.changeObj(json);
    this.firstFormGroup.reset();

  }
}
