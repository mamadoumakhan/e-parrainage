import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ImageDropdownComponent } from '../../../dropdown/image-dropdown/image-dropdown.component';
interface type {
  price: number,
  amount: number,
  total: number
}

@Component({
  selector: 'app-buy-order',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    ImageDropdownComponent
  ],
  templateUrl: './buy-order.component.html',
  styleUrl: './buy-order.component.css'
})
export class BuyOrderComponent {

  dropdown_item = {
    select: 1,
    select_style: 'custom-image-select-2',
    value_img: [
      {
        value: 'Monero',
        img: 'assets/images/svg/monero.svg'
      },
      {
        value: 'Ethereum',
        img: 'assets/images/svg/eth.svg'
      },
      {
        value: 'Bitcoin',
        img: 'assets/images/svg/btc.svg'
      },
      {
        value: 'Litecoin',
        img: 'assets/images/svg/ltc.svg'
      }
    ]
  }
  buyOrderList: type[] = [
    {
      price: 82.3,
      amount: 0.15,
      total: 134.12
    },
    {
      price: 83.9,
      amount: 0.18,
      total: 237.31
    },
    {
      price: 84.2,
      amount: 0.25,
      total: 252.58
    },
    {
      price: 86.2,
      amount: 0.35,
      total: 126.26
    },
    {
      price: 91.6,
      amount: 0.75,
      total: 46.92
    },
    {
      price: 92.6,
      amount: 0.21,
      total: 123.27
    },
    {
      price: 93.9,
      amount: 0.55,
      total: 212.56
    },
    {
      price: 97.2,
      amount: 0.18,
      total: 129.26
    }
  ]
}
