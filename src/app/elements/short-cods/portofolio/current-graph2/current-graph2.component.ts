import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';
import { PieChartApexComponent } from '../../../chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-current-graph2',
  standalone: true,
  imports: [
    NgbModule,
    PieChartApexComponent,
    BarChartApexComponent
  ],
  templateUrl: './current-graph2.component.html',
  styleUrl: './current-graph2.component.css'
})
export class CurrentGraph2Component {

  pieChart = {
    series: [34, 12, 41, 22],
    chart: {
      type: 'donut',
      height: 225
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0,
    },
    colors: ['#374C98', '#FFAB2D', '#FF782C', '#00ADA3'],
    legend: {
      position: 'bottom',
      show: false
    },
    responsive: [{
      breakpoint: 768,
      options: {
        chart: {
          width: 200
        },
      }
    }]
  };
}
