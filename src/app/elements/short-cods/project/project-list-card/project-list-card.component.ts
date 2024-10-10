import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface listType {
  id: string,
  product_name: string,
  date: string,
  client_name: string,
  client_image?: string,
  person_name: string,
  person_image?: string,
  deadline_date: string,
  status: string
}
@Component({
  selector: 'app-project-list-card',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink
  ],
  templateUrl: './project-list-card.component.html',
  styleUrl: './project-list-card.component.css'
})
export class ProjectListCardComponent {

  @Input() data: any;

  productList: any = [];

  ngOnInit() {
    this.productList = this.allproduct.filter(item => {
      return this.data === 'all' ? item : item.status === this.data;
    });
  }

  deleteProject(id: any) {
    this.productList.map((val: any, i: any) => {
      if (id == i) {
        this.productList.splice(id, 1);
      }
    });
  }

  allproduct: listType[] = [
    {
      id: '#P-000441425',
      product_name: 'Redesign Kripton Mobile App',
      date: 'Created on Sep 8th, 2020',
      client_image: 'assets/images/users/pic1.jpg',
      client_name: 'Alex Noer',
      person_image: 'assets/images/users/pic2.jpg',
      person_name: 'Yoast Esec',
      deadline_date: 'Tuesday,Sep 29th 2020',
      status: 'Pending'
    },
    {
      id: '#P-000441425',
      product_name: 'Build Branding Persona for Etza.id',
      date: 'Created on Sep 8th, 2020',
      client_image: 'assets/images/users/pic4.jpg',
      client_name: 'Kevin Sigh',
      person_image: 'assets/images/users/pic3.jpg',
      person_name: 'Kevin Sigh',
      deadline_date: 'Tuesday,Sep 29th 2020',
      status: 'Progress'
    },
    {
      id: '#P-000441425',
      product_name: 'Manage SEO for Eclan Company P..',
      date: 'Created on Sep 8th, 2020',
      client_name: 'Angela Moss',
      person_image: 'assets/images/users/pic2.jpg',
      person_name: 'Olivia Jonson',
      deadline_date: 'Tuesday,Sep 29th 2020',
      status: 'Pending'
    },
    {
      id: '#P-000441425',
      product_name: 'Reduce Website Page Size Omah',
      date: 'Created on Sep 8th, 2020',
      client_name: 'Endge Aes',
      person_name: 'Bella Sirait',
      deadline_date: 'Tuesday,Sep 29th 2020',
      status: 'Pending'
    },
    {
      id: '#P-000441425',
      product_name: 'Build Branding Persona for Etza.id',
      date: 'Created on Sep 8th, 2020',
      client_image: 'assets/images/users/pic4.jpg',
      client_name: 'Kevin Sigh',
      person_image: 'assets/images/users/pic3.jpg',
      person_name: 'Kevin Sigh',
      deadline_date: 'Tuesday,Sep 29th 2020',
      status: 'Closed'
    },
    {
      id: '#P-000441425',
      product_name: 'Manage SEO for Eclan Company P..',
      date: 'Created on Sep 8th, 2020',
      client_image: 'assets/images/users/pic8.jpg',
      client_name: 'Angela Moss',
      person_name: 'Olivia Jonson',
      deadline_date: 'Tuesday,Sep 29th 2020',
      status: 'Pending'
    },
    {
      id: '#P-000441425',
      product_name: 'Build Branding Persona for Etza.id',
      date: 'Created on Sep 8th, 2020',
      client_image: 'assets/images/users/pic4.jpg',
      client_name: 'Kevin Sigh',
      person_image: 'assets/images/users/pic3.jpg',
      person_name: 'Kevin Sigh',
      deadline_date: 'Tuesday,Sep 29th 2020',
      status: 'Progress'
    },
    {
      id: '#P-000441425',
      product_name: 'Manage SEO for Eclan Company P..',
      date: 'Created on Sep 8th, 2020',
      client_image: 'assets/images/users/pic8.jpg',
      client_name: 'Angela Moss',
      person_name: 'Olivia Jonson',
      deadline_date: 'Tuesday,Sep 29th 2020',
      status: 'Progress'
    }
  ]
}
