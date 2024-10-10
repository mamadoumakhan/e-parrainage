import { Component, Input } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarketChartComponent } from '../market-chart/market-chart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { PaginationComponent } from '../../../pagination/pagination.component';
import { DomSanitizer } from '@angular/platform-browser';

export interface Dessert {
  rank: string;
  price: string;
  change: string;
  volume: string;
  rank_class: string,
  coin_image: any,
  name: string,
  graph_series: number[],
}

@Component({
  selector: 'app-market-table',
  standalone: true,
  imports: [
    NgbModule,
    MarketChartComponent,

    MatFormFieldModule,
    MatSortModule,
    CurrencyPipe,
    RouterLink,
    PaginationComponent,
  ],
  templateUrl: './market-table.component.html',
  styleUrl: './market-table.component.css'
})
export class MarketTableComponent {

  @Input() marketCapital: any;

  active = 1;
  page: any = 1;
  totalRows: number = 6;
  totalPage: any = 0;
  allData: any = [];

  desserts: Dessert[] = [];


  constructor(private modalService: NgbModal, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.desserts = this.marketCapital;
    this.orderData = this.desserts?.slice();
    setTimeout(() => {
      this.allData = this.paginator(this.orderData, this.page, this.totalRows);
      this.totalPage = this.allData.total_pages;
    }, 100);
  }

  orderData: Dessert[] | undefined;

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'rank': return compare(a.rank, b.rank, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        case 'change': return compare(a.change, b.change, isAsc);
        case 'volume': return compare(a.volume, b.volume, isAsc);
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
