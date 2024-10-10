import { Component } from '@angular/core';

interface listType {
  image?: string,
  name: string,
  user_work: string,
  text_color?:string
  desc: string,
  email: string,
  phone: number,
  location: string,
  btn_color: string
}

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  userList: listType[] = [
    {
      image: 'assets/images/users/pic1.jpg',
      name: 'Thomas Djons',
      user_work: 'Senior Developer',
      text_color: 'primary',
      desc: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'success'
    },
    {
      image: 'assets/images/users/pic2.jpg',
      name: 'Oliver Jean',
      user_work: 'Junior Developer',
      text_color: 'info',
      desc: 'Maintain inventory of supplies and order new stock as needed Maintain inventory stock.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'primary'
    },
    {
      name: 'Post Melone',
      user_work: 'Senior Designer',
      text_color: 'success',
      desc: 'Anticipate guests needs in order to accommodate them and provide an exceptional experience.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'secondary'
    },
    {
      name: 'Kevin Mandala',
      user_work: 'Junior Developer',
      text_color: 'danger',
      desc: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'info'
    },
    {
      image: 'assets/images/users/pic3.jpg',
      name: 'Mc. Kowalski',
      user_work: 'Php Developer',
      text_color: 'info',
      desc: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'info light'
    },
    {
      image: 'assets/images/users/pic4.jpg',
      name: 'Rio Fernandez',
      user_work: 'Python Developer',
      text_color: 'danger',
      desc: 'Maintain inventory of supplies and order new stock as needed Maintain inventory stock.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'success'
    },
    {
      image: 'assets/images/users/pic5.jpg',
      name: 'Chintya Laudia',
      user_work: 'NodeJs Developer',
      text_color: 'warning',
      desc: 'Anticipate guests needs in order to accommodate them and provide an exceptional guest experience.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'warning light'
    },
    {
      image: 'assets/images/users/pic6.jpg',
      name: 'James Junaidi',
      user_work: 'Senior Developer',
      text_color: 'primary',
      desc: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'primary light'
    },
    {
      image: 'assets/images/users/pic7.jpg',
      name: 'Keanu Repes',
      user_work: 'Senior Designer',
      text_color: 'primary',
      desc: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'outline-danger'
    },
    {
      image: 'assets/images/users/pic8.jpg',
      name: 'Tonni Sblak',
      user_work: 'Senior Developer',
      text_color: 'warning',
      desc: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'outline-success'
    },
    {
      name: 'John Kipli',
      user_work: 'Senior Developer',
      text_color: 'primary',
      desc: 'Anticipate guests needs in order to accommodate them and provide an exceptional guest experience.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'outline-warning'
    },
    {
      name: 'Monalisa',
      user_work: 'Senior Head',
      text_color: 'danger',
      desc: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.',
      email: 'example@gmail.com',
      phone: 1238545644,
      location: 'Indonasia',
      btn_color: 'outline-info'
    }
  ]
}
