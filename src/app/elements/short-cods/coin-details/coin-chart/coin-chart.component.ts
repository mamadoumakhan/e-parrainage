import { Component, Input } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';
import { DropdownComponent } from '../../../dropdown/dropdown.component';
import { Date1Component } from '../../../../pages/forms/pickers/date-picker/date1/date1.component';

@Component({
  selector: 'app-coin-chart',
  standalone: true,
  imports: [
    Date1Component,
    DropdownComponent,
    BarChartApexComponent
  ],
  templateUrl: './coin-chart.component.html',
  styleUrl: './coin-chart.component.css'
})
export class CoinChartComponent {
  @Input() data: any;

  color: any = [];
  ngOnInit(): void {
    this.color.push(this.data);
  }
  dropdown_item = {
    select: 'USD ($ US Dollar)',
    formControl: true,
    value: ['USD ($ US Dollar)', 'BTC ($ US Dollar)', 'USA ($ US Dollar)']
  }

  chartOptions = {
    series: [{
      data: [300, 200, 400, 300, 500, 300, 400, 200, 400, 300]
    },],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    grid: {
      show: false
    },
    xaxis: {
      type: 'Week',
      categories: ["Week 01", "Week 02", "Week 03", "Week 04", "Week 05", "Week 06", "Week 07", "Week 08", "Week 09", "Week 010"],
      labels: {
        show: true,
        style: {
          colors: '#808080',
        },
      },
    },
    yaxis: {
      min: 160,
      max: 560,
      tickAmount: 5,
      labels: {
        formatter: function (value: any) {
          return value + "k";
        },
        style: {
          colors: '#787878',
          fontSize: '13px',
          fontFamily: 'Poppins',
          fontWeight: 400
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    colors: this.color
  };
}
