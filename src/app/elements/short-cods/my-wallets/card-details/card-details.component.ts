import { Component } from '@angular/core';
import { DoughnutChartJsComponent } from '../../../chart-config/doughnut-chart-js/doughnut-chart-js.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [
    DoughnutChartJsComponent,
    NgbModule,
    CommonModule,
    NgClass
  ],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  selectedColor: number = 0;

  cardThemeList =['primary', 'warning', 'success', 'info', 'secondary']

  limitsList = [
    {
      title: 'Main Limits',
      amount: 1000,
      chart: [
        {
          data: 66,
          cutout: 75,
          color: 'rgb(255, 104, 38)',
          max_height: '120'
        }
      ]
    },
    {
      title: 'Seconds',
      amount: 500,
      chart: [
        {
          data: 31,
          cutout: 75,
          color: 'rgb(29, 198, 36)',
          max_height: '120'
        }
      ]
    },
    {
      title: 'Others',
      amount: 100,
      chart: [
        {
          data: 7,
          cutout: 75,
          color: 'rgb(158, 158, 158)',
          max_height: '120'
        }
      ]
    }
  ]
}
