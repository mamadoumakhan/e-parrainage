import { Component } from '@angular/core';
import { BuyOrderComponent } from '../buy-order/buy-order.component';
import { SellOrderComponent } from '../sell-order/sell-order.component';
import { ImageDropdownComponent } from '../../../dropdown/image-dropdown/image-dropdown.component';

@Component({
  selector: 'app-quick-trade',
  standalone: true,
  imports: [
    BuyOrderComponent,
    SellOrderComponent,
    ImageDropdownComponent
  ],
  templateUrl: './quick-trade.component.html',
  styleUrl: './quick-trade.component.css'
})
export class QuickTradeComponent {
  dropdown_item = {
    select: 1,
    select_style: 'custom-image-select',
    value_img: [
      {
        value: 'Yearly (2024)',
        img: 'assets/images/svg/ltc.svg'
      },
      {
        value: 'Weekly (2024)',
        img: 'assets/images/svg/eth.svg'
      },
      {
        value: 'Daily (2024)',
        img: 'assets/images/svg/btc.svg'
      },
    ]
  }

}
