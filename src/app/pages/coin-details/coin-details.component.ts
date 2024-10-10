import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../../elements/short-cods/coin-details/about/about.component';
import { CoinChartComponent } from '../../elements/short-cods/coin-details/coin-chart/coin-chart.component';
import { CoinDetailBuyOrderComponent } from '../../elements/short-cods/coin-details/coin-detail-buy-order/coin-detail-buy-order.component';
import { CoinDetailQuickTradeComponent } from '../../elements/short-cods/coin-details/coin-detail-quick-trade/coin-detail-quick-trade.component';
import { CoinDetailSellOrderComponent } from '../../elements/short-cods/coin-details/coin-detail-sell-order/coin-detail-sell-order.component';

@Component({
  selector: 'app-coin-details',
  standalone: true,
  imports: [
    NgbModule,
    AboutComponent,
    CoinChartComponent,
    CoinDetailBuyOrderComponent,
    CoinDetailQuickTradeComponent,
    CoinDetailSellOrderComponent
  ],
  templateUrl: './coin-details.component.html',
  styleUrl: './coin-details.component.css'
})
export class CoinDetailsComponent {
  active = 3;

  aboutBtcArray: any = {
    image: "assets/images/svg/btc1.svg",
    coin_name: "BTC",
    per_coin_price: "1 BTC = 68.48 USD",
    description: '<p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p><p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p><p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>',


  };

  aboutEthArray: any = {
    image: "assets/images/svg/eth2.svg",
    coin_name: "ETH",
    per_coin_price: "1 ETH = 68.48 USD",
    description: '<p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p><p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p><p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>',


  };

  aboutMonArray: any = {
    image: "assets/images/svg/monero.svg",
    coin_name: "XMR",
    per_coin_price: "1 XMR = 68.48 USD",
    description: '<p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p><p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p><p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>',


  };

  aboutLitArray: any = {
    image: "assets/images/svg/lit3.svg",
    coin_name: "LTC",
    per_coin_price: "1 LTC = 68.48 USD",
    description: '<p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p><p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p><p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>',


  };

  sellOrder = [
    {
      price: "82.3",
      amount: "0.15",
      total: "$134,12",
    },
    {
      price: "83.9",
      amount: "0.18",
      total: "$237,31",
    },
    {
      price: "84.2",
      amount: "0.25",
      total: "$252,58",
    },
    {
      price: "86.2",
      amount: "0.35",
      total: "$126,26",
    },
    {
      price: "91.6",
      amount: "0.75",
      total: "$46,92",
    },
    {
      price: "92.6",
      amount: "0.21",
      total: "$123,27",
    },
    {
      price: "93.9",
      amount: "0.55",
      total: "$212,56",
    },
    {
      price: "94.2",
      amount: "0.18",
      total: "$129,26",
    },
  ];

  buyOrder = [
    {
      price: "82.3",
      amount: "0.15",
      total: "$134,12",
    },
    {
      price: "83.9",
      amount: "0.18",
      total: "$237,31",
    },
    {
      price: "84.2",
      amount: "0.25",
      total: "$252,58",
    },
    {
      price: "86.2",
      amount: "0.35",
      total: "$126,26",
    },
    {
      price: "91.6",
      amount: "0.75",
      total: "$46,92",
    },
    {
      price: "92.6",
      amount: "0.21",
      total: "$123,27",
    },
    {
      price: "93.9",
      amount: "0.55",
      total: "$212,56",
    },
    {
      price: "94.2",
      amount: "0.18",
      total: "$129,26",
    },
  ];
}
