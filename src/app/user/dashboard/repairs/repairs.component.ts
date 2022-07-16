import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RepairSaveService } from 'src/app/services/repair-save.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {

  
 
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  getVal !: string


  constructor(private _formBuilder: FormBuilder, private saveService: RepairSaveService) {}
  ngOnInit(): void {
    
  }

  restForm(){
    this.saveService.changeObj(this.saveService.defeaultUserObj)
  }

}
