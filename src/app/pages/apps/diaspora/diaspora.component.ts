import { NgClass } from '@angular/common';
import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { FilterHeadComponent } from '../../../elements/short-cods/cms/filter-head/filter-head.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Diaspora, DiasporaService } from '../../../services/diaspora.service';
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
  selector: 'app-diaspora',
  standalone: true,
  imports: [NgClass, RouterLink, BreadcrumbComponent, FilterHeadComponent, PaginationComponent,ReactiveFormsModule,],
  templateUrl: './diaspora.component.html',
  styleUrl: './diaspora.component.css'
})
export class DiasporaComponent implements OnInit{
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
  diasporas: Diaspora[] = [];
  submitted: boolean = false;
  ajoutDiasporaForm!: FormGroup ;
  updateDiasporaForm!: FormGroup ;
  // currentDate: Date;  // Ajout de la propriété pour la date

  constructor(
    private fb: FormBuilder,
    private diasporaService: DiasporaService
  ) {
    // Initialisation du formulaire
    this.ajoutDiasporaForm = this.fb.group({
      nom_diaspora: ['', Validators.required] 
    });
    // Initialisation de la date actuelle
    // this.currentDate = new Date();
  }
  // constructor(private DiasporaService: DiasporaService) {}

  nbFois = 3;
  listeDiaspora: any[] = []; 

  ngOnInit(): void {
    this.getAllDiasporas();
    this.allData = this.paginator(this.emailTemplagtes, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;

    this.updateDiasporaForm = this.fb.group({
      nom_diaspora: ['', Validators.required] 
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

  emailTemplagtes: Diaspora[] = [
    {
      'id':1,
      'nom_diaspora':"FR"
    },
    {
      'id':2,
      'nom_diaspora':"USA"
    },
    {
      'id':3,
      'nom_diaspora':"BOSTON"
    }
  ]


   // Méthode pour récupérer toutes les Diasporas
   getAllDiasporas(): void {
    this.diasporaService.getDiasporas().pipe(
      retry(3),
      catchError(error => {
        console.error('Erreur lors de la récupération des Diasporas', error);
        console.log("la recuperation est correct");
        return throwError('Veuillez réessayer');
      })
    ).subscribe(response => {
      this.diasporas = response;
      this.emailTemplagtes = response;
      console.log('Diasporas récupérées:', this.diasporas);
    });
  }

  ajouterDiaspora() {
    if (this.ajoutDiasporaForm.valid) {
      // Créez un objet diaspora à partir des valeurs du formulaire
      const nom_diaspora = this.ajoutDiasporaForm.get('nom_diaspora')?.value;
      const data ={
      nom_diaspora: nom_diaspora,
     }
     console.log("_______________Diaspora saisie est ",nom_diaspora)

      this.diasporaService.addDiaspora(data).subscribe(
        response => {
          Swal.fire('Succès', 'Ajout réussi', 'success').then(() => {
            this.ajoutDiasporaForm.reset(); // Réinitialiser le formulaire après ajout
            this.getAllDiasporas(); // Rafraîchir la liste des Diasporas
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

  modifierDiaspora(id: number) {
    if (this.updateDiasporaForm.valid) {
      
      // Récupérer le nom de la Diaspora modifié depuis le formulaire
      const nom_diaspora = this.updateDiasporaForm.get('nom_Diaspora')?.value;
      
      // Créer l'objet data avec l'ID et le nouveau nom
      const data = {
        nom_diaspora: nom_diaspora
      };
  
      console.log("_______________Modification de la Diaspora avec ID :", id, "et données :", data);
  
      // Appeler le service pour mettre à jour la Diaspora
      this.diasporaService.updateDiaspora(id, data).subscribe(
        response => {
          Swal.fire('Succès', 'La Diaspora a été modifiée avec succès', 'success').then(() => {
            this.updateDiasporaForm.reset(); // Réinitialiser le formulaire après modification
            this.getAllDiasporas(); // Rafraîchir la liste des Diasporas
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
  

  supprimerDiaspora(id: number) {
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
        this.diasporaService.deleteDiaspora(id).subscribe(
          response => {
            Swal.fire('Supprimé !', 'La Diaspora a été supprimée.', 'success');
            this.getAllDiasporas(); // Optionnel : rafraîchir la liste des Diasporas
          },
          error => {
            console.error('Erreur lors de la suppression :', error);
            Swal.fire('Erreur', 'Erreur lors de la suppression de la Diaspora.', 'error');
          }
        );
      }
    });
  }
}