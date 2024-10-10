import { Component, Input } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-market-chart',
  standalone: true,
  imports: [
    BarChartApexComponent
  ],
  templateUrl: './market-chart.component.html',
  styleUrl: './market-chart.component.css'
})
export class MarketChartComponent {
  @Input() data: any;

  series: any = [];

  ngOnInit() {
    this.data.map((val: any) => {
      this.series.push(val);
    })
  }
  chartOptions = {
    series: [
      {
        name: "Desktops",
        data: this.series
      }
    ],
    chart: {
      width: 270,
      height: 40,
      type: "line",
      sparkline: {
        enabled: true
      },
      zoom: {
        enabled: false
      }
    },

    stroke:{
      width: 2,
      curve: 'smooth',
    },

    colors: ["#eb8153"],
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    yaxis: {
      show: false,
    },
    responsive: [{
      breakpoint: 575,
      options: {
        chart: {
          width: 150,
          height: 50,
        }
      }
    }]
  };
}
