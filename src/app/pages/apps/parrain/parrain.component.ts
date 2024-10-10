import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectListCardComponent } from '../../../elements/short-cods/project/project-list-card/project-list-card.component';
// import { ProjectListCardComponent } from '../../../../elements/short-cods/project/project-list-card/project-list-card.component';

@Component({
  selector: 'app-parrain',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink,
    ProjectListCardComponent
  ],
  templateUrl: './parrain.component.html',
  styleUrl: './parrain.component.css'
})
export class ParrainComponent {

}
