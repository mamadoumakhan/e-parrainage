import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card-comm',
  standalone: true,
  imports: [],
  templateUrl: './project-card-comm.component.html',
  styleUrl: './project-card-comm.component.css'
})
export class ProjectCardCommComponent {

  @Input() data:any ;
  
}
