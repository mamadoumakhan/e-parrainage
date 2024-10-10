import { Component, Input, HostListener } from '@angular/core';
import { SwiperModule } from "swiper/angular";
import SwiperCore, { Scrollbar, FreeMode, Navigation, Pagination, Swiper, Mousewheel } from "swiper";
SwiperCore.use([FreeMode, Scrollbar, Mousewheel]);


@Component({
  selector: 'app-card-swiper',
  standalone: true,
  imports: [
    SwiperModule,
  ],
  templateUrl: './card-swiper.component.html',
  styleUrl: './card-swiper.component.css'
})
export class CardSwiperComponent {

  @Input() data: any;

  ngOnInit(): void {
    this.swiperFunction();
  }

  swiperFunction() {
    var swiper = new Swiper('.card-swiper', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
      breakpoints: {
        360: {
          direction: 'horizontal',
          slidesPerView: 'auto',
        },
        650: {
          direction: 'horizontal',
          slidesPerView: 2,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        },
        1200: {
          direction: 'vertical',
          slidesPerView: 'auto',
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        },
      },
    });
  }
}
