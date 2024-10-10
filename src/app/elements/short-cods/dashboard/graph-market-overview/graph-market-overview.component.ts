import { Component } from '@angular/core';
import { DropdownComponent } from '../../../dropdown/dropdown.component';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-graph-market-overview',
  standalone: true,
  imports: [
    DropdownComponent,
    BarChartApexComponent,
  ],
  templateUrl: './graph-market-overview.component.html',
  styleUrl: './graph-market-overview.component.css'
})
export class GraphMarketOverviewComponent {


  dropdown_item = {
    select: 'Weekly (2024)',
    formControl: true,
    value: ['Weekly (2024)', 'Daily (2024)', 'Yearly (2024)']
  }

  chartOptions = {
    series: [{
      name: 'series1',
      data: [200, 400, 300, 400, 200, 400, 200, 300, 200, 300]
    }, {
      name: 'series2',
      data: [500, 300, 400, 200, 500, 200, 400, 300, 500, 200]
    }],
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    colors: ["#FFAB2D", "#00ADA3"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    legend: {
      show: false
    },
    grid: {
      show: false,
      strokeDashArray: 6,
      borderColor: '#dadada',
    },
    yaxis: {
      min: 160,
      max: 560,
      tickAmount: 5,
      labels: {
        style: {
          colors: '#B5B5C3',
          fontSize: '12px',
          fontFamily: 'Poppins',
          fontWeight: 400

        },
        formatter: function (value: any) {
          return value + "k";
        }
      },
    },
    xaxis: {
      categories: ["Week 01", "Week 02", "Week 03", "Week 04", "Week 05", "Week 06", "Week 07", "Week 08", "Week 09", "Week 10"],
      labels: {
        style: {
          colors: '#B5B5C3',
          fontSize: '12px',
          fontFamily: 'Poppins',
          fontWeight: 400

        },
      }
    },
    fill: {
      type: 'solid',
      opacity: 0.05
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };

}
