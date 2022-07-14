import { Component, OnInit, Output } from '@angular/core';

export interface PeriodicElement {
  Amount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Amount: '1'},
];



@Component({
  selector: 'app-stepper-two',
  templateUrl: './stepper-two.component.html',
  styleUrls: ['./stepper-two.component.scss']
})
export class StepperTwoComponent implements OnInit {
  constructor() { }

  displayedColumns: string[] = [ 'Amount'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }
}
