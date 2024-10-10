import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardCommComponent } from '../../../../elements/short-cods/project/project-card-comm/project-card-comm.component';

interface type {
  image: string,
  id: string,
  project_name: string,
  desc: string,
  start_date: string,
  deadline: string,
  members: any,
  budget: number,
  expenses: number,
  questions: number,
  comments: number,
  progress: number,
  badge_color: string,
}
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    RouterLink,
    ProjectCardCommComponent
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  cradList: type[] = [
    {
      image: 'assets/images/logos/pic1.jpg',
      id: '#P-000441425',
      project_name: 'Redesign Zenix Mobile App',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      start_date: 'Tuesday,Aug 15th 2020',
      deadline: 'Tuesday,Sep 29th 2020',
      members: [
        'assets/images/users/pic1.jpg',
        'assets/images/users/pic2.jpg',
        'assets/images/users/pic3.jpg',
        'assets/images/users/pic4.jpg',
        'assets/images/users/pic5.jpg',
        'assets/images/users/pic6.jpg',
        'assets/images/users/pic7.jpg'
      ],
      budget: 505.785,
      expenses: 458.388,
      questions: 56,
      comments: 200,
      progress: 75,
      badge_color: 'success'
    },
    {
      image: 'assets/images/logos/pic2.jpg',
      id: '#P-000441422',
      project_name: 'Redesign Zenix Mobile App',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      start_date: 'Tuesday,Aug 15th 2020',
      deadline: 'Tuesday,Sep 29th 2020',
      members: [
        'assets/images/users/pic5.jpg',
        'assets/images/users/pic2.jpg',
        'assets/images/users/pic7.jpg',
        'assets/images/users/pic4.jpg',
        'assets/images/users/pic1.jpg',
        'assets/images/users/pic6.jpg',
        'assets/images/users/pic3.jpg',
      ],
      budget: 220.785,
      expenses: 2600.84,
      questions: 26,
      comments: 100,
      progress: 75,
      badge_color: 'info'
    },
    {
      image: 'assets/images/logos/pic1.jpg',
      id: '#P-000441412',
      project_name: 'Redesign Zenix Mobile App',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      start_date: 'Tuesday,Aug 15th 2020',
      deadline: 'Tuesday,Sep 29th 2020',
      members: [
        'assets/images/users/pic4.jpg',
        'assets/images/users/pic1.jpg',
        'assets/images/users/pic3.jpg',
        'assets/images/users/pic5.jpg',
        'assets/images/users/pic2.jpg',
        'assets/images/users/pic6.jpg',
        'assets/images/users/pic7.jpg'
      ],
      budget: 8057.85,
      expenses: 4580.388,
      questions: 60,
      comments: 220,
      progress: 75,
      badge_color: 'danger'
    },
    {
      image: 'assets/images/logos/pic2.jpg',
      id: '#P-000441425',
      project_name: 'Redesign Zenix Mobile App',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      start_date: 'Tuesday,Aug 15th 2020',
      deadline: 'Tuesday,Sep 29th 2020',
      members: [
        'assets/images/users/pic5.jpg',
        'assets/images/users/pic6.jpg',
        'assets/images/users/pic1.jpg',
        'assets/images/users/pic2.jpg',
        'assets/images/users/pic3.jpg',
        'assets/images/users/pic4.jpg',
        'assets/images/users/pic7.jpg'
      ],
      budget: 10578.5,
      expenses: 858.380,
      questions: 99,
      comments: 350,
      progress: 75,
      badge_color: 'secondary '
    }
  ]
}
