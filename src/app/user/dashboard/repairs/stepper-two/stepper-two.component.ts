import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RepairSaveService } from 'src/app/services/repair-save.service';
import { firstFormGroupVal, StepperOneComponent } from '../stepper-one/stepper-one.component';


@Component({
  selector: 'app-stepper-two',
  templateUrl: './stepper-two.component.html',
  styleUrls: ['./stepper-two.component.scss']
})
export class StepperTwoComponent implements OnInit {
  constructor( private saveService: RepairSaveService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  currentObj!:firstFormGroupVal
  ref!:StepperOneComponent

  save(){
    this.saveService.currentUserObject.subscribe(info=>this.currentObj = info);
console.log(this.currentObj);



    if(this.currentObj.complaint == "" && this.currentObj.telephone == "" && this.currentObj.model == ""  && this.currentObj.firstCtrl == "" ){
        this._snackBar.open("Form 1 Fields are mandatory", "Please Fill them !!",{
          duration: 3000
        });
    }else{
      // call save service
    const json = {
      token:localStorage.getItem("token"),
      complaint:this.currentObj.complaint,
      telephone:this.currentObj.telephone,
      model:this.currentObj.model,
      firstCtrl:this.currentObj.firstCtrl
    }

      this.saveService.createRepairs(json).subscribe(info=>{
       
        if(info.bookingDone == true){
          this._snackBar.open("Booking Done Successful!!", "Bookind id "+info.bookingNo,{
            duration: 3000
          });
        }
      },error=>{
        console.log(error);
        this._snackBar.open("Booking Cannot be Done at the Moment!!", "Please Try Again.",{
          duration: 3000
        });
      })


      this.saveService.changeObj(this.saveService.defeaultUserObj)

    }
  }
}
