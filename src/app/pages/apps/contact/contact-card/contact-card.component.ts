import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface userType {
  image?: string,
  name: string,
  user_work: string,
}
@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [
    RouterLink,
    NgbModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  
  createForm: FormGroup;
  editForm: FormGroup;
  active = 1;
  edit_id: string = '';
  submitted: boolean = false;
  lodingData: boolean = false;
  imageURL: any = 'assets/images/contacts/user.jpg';
  current_active_tab: string = 'allContacs';

  constructor(private modalService: NgbModal, private fb: FormBuilder,) {
    this.createForm = fb.group({
      image: [''],
      name: ['', Validators.required],
      occupation: ['', Validators.required]
    });
    this.editForm = fb.group({
      image: [''],
      name: ['', Validators.required],
      occupation: ['', Validators.required]
    });
  }
  get f() {
    return this.createForm.controls;
  }

  selectNavTab(type: any) {
    this.current_active_tab = type;
  }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  getDetaEdit(id: any) {
    this.edit_id = id;
    let editDeta;
    if (this.current_active_tab == 'allContacs') {
      editDeta = this.userList.filter((val, i) => i === id);
    } else {
      editDeta = this.pendingInvitation.filter((val, i) => i === id);
    }
    this.editForm = this.fb.group({
      // image: [`${editDeta[0].image}`, Validators.required],
      name: [`${editDeta[0].name}`, Validators.required],
      occupation: [`${editDeta[0].user_work}`, Validators.required]
    });
    if (editDeta[0].image) {
      this.imageURL = editDeta[0].image;
    } else {
      this.imageURL = 'assets/images/contacts/user.jpg';
    }
  }

  image: any;
  onSubmit() {
    this.submitted = true;
    if (this.createForm.valid) {
      if (this.createForm.value.image) {
        this.image = this.imageURL
      } else {
        this.image = null;
      }
      const data = {
        image: this.image,
        name: this.createForm.value.name,
        user_work: this.createForm.value.occupation
      }
      this.userList.splice(0, 0, data);
      this.modalService.dismissAll();
      this.imageURL = 'assets/images/contacts/user.jpg';
    }
    this.createForm.reset();
  }

  onSubmitEdit(id: any) {
    if (this.editForm.valid) {
      if (this.current_active_tab == 'allContacs') {
        for (let i = 0; i < this.userList.length; i++) {
          if (i == id) {
            this.userList[i].image = this.imageURL;
            this.userList[i].name = this.editForm.value.name;
            this.userList[i].user_work = this.editForm.value.occupation;
          }
        }
      } else {
        for (let i = 0; i < this.pendingInvitation.length; i++) {
          if (i == id) {
            this.pendingInvitation[i].image = this.imageURL;
            this.pendingInvitation[i].name = this.editForm.value.name;
            this.pendingInvitation[i].user_work = this.editForm.value.occupation;
          }
        }
      }
      this.modalService.dismissAll();
    }
  }

  deleteUser(id: any) {
    if (this.current_active_tab == 'allContacs') {
      this.userList.map((val: any, i: any) => {
        if (id == i) {
          this.userList.splice(id, 1);
        }
      });
    } else {
      this.pendingInvitation.map((val: any, i: any) => {
        if (id == i) {
          this.pendingInvitation.splice(id, 1);
        }
      });
    }
  }

  getImage(ev: any) {
    if (ev.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(ev.target.files[0]);
      reader.onload = (event: any) => {
        this.imageURL = event.target.result;
      }
    }
  }

  loadMoreData() {
    this.lodingData = true;
    setTimeout(() => {
      let x = Math.floor((Math.random() * 5) + 1);
      let data = this.moreDataArra.filter((val, i) => i == x - 1);
      console.log('clioc', data)
      this.lodingData = false;
      if (this.current_active_tab == 'allContacs') {
        this.userList.push(data[0]);
      } else {
        this.pendingInvitation.push(data[0]);
      }
    }, 1000);

  }

  userList: userType[] = [
    {
      image: 'assets/images/users/pic1.jpg',
      name: 'Alan Green',
      user_work: 'UI Designer',
    },
    {
      name: 'Angela Moss',
      user_work: 'Redblue Studios',
    },
    {
      image: 'assets/images/users/pic2.jpg',
      name: 'Brian Samuel',
      user_work: 'Team Management',
    },
    {
      name: 'Benny Chagur',
      user_work: 'Highspeed Inc.',
    },
    {
      image: 'assets/images/users/pic3.jpg',
      name: 'Chyntia Lawra',
      user_work: 'Zero Two Studios',
    },
    {
      image: 'assets/images/users/pic4.jpg',
      name: 'Cloe Simatupang',
      user_work: 'Zero Two Studios',
    },
    {
      image: 'assets/images/users/pic5.jpg',
      name: 'Engeline O’conner',
      user_work: 'Beep Beep Inc.',
    },
    {
      name: 'Franklin Jr.',
      user_work: 'Zero Two Studios',
    },
    {
      image: 'assets/images/users/pic6.jpg',
      name: 'Geovanny ',
      user_work: 'UI Designer',
    },
    {
      name: 'Henry Charlotte',
      user_work: 'UI Designer',
    },
    {
      image: 'assets/images/users/pic7.jpg',
      name: 'Ivankov Shee',
      user_work: 'UI Designer',
    },
    {
      image: 'assets/images/users/pic8.jpg',
      name: 'Nindy Leeacovic',
      user_work: 'UI Designer',
    }
  ]

  pendingInvitation: userType[] = [
    {
      image: 'assets/images/users/pic2.jpg',
      name: 'Brian Samuel',
      user_work: 'Team Management',
    },
    {
      name: 'Benny Chagur',
      user_work: 'Highspeed Inc.',
    },
    {
      image: 'assets/images/users/pic3.jpg',
      name: 'Chyntia Lawra',
      user_work: 'Zero Two Studio',
    },
    {
      image: 'assets/images/users/pic4.jpg',
      name: 'Cloe Simatupang',
      user_work: 'Zero Two Studios',
    },
    {
      image: 'assets/images/users/pic5.jpg',
      name: 'Engeline O’conner',
      user_work: 'Beep Beep Inc',
    },
    {
      name: 'Franklin Jr.',
      user_work: 'Zero Two Studios',
    },
  ]
  moreDataArra = [
    {
      image: 'assets/images/users/pic1.jpg',
      name: 'Alan Green',
      user_work: 'UI Designer',
    },
    {
      image: 'assets/images/users/pic2.jpg',
      name: 'Brian Samuel',
      user_work: 'Team Management',
    },
    {
      image: 'assets/images/users/pic4.jpg',
      name: 'Cloe Simatupang',
      user_work: 'Zero Two Studios',
    },
    {
      image: 'assets/images/users/pic5.jpg',
      name: 'Engeline O’conner',
      user_work: 'Beep Beep Inc',
    },
    {
      name: 'Henry Charlotte',
      user_work: 'UI Designer',
    }
  ]
}
