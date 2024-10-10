import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface type {
  name: string,
  time: string,
  price: number,
  status: string
}
@Component({
  selector: 'app-walle-activity',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './walle-activity.component.html',
  styleUrl: './walle-activity.component.css'
})
export class WalleActivityComponent {
  active = 1;
  @Input() titleData: any;

  navTabList = [
    {
      id: 1,
      title: 'Monthly'
    },
    {
      id: 2,
      title: 'Weekly'
    },
    {
      id: 3,
      title: 'Today'
    }
  ]

  walletActivityList: type[] = [
    {
      name: 'Topup',
      time: '06:24:45 AM',
      price: 5.553,
      status: 'Completed'
    },
    {
      name: 'Withdraw',
      time: '06:24:45 AM',
      price: 5.553,
      status: 'Pending'
    },
    {
      name: 'Withdraw',
      time: '06:24:45 AM',
      price: 912,
      status: 'Canceled'
    },
    {
      name: 'Topup',
      time: '06:24:45 AM',
      price: 7.762,
      status: 'Completed'
    },
    {
      name: 'Topup',
      time: '06:24:45 AM',
      price: 7.762,
      status: 'Completed'
    },
    {
      name: 'Withdraw',
      time: '06:24:45 AM',
      price: 912,
      status: 'Canceled'
    },
  ]
}
