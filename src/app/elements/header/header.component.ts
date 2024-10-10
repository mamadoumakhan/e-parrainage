import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WgNotificationsComponent } from '../widget/list/wg-notifications/wg-notifications.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WgTimeline1Component } from '../widget/list/wg-timeline-1/wg-timeline-1.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgbModule,
    TitleCasePipe,
    WgNotificationsComponent,
    WgTimeline1Component
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() dashboardTitle: any;

  fullScreenClass: boolean = false;
  toggleMode: any;
  elementValue: any;
  localData: any = '';
  currentTitle: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      if (params.theme == 'dark' || params.theme == 'light') {
        localStorage.setItem("data-theme-version", params.theme);
      }
    });
  }

  ngAfterContentChecked() {
    if (this.router.url == '/admin') {
      this.currentTitle = 'Dashboard';
    } else {
      this.currentTitle = this.dashboardTitle ? this.dashboardTitle : 'DashBoard';
    }
  }

  ngDoCheck() {
    this.themeMode2();
  }

  themeMode2() {    // Theme mode dark - light
    this.localData = localStorage.getItem('data-theme-version');
    if (this.localData != null) {
      document.body.setAttribute('data-theme-version', this.localData);
    }
  }

  themeMode() {     // Theme mode dark - light
    this.elementValue = document.body.getAttribute('data-theme-version');
    this.localData = localStorage.getItem('data-theme-version');

    if (this.elementValue == 'light' && this.localData == 'light') {
      this.toggleMode = 'dark';
    } else {
      this.toggleMode = 'light';
    }
    localStorage.setItem("data-theme-version", this.toggleMode);
    this.localData = localStorage.getItem('data-theme-version');
    document.body.setAttribute('data-theme-version', this.localData);
  }

  chatboxActive() { // Chatbox manage
    document.getElementById("chatBox")?.setAttribute("class", "chatbox active");
  }
  eventSidebarActive() { // Event Sidebar manage
    if (document.getElementById("eventSidebar")?.getAttribute('class') == 'event-sidebar dz-scroll') {
      document.getElementById("eventSidebar")?.setAttribute("class", "event-sidebar dz-scroll active");
    } else {
      document.getElementById("eventSidebar")?.setAttribute("class", "event-sidebar dz-scroll");
    }
  }

  urlActive(url: any) {
    if (url == '/admin') {
      this.currentTitle = 'Dashboard';
    } else {
      this.currentTitle = url.split('/admin/')[1].split('?')[0].replace('-', ' ');
    }
  }


  openfullscreen() {   // Trigger fullscreen
    const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };
    if (!this.fullScreenClass) {
      this.fullScreenClass = true;
      if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
        docElmWithBrowsersFullScreenFunctions.requestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
        docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
      } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
        docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
      }
    } else {
      const docWithBrowsersExitFunctions = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
        docWithBrowsersExitFunctions.mozCancelFullScreen();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        docWithBrowsersExitFunctions.webkitExitFullscreen();
      } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
        docWithBrowsersExitFunctions.msExitFullscreen();
      }
      this.fullScreenClass = false;
    }
  }
}
