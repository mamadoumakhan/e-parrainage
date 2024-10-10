import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-area-spline',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './area-spline.component.html',
  styleUrl: './area-spline.component.css'
})
export class AreaSplineComponent {
  chartOptions = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false
      },
      stroke: {
        curve: "straight"
      }
    },
    dataLabels: {
      enabled: false
    },
    
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    },
    colors: ['#FF720D', '#787878'],

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    },
    
  };
}