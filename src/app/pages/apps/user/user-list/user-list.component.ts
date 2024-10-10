
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../../elements/pagination/pagination.component';

export interface Dessert {
  id: number;
  name: string;
  image?: string,
  email: string,
  country: string;
  date: string;
  company_name: string;
  status: string;
  status_class?: string
}
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSortModule,
    CurrencyPipe,
    NgbModule,
    RouterLink,
    PaginationComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  active = 1;
  page: any = 1;
  totalRows: number = 10;
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
      id: 1,
      name: 'John Doe',
      image: 'assets/images/avatar/1.jpg',
      email: 'johndoe@gmail.com',
      country: 'England',
      date: '10/11/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Pending',
      status_class: 'warning'
    },
    {
      id: 2,
      name: 'Alex Smith',
      email: 'alexsmith@gmail.com',
      country: 'Indonasia',
      date: '25/02/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Closed',
      status_class: 'danger'
    },
    {
      id: 3,
      name: 'John Doe',
      image: 'assets/images/users/pic3.jpg',
      email: 'johndoe@gmail.com',
      country: 'Malesia',
      date: '12/01/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Info',
      status_class: 'info'
    },
    {
      id: 4,
      name: 'Alex Smith',
      image: 'assets/images/users/pic4.jpg',
      email: 'alexsmith@gmail.com',
      country: 'England',
      date: '13/01/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Success',
      status_class: 'success'
    },
    {
      id: 5,
      name: 'Post Melone',
      email: 'johndoe@gmail.com',
      country: 'China',
      date: '10/03/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Closed',
      status_class: 'danger'
    },
    {
      id: 6,
      name: 'John Doe',
      image: 'assets/images/users/pic6.jpg',
      email: 'johndoe@gmail.com',
      country: 'Africa',
      date: '15/05/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Info',
      status_class: 'info'
    },
    {
      id: 7,
      name: 'John Doe',
      image: 'assets/images/users/pic7.jpg',
      email: 'johndoe@gmail.com',
      country: 'England',
      date: '15/01/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Pending',
      status_class: 'warning'
    },
    {
      id: 8,
      name: 'John Doe',
      image: 'assets/images/users/pic8.jpg',
      email: 'johndoe@gmail.com',
      country: 'England',
      date: '15/01/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Success',
      status_class: 'success'
    },
    {
      id: 9,
      name: 'John Doe',
      image: 'assets/images/users/pic5.jpg',
      email: 'johndoe@gmail.com',
      country: 'Africa',
      date: '15/03/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Info',
      status_class: 'info'
    },
    {
      id: 10,
      name: 'John Doe',
      image: 'assets/images/users/pic7.jpg',
      email: 'johndoe@gmail.com',
      country: 'China',
      date: '15/04/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Closed',
      status_class: 'danger'
    },
    {
      id: 11,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      country: 'England',
      date: '11/21/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Success',
      status_class: 'success'
    },
    {
      id: 12,
      name: 'John Doe',
      image: 'assets/images/users/pic2.jpg',
      email: 'johndoe@gmail.com',
      country: 'Indonasia',
      date: '15/02/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Pending',
      status_class: 'warning'
    }
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
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'country': return compare(a.country, b.country, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'company_name': return compare(a.company_name, b.company_name, isAsc);
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
