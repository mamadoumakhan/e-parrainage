import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectListCardComponent } from '../../../../elements/short-cods/project/project-list-card/project-list-card.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink,
    ProjectListCardComponent
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  active = 1

}
