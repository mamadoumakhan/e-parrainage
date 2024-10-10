import { Component } from '@angular/core';
import { ProfileTabComponent } from '../../../elements/short-cods/apps/profile-tab/profile-tab.component';
import { ProfileSidMenuComponent } from '../../../elements/short-cods/apps/profile-sid-menu/profile-sid-menu.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileHeadComponent } from '../../../elements/short-cods/apps/profile-head/profile-head.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileTabComponent,
    ProfileSidMenuComponent,
    BreadcrumbComponent,
    ProfileHeadComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  breadcrumbList = {
    title: 'Hi, welcome back!',
    subTitle: 'Your business dashboard template',
    menu_path: 'Apps',
    currentURL: 'Profile',
  }
  profileDetailArray = {
    name:'Mitchell C. Shay',
    email: 'info@example.com'
  }
}
