import { NgClass } from '@angular/common';
import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { FilterHeadComponent } from '../../../elements/short-cods/cms/filter-head/filter-head.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Type, TypeService } from '../../../services/type.service';
import { catchError, retry, throwError } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CommonModule } from '@angular/common';
export interface type {
  id: number,
  title: string,
  status: string,
  date: string
}

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [NgClass, RouterLink, BreadcrumbComponent, FilterHeadComponent, PaginationComponent,ReactiveFormsModule,],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent implements OnInit{
  private modalService = inject(NgbModal);
	closeResult = '';


	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}

  breadcrumbList = {
    menu_path: 'CMS',
    currentURL: 'Email Template',
  }

  page: any = 1;
  totalRows: number = 4;
  totalPage: any = 0;
  allData: any = [];
  types: Type[] = [];
  submitted: boolean = false;
  ajoutTypeForm!: FormGroup ;
  updateTypeForm!: FormGroup ;
  // currentDate: Date;  // Ajout de la propriété pour la date

  constructor(
    private fb: FormBuilder,
    private typeService: TypeService
  ) {
    // Initialisation du formulaire
    this.ajoutTypeForm = this.fb.group({
      nom_type_parrainage: ['', Validators.required] 
    });
    // Initialisation de la date actuelle
    // this.currentDate = new Date();
  }
  // constructor(private regionService: RegionService) {}

  nbFois = 3;
  listeType: any[] = []; 

  ngOnInit(): void {
    this.getAllTypes();
    this.allData = this.paginator(this.emailTemplagtes, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;

    this.updateTypeForm = this.fb.group({
      nom_type_parrainage: ['', Validators.required] 
    });
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.emailTemplagtes, this.page, this.totalRows);
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

  activeToggleArray = [1, 2]
  dropicon(id: any) {
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

  emailTemplagtes: Type[] = [
    {
      'id':1,
      'nom_type_parrainage':"x"
    },
    {
      'id':2,
      'nom_type_parrainage':"xx"
    },
    {
      'id':3,
      'nom_type_parrainage':"xxx"
    }
  ]


   // Méthode pour récupérer toutes les Types
   getAllTypes(): void {
    this.typeService.getTypes().pipe(
      retry(3),
      catchError(error => {
        console.error('Erreur lors de la récupération des Types', error);
        return throwError('Veuillez réessayer');
      })
    ).subscribe(response => {
      this.types = response;
      this.emailTemplagtes = response;
      console.log('Types récupérées:', this.types);
    });
  }

  ajouterType() {
    if (this.ajoutTypeForm.valid) {
      // Créez un objet Region à partir des valeurs du formulaire
      const nom_type_parrainage = this.ajoutTypeForm.get('nom_type_parrainage')?.value;
      const data ={
      nom_type_parrainage: nom_type_parrainage,
     }
     console.log("_______________type saisie est ",nom_type_parrainage)

      this.typeService.addType(data).subscribe(
        response => {
          Swal.fire('Succès', 'Ajout réussi', 'success').then(() => {
            this.ajoutTypeForm.reset(); // Réinitialiser le formulaire après ajout
            this.getAllTypes(); // Rafraîchir la liste des Types
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

  modifierType(id: number) {
    if (this.updateTypeForm.valid) {
      
      // Récupérer le nom de la Type modifié depuis le formulaire
      const nom_type_parrainage = this.updateTypeForm.get('nom_type_parrainage')?.value;
      
      // Créer l'objet data avec l'ID et le nouveau nom
      const data = {
        nom_type_parrainage: nom_type_parrainage
      };
  
      console.log("_______________Modification de la Type avec ID :", id, "et données :", data);
  
      // Appeler le service pour mettre à jour la Type
      this.typeService.updateType(id, data).subscribe(
        response => {
          Swal.fire('Succès', 'Le Type de Parrainage a été modifiée avec succès', 'success').then(() => {
            this.updateTypeForm.reset(); // Réinitialiser le formulaire après modification
            this.getAllTypes(); // Rafraîchir la liste des Types
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
  

  supprimerType(id: number) {
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
        this.typeService.deleteType(id).subscribe(
          response => {
            Swal.fire('Supprimé !', 'Le Type de parrainage a été supprimée.', 'success');
            this.getAllTypes(); // Optionnel : rafraîchir la liste des Types
          },
          error => {
            console.error('Erreur lors de la suppression :', error);
            Swal.fire('Erreur', 'Erreur lors de la suppression du Type de parrainage.', 'error');
          }
        );
      }
    });
  }

  
  


  



}
