import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.scss']
})
export class AreachartComponent implements OnInit {
  @Input() data: any = [];
 
  chartsOptions:Highcharts.Options ={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Estimated Mobile Repairs Done by Region'
      },
      subtitle: {
          text: "Source: Gaurav's Phone Repairs"
      },
     
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits:{
        enabled:false
      },
      // exporting:{
      //   enabled:false
      // },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Asia',
          type:'line',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Africa',
          type:'line',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Europe',
          type:'line',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'America',
          type:'line',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Oceania',
          type:'line',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  
  }

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}


