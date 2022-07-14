import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreachartComponent } from './areachart/areachart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PiechartComponent } from './piechart/piechart.component';




@NgModule({
  declarations: [
    AreachartComponent,
    PiechartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports:[
    AreachartComponent,
    PiechartComponent
  ]
})
export class SharedModule { }
