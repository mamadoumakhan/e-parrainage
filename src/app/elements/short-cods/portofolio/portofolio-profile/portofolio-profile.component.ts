import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portofolio-profile',
  standalone: true,
  imports: [
    NgbModule
  ],
  templateUrl: './portofolio-profile.component.html',
  styleUrl: './portofolio-profile.component.css'
})
export class PortofolioProfileComponent {
  name = 'Marquezz Silalahi';
  email = '@thomasdox';
}
