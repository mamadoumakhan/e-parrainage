import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../elements/pagination/pagination.component';

export interface Dessert {
  image?: string,
  trans_id: string;
  trans_date: string;
  from: string,
  user_image: string;
  to: string;
  coin: string;
  coin_image: any;
  amount: string;
  note: string;
  status: string;
  status_class: string;
}

@Component({
  selector: 'app-tranasactions',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSortModule,
    NgbModule,
    RouterLink,
    PaginationComponent,
  ],
  templateUrl: './tranasactions.component.html',
  styleUrl: './tranasactions.component.css'
})
export class TranasactionsComponent {


  constructor(private sanitizer: DomSanitizer, private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  active = 1;
  page: any = 1;
  totalRows: number = 6;
  totalPage: any = 0;
  allData: any = [];


  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  breadcrumbList = {
    menu_path: 'Customers',
    currentURL: 'Customers List',
  }

  desserts: Dessert[] = [
    {
      image: "assets/images/svg/ic_sell.svg",
      trans_id: "#12415346563475",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-1.jpg",
      to: "Samuel",
      coin: "Bitcoin",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`
      <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3811 13.8733C12.1369 13.9546 11.865 13.9546 11.6209 13.8733L9.00098 13L12.001 18L15.001 13L12.3811 13.8733Z" fill="#00ADA3"/>
        <path d="M12.001 12L15.001 10.8L12.001 5.99997L9.00098 10.8L12.001 12Z" fill="#00ADA3"/>
        <path d="M12.001 -3.05176e-05C5.37358 -3.05176e-05 0.000976562 5.37257 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9937 5.37571 18.6252 0.00729373 12.001 -3.05176e-05ZM17.0534 11.5262L12.7677 20.0977C12.556 20.5212 12.041 20.6928 11.6178 20.4812C11.4517 20.3983 11.3172 20.2638 11.2343 20.0977L6.94855 11.5262C6.81541 11.2589 6.83058 10.9416 6.98857 10.6881L11.2743 3.83108C11.5592 3.42981 12.115 3.33512 12.5163 3.61998C12.5982 3.67805 12.6696 3.7492 12.7276 3.83108L17.0131 10.6881C17.1714 10.9416 17.1865 11.2589 17.0534 11.5262Z" fill="#00ADA3"/>
    </svg>
            `),
      amount: "+$5,553",
      note: "Lorem ipsum dol",
      status: "CANCELED",
      status_class: "text-danger",
    },
    {
      image: "assets/images/svg/ic_buy.svg",
      trans_id: "#124153465125511",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-2.jpg",
      to: "Cindy",
      coin: "Ethereum",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`
      <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z" fill="#FFAB2D"/>
      <path d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z" fill="#FFAB2D"/>
      <path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
      </svg>
    `),
      amount: "-$12,768",
      note: "Lorem ipsum dol.",
      status: "COMPLETED",
      status_class: "text-success",
    },
    {
      image: "assets/images/svg/ic_buy.svg",
      trans_id: "#124153465125511",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-3.jpg",
      to: "Marquezz",
      coin: "Ripple",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`
      <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 0C5.37358 0 0.000976562 5.3726 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9934 5.37574 18.6252 0.00758581 12.001 0ZM16.2867 18.0001H9.42964C8.95618 18.0001 8.57244 17.6164 8.57244 17.1429C8.57244 17.1024 8.57532 17.0618 8.58107 17.0216L9.22613 12.5054L7.9232 12.8313C7.85519 12.8486 7.78535 12.8572 7.71524 12.8572C7.24178 12.8567 6.85857 12.4727 6.85883 11.9992C6.85935 11.6063 7.12669 11.2642 7.50781 11.1684L9.48771 10.6735L10.2952 5.0213C10.3622 4.55254 10.7964 4.22714 11.2652 4.2941C11.7339 4.36107 12.0593 4.79529 11.9923 5.26404L11.2835 10.2247L14.3646 9.4543C14.8232 9.33737 15.2896 9.61439 15.4062 10.0729C15.5232 10.5315 15.2461 10.9979 14.7876 11.1148C14.785 11.1153 14.7824 11.1161 14.7797 11.1166L11.0214 12.0562L10.4174 16.2857H16.2867C16.7602 16.2857 17.1439 16.6695 17.1439 17.1429C17.1439 17.6161 16.7602 18.0001 16.2867 18.0001Z" fill="#374C98"/>
      </svg>
      `),
      amount: "-$455",
      note: "Lorem ipsum dol",
      status: "COMPLETED",
      status_class: "text-success",
    },
    {
      image: "assets/images/svg/ic_sell.svg",
      trans_id: "#12415346563475",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-1.jpg",
      to: "David",
      coin: "Litecoin",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`<svg class="me-1" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2176 0.00189099C5.59969 -0.114662 0.120182 5.17136 0.00359729 11.7875C-0.035493 13.869 0.464451 15.8373 1.37107 17.5623H5.14363V5.75207C5.14363 5.03013 6.12501 4.80045 6.4439 5.44835L12.0016 16.6998L17.5593 5.44903C17.8782 4.80045 18.8595 5.03013 18.8595 5.75207V17.5623H22.6204C23.464 15.9594 23.966 14.1494 23.9996 12.2194C24.1162 5.60329 18.8355 0.1253 12.2176 0.00189099Z" fill="#FF782C"/>
      <path d="M17.4879 18.2479V8.6892L12.6161 18.5516C12.3856 19.0199 11.6169 19.0199 11.3864 18.5516L6.51522 8.6892V18.2479C6.51522 18.6264 6.20867 18.9335 5.82943 18.9335H2.22832C4.36183 21.9303 7.83058 23.9241 11.7856 23.9981C15.8983 24.0708 19.5686 22.0551 21.7886 18.9335H18.1737C17.7945 18.9335 17.4879 18.6264 17.4879 18.2479Z" fill="#FF782C"/>
  </svg>`),
      amount: "+$5,553",
      note: "None",
      status: "PENDING",
      status_class: "text-dark",
    },
    {
      image: "assets/images/svg/ic_sell.svg",
      trans_id: "#12415346563475",
      trans_date: '2/5/2024 06:24 AM',
      from: "Thomas",
      user_image: "assets/images/table/Untitled-1.jpg",
      to: "Cindy",
      coin: "Bitcoin",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`
      <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z" fill="#FFAB2D"/>
      <path d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z" fill="#FFAB2D"/>
      <path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
  </svg>`),
      amount: "+$5,553",
      note: "Lorem ipsum dol",
      status: "COMPLETED",
      status_class: "text-success",
    },
    {
      image: "assets/images/svg/ic_buy.svg",
      trans_id: "#124153465125511",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-2.jpg",
      to: "Samuel",
      coin: "Ethereum",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`<svg class="me-1" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2176 0.00189099C5.59969 -0.114662 0.120182 5.17136 0.00359729 11.7875C-0.035493 13.869 0.464451 15.8373 1.37107 17.5623H5.14363V5.75207C5.14363 5.03013 6.12501 4.80045 6.4439 5.44835L12.0016 16.6998L17.5593 5.44903C17.8782 4.80045 18.8595 5.03013 18.8595 5.75207V17.5623H22.6204C23.464 15.9594 23.966 14.1494 23.9996 12.2194C24.1162 5.60329 18.8355 0.1253 12.2176 0.00189099Z" fill="#FF782C"/>
      <path d="M17.4879 18.2479V8.6892L12.6161 18.5516C12.3856 19.0199 11.6169 19.0199 11.3864 18.5516L6.51522 8.6892V18.2479C6.51522 18.6264 6.20867 18.9335 5.82943 18.9335H2.22832C4.36183 21.9303 7.83058 23.9241 11.7856 23.9981C15.8983 24.0708 19.5686 22.0551 21.7886 18.9335H18.1737C17.7945 18.9335 17.4879 18.6264 17.4879 18.2479Z" fill="#FF782C"/>
  </svg>`),
      amount: "-$12,768",
      note: "None",
      status: "PENDING",
      status_class: "text-dark",
    },
    {
      image: "assets/images/svg/ic_sell.svg",
      trans_id: "#124153465125511",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-3.jpg",
      to: "Samuel",
      coin: "Ripple",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`
      <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 0C5.37358 0 0.000976562 5.3726 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9934 5.37574 18.6252 0.00758581 12.001 0ZM16.2867 18.0001H9.42964C8.95618 18.0001 8.57244 17.6164 8.57244 17.1429C8.57244 17.1024 8.57532 17.0618 8.58107 17.0216L9.22613 12.5054L7.9232 12.8313C7.85519 12.8486 7.78535 12.8572 7.71524 12.8572C7.24178 12.8567 6.85857 12.4727 6.85883 11.9992C6.85935 11.6063 7.12669 11.2642 7.50781 11.1684L9.48771 10.6735L10.2952 5.0213C10.3622 4.55254 10.7964 4.22714 11.2652 4.2941C11.7339 4.36107 12.0593 4.79529 11.9923 5.26404L11.2835 10.2247L14.3646 9.4543C14.8232 9.33737 15.2896 9.61439 15.4062 10.0729C15.5232 10.5315 15.2461 10.9979 14.7876 11.1148C14.785 11.1153 14.7824 11.1161 14.7797 11.1166L11.0214 12.0562L10.4174 16.2857H16.2867C16.7602 16.2857 17.1439 16.6695 17.1439 17.1429C17.1439 17.6161 16.7602 18.0001 16.2867 18.0001Z" fill="#374C98"/>
      </svg>`),
      amount: "-$455",
      note: "Lorem ipsum dol..",
      status: "CANCELED",
      status_class: "text-danger",
    },
    {
      image: "assets/images/svg/ic_sell.svg",
      trans_id: "#12415346563475",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-3.jpg",
      to: "David",
      coin: "Litecoin",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`<svg class="me-1" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2176 0.00189099C5.59969 -0.114662 0.120182 5.17136 0.00359729 11.7875C-0.035493 13.869 0.464451 15.8373 1.37107 17.5623H5.14363V5.75207C5.14363 5.03013 6.12501 4.80045 6.4439 5.44835L12.0016 16.6998L17.5593 5.44903C17.8782 4.80045 18.8595 5.03013 18.8595 5.75207V17.5623H22.6204C23.464 15.9594 23.966 14.1494 23.9996 12.2194C24.1162 5.60329 18.8355 0.1253 12.2176 0.00189099Z" fill="#FF782C"/>
      <path d="M17.4879 18.2479V8.6892L12.6161 18.5516C12.3856 19.0199 11.6169 19.0199 11.3864 18.5516L6.51522 8.6892V18.2479C6.51522 18.6264 6.20867 18.9335 5.82943 18.9335H2.22832C4.36183 21.9303 7.83058 23.9241 11.7856 23.9981C15.8983 24.0708 19.5686 22.0551 21.7886 18.9335H18.1737C17.7945 18.9335 17.4879 18.6264 17.4879 18.2479Z" fill="#FF782C"/>
  </svg>`),
      amount: "+$5,553",
      note: "None",
      status: "PENDING",
      status_class: "text-dark",
    },
    {
      image: "assets/images/svg/ic_buy.svg",
      trans_id: "#12415346563475",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-1.jpg",
      to: "Lucyana",
      coin: "Bitcoin",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`
      <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z" fill="#FFAB2D"/>
      <path d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z" fill="#FFAB2D"/>
      <path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
  </svg>`),
      amount: "+$5,553",
      note: "Lorem ipsum dol",
      status: "COMPLETED",
      status_class: "text-success",
    },
    {
      image: "assets/images/svg/ic_buy.svg",
      trans_id: "#124153465125511",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-2.jpg",
      to: "Cindy",
      coin: "Ethereum",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`<svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3811 13.8733C12.1369 13.9546 11.865 13.9546 11.6209 13.8733L9.00098 13L12.001 18L15.001 13L12.3811 13.8733Z" fill="#00ADA3"/>
      <path d="M12.001 12L15.001 10.8L12.001 5.99997L9.00098 10.8L12.001 12Z" fill="#00ADA3"/>
      <path d="M12.001 -3.05176e-05C5.37358 -3.05176e-05 0.000976562 5.37257 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9937 5.37571 18.6252 0.00729373 12.001 -3.05176e-05ZM17.0534 11.5262L12.7677 20.0977C12.556 20.5212 12.041 20.6928 11.6178 20.4812C11.4517 20.3983 11.3172 20.2638 11.2343 20.0977L6.94855 11.5262C6.81541 11.2589 6.83058 10.9416 6.98857 10.6881L11.2743 3.83108C11.5592 3.42981 12.115 3.33512 12.5163 3.61998C12.5982 3.67805 12.6696 3.7492 12.7276 3.83108L17.0131 10.6881C17.1714 10.9416 17.1865 11.2589 17.0534 11.5262Z" fill="#00ADA3"/>
  </svg>`),
      amount: "-$12,768",
      note: "Lorem ipsum dol",
      status: "COMPLETED",
      status_class: "text-success",
    },
    {
      image: "assets/images/svg/ic_sell.svg",
      trans_id: "#12415346512532",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-3.jpg",
      to: "Litecoin",
      coin: "Ripple",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(` <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 0C5.37358 0 0.000976562 5.3726 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9934 5.37574 18.6252 0.00758581 12.001 0ZM16.2867 18.0001H9.42964C8.95618 18.0001 8.57244 17.6164 8.57244 17.1429C8.57244 17.1024 8.57532 17.0618 8.58107 17.0216L9.22613 12.5054L7.9232 12.8313C7.85519 12.8486 7.78535 12.8572 7.71524 12.8572C7.24178 12.8567 6.85857 12.4727 6.85883 11.9992C6.85935 11.6063 7.12669 11.2642 7.50781 11.1684L9.48771 10.6735L10.2952 5.0213C10.3622 4.55254 10.7964 4.22714 11.2652 4.2941C11.7339 4.36107 12.0593 4.79529 11.9923 5.26404L11.2835 10.2247L14.3646 9.4543C14.8232 9.33737 15.2896 9.61439 15.4062 10.0729C15.5232 10.5315 15.2461 10.9979 14.7876 11.1148C14.785 11.1153 14.7824 11.1161 14.7797 11.1166L11.0214 12.0562L10.4174 16.2857H16.2867C16.7602 16.2857 17.1439 16.6695 17.1439 17.1429C17.1439 17.6161 16.7602 18.0001 16.2867 18.0001Z" fill="#374C98"/>
      </svg>`),
      amount: "-$455",
      note: "Lorem ipsum dol",
      status: "COMPLETED",
      status_class: "text-success",
    },
    {
      image: "assets/images/svg/ic_buy.svg",
      trans_id: "#12415346563475",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-3.jpg",
      to: "Lucyana",
      coin: "Litecoin",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`<svg class="me-1" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2176 0.00189099C5.59969 -0.114662 0.120182 5.17136 0.00359729 11.7875C-0.035493 13.869 0.464451 15.8373 1.37107 17.5623H5.14363V5.75207C5.14363 5.03013 6.12501 4.80045 6.4439 5.44835L12.0016 16.6998L17.5593 5.44903C17.8782 4.80045 18.8595 5.03013 18.8595 5.75207V17.5623H22.6204C23.464 15.9594 23.966 14.1494 23.9996 12.2194C24.1162 5.60329 18.8355 0.1253 12.2176 0.00189099Z" fill="#FF782C"/>
      <path d="M17.4879 18.2479V8.6892L12.6161 18.5516C12.3856 19.0199 11.6169 19.0199 11.3864 18.5516L6.51522 8.6892V18.2479C6.51522 18.6264 6.20867 18.9335 5.82943 18.9335H2.22832C4.36183 21.9303 7.83058 23.9241 11.7856 23.9981C15.8983 24.0708 19.5686 22.0551 21.7886 18.9335H18.1737C17.7945 18.9335 17.4879 18.6264 17.4879 18.2479Z" fill="#FF782C"/>
  </svg>`),
      amount: "+$5,553",
      note: "Lorem ipsum dol",
      status: "COMPLETED",
      status_class: "text-success",
    },
    {
      image: "assets/images/svg/ic_buy.svg",
      trans_id: "#12415346563555",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-3.jpg",
      to: "Cindy",
      coin: "Bitcoin",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`
      <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z" fill="#FFAB2D"/>
      <path d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z" fill="#FFAB2D"/>
      <path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
  </svg>`),
      amount: "+$5,553",
      note: "Lorem ipsum dol",
      status: "COMPLETED",
      status_class: "text-success",
    },
    {
      image: "assets/images/svg/ic_buy.svg",
      trans_id: "#124153465125511",
      trans_date: '2/5/2024 06:24 AM',
      from: "Marquezz",
      user_image: "assets/images/table/Untitled-2.jpg",
      to: "Lucyana",
      coin: "Ethereum",
      coin_image: this.sanitizer.bypassSecurityTrustHtml(`<svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3811 13.8733C12.1369 13.9546 11.865 13.9546 11.6209 13.8733L9.00098 13L12.001 18L15.001 13L12.3811 13.8733Z" fill="#00ADA3"/>
      <path d="M12.001 12L15.001 10.8L12.001 5.99997L9.00098 10.8L12.001 12Z" fill="#00ADA3"/>
      <path d="M12.001 -3.05176e-05C5.37358 -3.05176e-05 0.000976562 5.37257 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9937 5.37571 18.6252 0.00729373 12.001 -3.05176e-05ZM17.0534 11.5262L12.7677 20.0977C12.556 20.5212 12.041 20.6928 11.6178 20.4812C11.4517 20.3983 11.3172 20.2638 11.2343 20.0977L6.94855 11.5262C6.81541 11.2589 6.83058 10.9416 6.98857 10.6881L11.2743 3.83108C11.5592 3.42981 12.115 3.33512 12.5163 3.61998C12.5982 3.67805 12.6696 3.7492 12.7276 3.83108L17.0131 10.6881C17.1714 10.9416 17.1865 11.2589 17.0534 11.5262Z" fill="#00ADA3"/>
  </svg>`),
      amount: "+987",
      note: "Lorem ipsum dol",
      status: "PENDING",
      status_class: "text-dark",
    },
  ];

  orderData: Dessert[];
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'trans_id': return compare(a.trans_id, b.trans_id, isAsc);
        case 'trans_date': return compare(a.trans_date, b.trans_date, isAsc);
        case 'from': return compare(a.from, b.from, isAsc);
        case 'to': return compare(a.to, b.to, isAsc);
        case 'coin': return compare(a.coin, b.coin, isAsc);
        case 'amount': return compare(a.amount, b.amount, isAsc);
        case 'note': return compare(a.note, b.note, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  paginator(items: any, current_page: any, per_page_items: any) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,

      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
