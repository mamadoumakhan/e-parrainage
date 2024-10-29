
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../../elements/pagination/pagination.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, retry, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { User, UserService } from '../../../../services/user.service';

export interface Dessert {
  id: number;
  name: string;
  image?: string,
  email: string,
  country: string;
  date: string;
  company_name: string;
  status: string;
  status_class?: string;

  
}
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSortModule,
    CurrencyPipe,
    NgbModule,
    RouterLink,
    PaginationComponent,
    ReactiveFormsModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {


  ajoutUserForm!: FormGroup ;
  updateUserForm!: FormGroup ;
  nbFois = 3;
  listeUser: User[] = [];

  @ViewChild('userModal') userModal!: TemplateRef<any>;
  isModalOpen = false;

  constructor(
    private modalService: NgbModal,   
    private fb: FormBuilder,
    private UserService: UserService) 
    {
    this.orderData = this.desserts.slice();

        this.ajoutUserForm = this.fb.group({
          username: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
        });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  active = 1;
  page: any = 1;
  totalRows: number = 10;
  totalPage: any = 0;
  allData: any = [];


  ngOnInit(): void {
    this.getAllUsers();
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  breadcrumbList = {
    menu_path: 'Customers',
    currentURL: 'Customers List',
  }

  desserts: Dessert[] = [
    {
      id: 1,
      name: 'John Doe',
      image: 'assets/images/avatar/1.jpg',
      email: 'johndoe@gmail.com',
      country: 'England',
      date: '10/11/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Pending',
      status_class: 'warning'
    },
    {
      id: 4,
      name: 'Alex Smith',
      image: 'assets/images/users/pic4.jpg',
      email: 'alexsmith@gmail.com',
      country: 'England',
      date: '13/01/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Success',
      status_class: 'success'
    },
    {
      id: 6,
      name: 'John Doe',
      image: 'assets/images/users/pic6.jpg',
      email: 'johndoe@gmail.com',
      country: 'Africa',
      date: '15/05/2024',
      company_name: 'Abbott-Jacobs',
      status: 'Info',
      status_class: 'info'
    },
  
  ];

     // Méthode pour récupérer toutes les users
     getAllUsers(): void {
      this.UserService.getUsers().pipe(
        retry(3),
        catchError(error => {
          console.error('Erreur lors de la récupération des users', error);
          return throwError('Veuillez réessayer');
        })
      ).subscribe(response => {
        this.listeUser = response;
        // this.emailTemplagtes = response;
        console.log('users récupérées:', this.listeUser);
      });
    }

    ajouterUser() {
      if (this.ajoutUserForm.valid) {
        // Créez un objet User à partir des valeurs du formulaire
        const nom_User = this.ajoutUserForm.get('nom_User')?.value;
        const email_User = this.ajoutUserForm.get('nom_User')?.value; 
        // remplir les autres recuperation

        const data ={
        nom_User: nom_User,
        email_User: email_User
       }
       console.log("_______________User saisie est ",data)
  
        this.UserService.addUser(data).subscribe(
          response => {
            Swal.fire('Succès', 'Ajout réussi', 'success').then(() => {
              this.ajoutUserForm.reset();
              this.getAllUsers(); 
            });
          },
          error => {
            console.error('Erreur lors de l\'ajout :', error);
          }
        );
      } else {
        Swal.fire('Erreur', 'Veuillez remplir tous les champs obligatoires.', 'error');
      }
    }

    modifierUser(id: number) {
      if (this.updateUserForm.valid) {
        const nom_User = this.updateUserForm.get('nom_User')?.value;
        const email_User = this.updateUserForm.get('nom_User')?.value;
        
        // Créer l'objet data avec l'ID et le nouveau nom
        const data = {
          nom_User: nom_User,
          email_User: email_User
        };
    
        console.log("_______________Modification de la user avec ID :", id, "et données :", data);
    
        this.UserService.updateUser(id, data).subscribe(
          response => {
            Swal.fire('Succès', 'user a été modifiée avec succès', 'success').then(() => {
              this.updateUserForm.reset();
              this.getAllUsers(); 
            });
          },
          error => {
            console.error('Erreur lors de la modification :', error);
            Swal.fire('Erreur', 'Une erreur est survenue lors de la modification.', 'error');
          }
        );
      } else {
        Swal.fire('Erreur', 'Veuillez remplir tous les champs obligatoires.', 'error');
      }
    }

    supprimerUser(id: number) {
      // Pop-up de confirmation avant de supprimer
      console.log("_____________ID a supprimer est :", id)
      Swal.fire({
        title: 'Êtes-vous sûr ?',
        text: "Cette action ne peut pas être annulée !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Oui, supprimer !',
        cancelButtonText: 'Annuler'
      }).then((result) => {
        if (result.isConfirmed) {
          // Si l'utilisateur confirme, appelez la méthode de suppression
          this.UserService.deleteUser(id).subscribe(
            response => {
              Swal.fire('Supprimé !', 'La user a été supprimée.', 'success');
              this.getAllUsers(); // Optionnel : rafraîchir la liste des users
            },
            error => {
              console.error('Erreur lors de la suppression :', error);
              Swal.fire('Erreur', 'Erreur lors de la suppression de la user.', 'error');
            }
          );
        }
      });
    }

  orderData: Dessert[];
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'country': return compare(a.country, b.country, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'company_name': return compare(a.company_name, b.company_name, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  paginator(items: any, current_page: any, per_page_items: any) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,

      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
