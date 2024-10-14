import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { FilterHeadComponent } from '../../../elements/short-cods/cms/filter-head/filter-head.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Region, RegionService } from '../../../services/region.service';
import { catchError, retry, throwError } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Forme, FormeService } from '../../../services/forme.service';
// import { CommonModule } from '@angular/common';
export interface type {
  id: number,
  title: string,
  status: string,
  date: string
}

@Component({
  selector: 'app-forme',
  standalone: true,
  imports: [NgClass, RouterLink, BreadcrumbComponent,CommonModule, FilterHeadComponent, PaginationComponent,ReactiveFormsModule,],
  templateUrl: './forme.component.html',
  styleUrl: './forme.component.css'
})
export class FormeComponent implements OnInit{
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
  formes: Forme[] = [];
  submitted: boolean = false;
  ajoutFormeForm!: FormGroup ;
  updateFormeForm!: FormGroup ;
  // currentDate: Date;  // Ajout de la propriété pour la date

  constructor(
    private fb: FormBuilder,
    private formeService: FormeService
  ) {
    // Initialisation du formulaire
    this.ajoutFormeForm = this.fb.group({
      nom_forme: ['', Validators.required] 
    });
    // Initialisation de la date actuelle
    // this.currentDate = new Date();
  }
  // constructor(private formeService: formeService) {}

  nbFois = 3;
  listeForme: any[] = []; 

  ngOnInit(): void {
    this.getAllFormes();
    this.allData = this.paginator(this.emailTemplagtes, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;

    this.updateFormeForm = this.fb.group({
      nom_forme: ['', Validators.required] 
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

  emailTemplagtes: Forme[] = [
    {
      'id':1,
      'nom_forme':"Dakar"
    },
    {
      'id':2,
      'nom_forme':"Diourbel"
    },
    {
      'id':3,
      'nom_forme':"MATAM"
    }
  ]


   // Méthode pour récupérer toutes les formes
   getAllFormes(): void {
    this.formeService.getFormes().pipe(
      retry(3),
      catchError(error => {
        console.error('Erreur lors de la récupération des formes', error);
        return throwError('Veuillez réessayer');
      })
    ).subscribe(response => {
      this.formes = response;
      this.emailTemplagtes = response;
      console.log('formes récupérées:', this.formes);
    });
  }

  ajouterForme() {
    if (this.ajoutFormeForm.valid) {
      // Créez un objet forme à partir des valeurs du formulaire
      const nom_forme = this.ajoutFormeForm.get('nom_forme')?.value;
      const data ={
      nom_forme: nom_forme,
     }
     console.log("_______________Forme saisie est ",nom_forme)

      this.formeService.addForme(data).subscribe(
        response => {
          Swal.fire('Succès', 'Ajout réussi', 'success').then(() => {
            this.ajoutFormeForm.reset(); // Réinitialiser le formulaire après ajout
            this.getAllFormes(); // Rafraîchir la liste des formes
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

  modifierForme(id: number) {
    // **************************ID
    // const id = this.selectedFormeId;
    
    if (this.updateFormeForm.valid) {
      
      // Récupérer le nom de la Forme modifié depuis le formulaire
      const nom_forme = this.updateFormeForm.get('nom_forme')?.value;
      
      // Créer l'objet data avec l'ID et le nouveau nom
      const data = {
        nom_forme: nom_forme
      };
  
      console.log("_______________Modification de la Forme avec ID :", id, "et données :", data);
  
      // Appeler le service pour mettre à jour la Forme
      this.formeService.updateForme(id, data).subscribe(
        response => {
          Swal.fire('Succès', 'La Forme a été modifiée avec succès', 'success').then(() => {
            this.updateFormeForm.reset(); // Réinitialiser le formulaire après modification
            this.getAllFormes(); // Rafraîchir la liste des Formes
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

  supprimerForme(id: number) {
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
        this.formeService.deleteForme(id).subscribe(
          response => {
            Swal.fire('Supprimé !', 'La forme a été supprimée.', 'success');
            this.getAllFormes(); // Optionnel : rafraîchir la liste des formes
          },
          error => {
            console.error('Erreur lors de la suppression :', error);
            Swal.fire('Erreur', 'Erreur lors de la suppression de la forme.', 'error');
          }
        );
      }
    });
  }

  
  


  



}
