import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-graph-current-statistic',
  standalone: true,
  imports: [
    PieChartApexComponent
  ],
  templateUrl: './graph-current-statistic.component.html',
  styleUrl: './graph-current-statistic.component.css'
})
export class GraphCurrentStatisticComponent {

  chartOptions = {
    series: [85, 60, 67, 50],
    chart: {
      height: 315,
      type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            show: false,
            fontSize: '16px',
          },


        }
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Income', 'Income', 'Imcome', 'Income'],
    colors: ['#ec8153', '#70b944', '#498bd9', '#6647bf'],
  };
}
