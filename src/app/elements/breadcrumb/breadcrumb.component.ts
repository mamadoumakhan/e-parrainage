import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

  @Input() breadcrumb: any = '';
  title?: string = '';
  subTitle?: string = '';
  currentURL?: string = '';
  breadcrumb_path?: string = '';
  ngOnInit() {
    this.title = this.breadcrumb.title ? this.breadcrumb.title : 'Salut, Soyez la Bienvenue!';
    this.subTitle = this.breadcrumb.subTitle ? this.breadcrumb.subTitle : 'Votre Tableau de Bord de Gestion de Parrainage';
    this.breadcrumb_path = this.breadcrumb.menu_path;
    this.currentURL = this.breadcrumb.currentURL;
  }

}
