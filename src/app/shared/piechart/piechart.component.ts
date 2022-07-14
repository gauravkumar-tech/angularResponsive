import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  @Input() data: any = [];
 
  chartsOptions:Highcharts.Options ={
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: 'Weekly Mobile Brand Repairs'
  },
  subtitle: {
      text: 'Weekly Service'
  },
  credits:{
    enabled:false
  },
  plotOptions: {
      pie: {
          innerSize: 100,
          depth: 45
      }
  },
  series: [{
      name: 'Delivered amount',
      type:'pie',
      data: [
          ['Nokia', 8],
          ['MI', 3],
          ['Vodaphone', 1],
          ['ReadMi', 6],
          ['Moto', 8],
          ['Sony', 4],
          ['Apple', 4],
          ['Windows', 1],
          // ['Grapes (bunch)', 1]
      ]
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
