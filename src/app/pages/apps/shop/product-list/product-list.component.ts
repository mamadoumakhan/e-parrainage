import { Component } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgClass } from '@angular/common';
interface type {
  image: string;
  title: string;
  url: string;
  reviews: number;
  price: number;
  rating?: string[];
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, NgClass, NgbModule, CurrencyPipe, BreadcrumbComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  breadcrumbList = {
    menu_path: 'Shop',
    currentURL: 'Product List',
  }

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { centered: false });
  }


  productList: type[] = [
    {
      image: "assets/images/product/2.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 350,
      reviews: 34,
      rating: ["fa fa-star", "fa fa-star", "fa fa-star", "fa-solid fa-star-half-stroke", "fa-regular fa-star",]
    },
    {
      image: "assets/images/product/3.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 320,
      reviews: 50,
      rating: ["fa fa-star", "fa fa-star", "fa fa-star", "fa-solid fa-star-half-stroke", "fa-regular fa-star",]
    },
    {
      image: "assets/images/product/4.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 520,
      reviews: 60,
      rating: ["fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star",]
    },
    {
      image: "assets/images/product/5.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 380,
      reviews: 40,
      rating: ["fa fa-star", "fa fa-star", "fa-solid fa-star-half-stroke", "fa-regular fa-star", "fa-regular fa-star",]
    },
    {
      image: "assets/images/product/6.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 280,
      reviews: 30,
      rating: ["fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star",]
    },
    {
      image: "assets/images/product/7.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 680,
      reviews: 48,
      rating: ["fa fa-star", "fa fa-star", "fa-regular fa-star", "fa-regular fa-star", "fa-regular fa-star",]
    }
  ]

}
