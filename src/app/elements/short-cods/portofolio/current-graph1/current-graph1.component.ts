import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-current-graph1',
  standalone: true,
  imports: [
    NgbModule,
    BarChartApexComponent
  ],
  templateUrl: './current-graph1.component.html',
  styleUrl: './current-graph1.component.css'
})
export class CurrentGraph1Component {
  CurrentGraph = {
    series: [{
      name: 'Buy',
      data: [44, 55, 57, 56, 61]
    }, {
      name: 'Sell',
      data: [76, 85, 101, 98, 87]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      },
    },
    grid: {
      show: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        columnWidth: '55%',
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent'],
      lineCap: 'smooth',
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false
    },
    legend: {
      itemMargin: {
        horizontal: 15,
        vertical: 0
      },
      markers: {
        radius: 12,
      },
    },
    fill: {
      opacity: 1
    },
    colors: ['#5F5594', '#71B945'],
    tooltip: {
      y: {
        formatter: function (val: string) {
          return "$ " + val + " thousands"
        }
      }
    }
  };
}
