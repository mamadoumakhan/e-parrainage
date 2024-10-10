
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ImageDropdownComponent } from '../../../dropdown/image-dropdown/image-dropdown.component';

@Component({
  selector: 'app-quick-transfer-crousal',
  standalone: true,
  imports: [
    CarouselModule,
    RouterLink,
    ImageDropdownComponent
  ],
  templateUrl: './quick-transfer-crousal.component.html',
  styleUrl: './quick-transfer-crousal.component.css'
})
export class QuickTransferCrousalComponent {

  @Input() data: any;
  @Input() drop_item: any;

  customOptions: any = {
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    rtl: true,
    dots: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      450: {
        items: 4
      },
      600: {
        items: 5
      },
      991: {
        items: 7
      },
      1200: {
        items: 7
      },
      1601: {
        items: 5
      }
    }
  }

  dropdown_item = {
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
