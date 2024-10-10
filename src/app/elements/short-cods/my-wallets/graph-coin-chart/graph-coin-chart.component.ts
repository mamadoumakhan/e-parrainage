import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';
import { DropdownComponent } from '../../../dropdown/dropdown.component';

@Component({
  selector: 'app-graph-coin-chart',
  standalone: true,
  imports: [
    DropdownComponent,
    BarChartApexComponent,
  ],
  templateUrl: './graph-coin-chart.component.html',
  styleUrl: './graph-coin-chart.component.css'
})
export class GraphCoinChartComponent {

  dropdown_item = {
    select: 'Weekly (2024)',
    formControl: true,
    value: ['Weekly (2024)', 'Daily (2024)', 'Yearly (2024)']
  }

  optionsTimeline = {
    series: [
      {
        name: "New Clients",
        data: [300, 450, 600, 600, 400, 450, 410, 470, 480, 700, 600, 800, 400, 600, 350, 250, 500, 550, 300, 400, 200]
      }
    ],
    chart: {
      type: "bar",
      height: 300,
      stacked: true,
      toolbar: {
        show: false
      },
      sparkline: {
        //enabled: true
      },
      offsetX: -10,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "28%",
        endingShape: "rounded",
        startingShape: "rounded",
        colors: {
          backgroundBarColors: ['#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9'],
          borderRadiusWhenStacked: 'last',
          borderRadiusApplication: 'end',
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
        },

      },
      distributed: true
    },
    colors: ['#B87EFF'],
    grid: {
      show: false,
    },
    legend: {
      show: false
    },
    fill: {
      opacity: 1
    },
    dataLabels: {
      enabled: false,
      colors: ['#000'],
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 1
      }
    },
    xaxis: {
      categories: ['01','02','03', '04', '05','06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18','19','20', '21'],
      labels: {
        style: {
          colors: '#808080',
          fontSize: '13px',
          fontFamily: 'poppins',
          fontWeight: 100,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
      crosshairs: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 1000,
      tickAmount: 5,
      labels: {
        style: {
          colors: '#808080',
          fontSize: '14px',
          fontFamily: 'Poppins',
          fontWeight: 100,

        },
        formatter: function (y: any) {
          return y.toFixed(0) + "k";
        }
      },
    },
    tooltip: {
      x: {
        show: true
      }
    },
    responsive: [{
      breakpoint: 575,
      options: {
        chart: {
          height: 250,
        }
      }
    }]
  };
}
