import { Component } from '@angular/core';
import { GraphMarketOverviewComponent } from '../../elements/short-cods/dashboard/graph-market-overview/graph-market-overview.component';
import { GraphCurrentStatisticComponent } from '../../elements/short-cods/dashboard/graph-current-statistic/graph-current-statistic.component';
import { QuickTradeComponent } from '../../elements/short-cods/dashboard/quick-trade/quick-trade.component';
import { QuickTransferCrousalComponent } from '../../elements/short-cods/dashboard/quick-transfer-crousal/quick-transfer-crousal.component';
import { RecentTradingActivitiesComponent } from '../../elements/short-cods/dashboard/recent-trading-activities/recent-trading-activities.component';
import { DomSanitizer } from '@angular/platform-browser';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';

interface topCryptoType {
  icon: any,
  up_down: string,
  price: string
  up_down_class: string,
  time_period: string
}
interface CryptoType {
  image: string,
  icon_image: any,
  price: string,
  valid_thrugh: string,
  name: string
}

interface quickTransferType {
  name: string,
  username: string,
  image: string
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DropdownComponent,
    GraphMarketOverviewComponent,
    GraphCurrentStatisticComponent,
    QuickTradeComponent,
    QuickTransferCrousalComponent,
    RecentTradingActivitiesComponent,
    ReactiveFormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  dropdown_item = {
    select: 'Medan, IDN',
    value: ['Medan, IDN', 'Jakarta, IDN', 'Surabaya, IDN']
  }


  constructor(private sanitizer: DomSanitizer) { }

  topCrypto: topCryptoType[] = [
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg class="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="white"/>
              <path d="M40.725 0.00669178C18.6241 -0.393325 0.406678 17.1907 0.00666126 39.275C-0.393355 61.3592 17.1907 79.5933 39.2749 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8092 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17362 57.3257 7.50697 39.4083C7.82365 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8096 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z" fill="#00ADA3"/>
              <path d="M40.5283 10.8305C24.4443 10.5471 11.1271 23.3976 10.8438 39.4816C10.5438 55.549 23.3943 68.8662 39.4783 69.1662C55.5623 69.4495 68.8795 56.599 69.1628 40.5317C69.4462 24.4477 56.6123 11.1305 40.5283 10.8305ZM40.0033 19.1441L49.272 35.6798L40.8133 30.973C40.3083 30.693 39.6966 30.693 39.1916 30.973L30.7329 35.6798L40.0033 19.1441ZM40.0033 60.8509L30.7329 44.3152L39.1916 49.022C39.4433 49.162 39.7233 49.232 40.0016 49.232C40.28 49.232 40.56 49.162 40.8117 49.022L49.2703 44.3152L40.0033 60.8509ZM40.0033 45.6569L29.8296 39.9967L40.0033 34.3364L50.1754 39.9967L40.0033 45.6569Z" fill="#00ADA3"/>
          </svg>`),
      price: "$168,331.09",
      up_down: "45%",
      up_down_class: "success",
      time_period: "This week",

    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg class="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="white"/>
                <path d="M40 0C17.9083 0 0 17.9083 0 40C0 62.0917 17.9083 80 40 80C62.0917 80 80 62.0917 80 40C80 17.9083 62.0917 0 40 0ZM40 72.5C22.0783 72.5 7.5 57.92 7.5 40C7.5 22.08 22.0783 7.5 40 7.5C57.9217 7.5 72.5 22.0783 72.5 40C72.5 57.9217 57.92 72.5 40 72.5Z" fill="#FFAB2D"/>
                <path d="M42.065 41.2983H36.8133V49.1H42.065C43.125 49.1 44.1083 48.67 44.7983 47.9483C45.52 47.2566 45.95 46.275 45.95 45.1833C45.9517 43.0483 44.2 41.2983 42.065 41.2983Z" fill="#FFAB2D"/>
                <path d="M40 10.8333C23.9167 10.8333 10.8333 23.9166 10.8333 40C10.8333 56.0833 23.9167 69.1666 40 69.1666C56.0833 69.1666 69.1667 56.0816 69.1667 40C69.1667 23.9183 56.0817 10.8333 40 10.8333ZM45.935 53.5066H42.495V58.9133H38.8867V53.5066H36.905V58.9133H33.28V53.5066H26.9067V50.1133H30.4233V29.7799H26.9067V26.3866H33.28V21.0883H36.905V26.3866H38.8867V21.0883H42.495V26.3866H45.6283C47.3783 26.3866 48.9917 27.1083 50.1433 28.26C51.295 29.4116 52.0167 31.025 52.0167 32.775C52.0167 36.2 49.3133 38.995 45.935 39.1483C49.8967 39.1483 53.0917 42.3733 53.0917 46.335C53.0917 50.2816 49.8983 53.5066 45.935 53.5066Z" fill="#FFAB2D"/>
                <path d="M44.385 36.5066C45.015 35.8766 45.3983 35.0316 45.3983 34.08C45.3983 32.1916 43.8633 30.655 41.9733 30.655H36.8133V37.52H41.9733C42.91 37.52 43.77 37.12 44.385 36.5066Z" fill="#FFAB2D"/>
            </svg>`),
      price: "$24,098",
      up_down: "45%",
      up_down_class: "success",
      time_period: "This week",
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg class="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="white"/>
                <path d="M40.725 0.00669178C18.6241 -0.393325 0.406678 17.1907 0.00666126 39.275C-0.393355 61.3592 17.1907 79.5933 39.2749 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8092 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17362 57.3257 7.50697 39.4083C7.82365 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8096 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z" fill="#374C98"/>
                <path d="M40.5283 10.8305C24.4443 10.5471 11.1271 23.3976 10.8438 39.4816C10.5438 55.549 23.3943 68.8662 39.4783 69.1662C55.5623 69.4495 68.8795 56.599 69.1628 40.5317C69.4462 24.4477 56.6123 11.1305 40.5283 10.8305ZM52.5455 56.9324H26.0111L29.2612 38.9483L25.4944 39.7317V36.6649L29.8279 35.7482L32.6447 20.2809H43.2284L40.8283 33.4481L44.5285 32.6647V35.7315L40.2616 36.6149L37.7949 50.2154H54.5122L52.5455 56.9324Z" fill="#374C98"/>
            </svg>`),
      price: "$667,224",
      up_down: "45%",
      up_down_class: "danger",
      time_period: "This week",
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg class="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="white"/>
                <path d="M40.725 0.00669178C18.6241 -0.393325 0.406708 17.1907 0.00669178 39.275C-0.393325 61.3592 17.1907 79.5933 39.275 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8093 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17365 57.3257 7.507 39.4083C7.82368 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8097 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z" fill="#FF782C"/>
                <path d="M40.525 10.8238C24.441 10.5405 11.1238 23.391 10.8405 39.475C10.7455 44.5352 11.9605 49.3204 14.1639 53.5139H23.3326V24.8027C23.3326 23.0476 25.7177 22.4893 26.4928 24.0643L40 51.4171L53.5072 24.066C54.2822 22.4893 56.6674 23.0476 56.6674 24.8027V53.5139H65.8077C67.8578 49.6171 69.0779 45.2169 69.1595 40.525C69.4429 24.441 56.609 11.1238 40.525 10.8238Z" fill="#FF782C"/>
                <path d="M53.3339 55.1806V31.943L41.4934 55.919C40.9334 57.0574 39.065 57.0574 38.5049 55.919L26.6661 31.943V55.1806C26.6661 56.1007 25.9211 56.8474 24.9994 56.8474H16.2474C21.4326 64.1327 29.8629 68.9795 39.475 69.1595C49.4704 69.3362 58.3908 64.436 63.786 56.8474H55.0006C54.0789 56.8474 53.3339 56.1007 53.3339 55.1806Z" fill="#FF782C"/>
            </svg>`),
      price: "$667,224",
      up_down: "45%",
      up_down_class: "success",
      time_period: "This week",
    },
  ];


  cryptoCards: CryptoType[] = [
    {
      image: "assets/images/card/card1.jpg",
      icon_image: this.sanitizer.bypassSecurityTrustHtml(`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.2744 18.8013H16.0334V23.616H19.2744C19.9286 23.616 20.5354 23.3506 20.9613 22.9053C21.4066 22.4784 21.672 21.8726 21.672 21.1989C21.673 19.8813 20.592 18.8013 19.2744 18.8013Z" fill="white"></path>
              <path d="M18 0C8.07429 0 0 8.07429 0 18C0 27.9257 8.07429 36 18 36C27.9257 36 36 27.9247 36 18C36 8.07531 27.9247 0 18 0ZM21.6627 26.3355H19.5398V29.6722H17.3129V26.3355H16.0899V29.6722H13.8528V26.3355H9.91954V24.2414H12.0898V11.6928H9.91954V9.59863H13.8528V6.3288H16.0899V9.59863H17.3129V6.3288H19.5398V9.59863H21.4735C22.5535 9.59863 23.5491 10.044 24.2599 10.7547C24.9706 11.4655 25.416 12.4611 25.416 13.5411C25.416 15.6549 23.7477 17.3798 21.6627 17.4744C24.1077 17.4744 26.0794 19.4647 26.0794 21.9096C26.0794 24.3453 24.1087 26.3355 21.6627 26.3355Z" fill="white"></path>
              <path d="M20.7062 15.8441C21.095 15.4553 21.3316 14.9338 21.3316 14.3465C21.3316 13.1812 20.3842 12.2328 19.2178 12.2328H16.0334V16.4695H19.2178C19.7959 16.4695 20.3266 16.2226 20.7062 15.8441Z" fill="white"></path>
            </svg>`),
      price: "$673,412.66",
      valid_thrugh: "08/21",
      name: "Marquezz Silalahi",

    },
    {
      image: "assets/images/card/card2.jpg",
      icon_image: this.sanitizer.bypassSecurityTrustHtml(`<svg width="55" height="34" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="38.0091" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
              <circle cx="17.4636" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
          </svg>`),
      price: "$673,412.66",
      valid_thrugh: "08/21",
      name: "Marquezz Silalahi",
    },
    {
      image: "assets/images/card/card3.jpg",
      icon_image: this.sanitizer.bypassSecurityTrustHtml(`<svg width="55" height="34" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="38.0091" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
              <circle cx="17.4636" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
          </svg>`),
      price: "$673,412.66",
      valid_thrugh: "08/21",
      name: "Marquezz Silalahi",
    },
    {
      image: "assets/images/card/card4.jpg",
      icon_image: this.sanitizer.bypassSecurityTrustHtml(`<svg width="55" height="34" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="38.0091" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
              <circle cx="17.4636" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
          </svg>`),
      price: "$673,412.66",
      valid_thrugh: "08/21",
      name: "Marquezz Silalahi",
    },
  ];


  quickTransfer: quickTransferType[] = [
    // {
    //   name: "Samuel",
    //   username: "@sam224",
    //   image: "assets/images/contacts/Untitled-1.jpg",

    // },
    // {
    //   name: "Cindy",
    //   username: "@cindyss",
    //   image: "assets/images/contacts/Untitled-2.jpg",
    // },
    // {
    //   name: "David",
    //   username: "@davidxc",
    //   image: "assets/images/contacts/Untitled-3.jpg",
    // },
    // {
    //   name: "Martha",
    //   username: "@marthaa",
    //   image: "assets/images/contacts/Untitled-4.jpg",
    // },
    // {
    //   name: "Olivia",
    //   username: "@oliv62",
    //   image: "assets/images/contacts/Untitled-5.jpg",
    // },
    // {
    //   name: "Samuel",
    //   username: "@sam224",
    //   image: "assets/images/contacts/Untitled-1.jpg",

    // },
    // {
    //   name: "Cindy",
    //   username: "@cindyss",
    //   image: "assets/images/contacts/Untitled-2.jpg",
    // },
    // {
    //   name: "David",
    //   username: "@davidxc",
    //   image: "assets/images/contacts/Untitled-3.jpg",
    // },
    // {
    //   name: "Martha",
    //   username: "@marthaa",
    //   image: "assets/images/contacts/Untitled-4.jpg",
    // },
    // {
    //   name: "Olivia",
    //   username: "@oliv62",
    //   image: "assets/images/contacts/Untitled-5.jpg",
    // },
  ];
  quickTransfer_dropdown = {
    select: 1,
    select_style: 'custom-image-select',
    value_img: [
      {
        value: 'Ripple',
        img: 'assets/images/svg/btc.svg'
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
}
