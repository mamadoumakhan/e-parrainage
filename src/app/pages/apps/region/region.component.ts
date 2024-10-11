import { NgClass } from '@angular/common';
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
export interface type {
  id: number,
  title: string,
  status: string,
  date: string
}

@Component({
  selector: 'app-region',
  standalone: true,
  imports: [NgClass, RouterLink, BreadcrumbComponent, FilterHeadComponent, PaginationComponent,ReactiveFormsModule,],
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})
export class RegionComponent implements OnInit{
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
  regions: Region[] = [];
  submitted: boolean = false;
  ajoutRegionForm!: FormGroup ;
  updateRegionForm!: FormGroup ;

  constructor(
    private fb: FormBuilder,
    private regionService: RegionService
  ) {
    // Initialisation du formulaire
    this.ajoutRegionForm = this.fb.group({
      nom_region: ['', Validators.required] 
    });
  }
  // constructor(private regionService: RegionService) {}

  nbFois = 3;
  listeRegion: any[] = []; 

  ngOnInit(): void {
    this.getAllRegions();
    this.allData = this.paginator(this.emailTemplagtes, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;

    this.updateRegionForm = this.fb.group({
      nom_region: ['', Validators.required] 
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

  emailTemplagtes: Region[] = [
    {
      'id':1,
      'nom_region':"Dakar"
    },
    {
      'id':2,
      'nom_region':"Diourbel"
    },
    {
      'id':3,
      'nom_region':"MATAM"
    }
  ]


   // Méthode pour récupérer toutes les régions
   getAllRegions(): void {
    this.regionService.getRegions().pipe(
      retry(3),
      catchError(error => {
        console.error('Erreur lors de la récupération des régions', error);
        return throwError('Veuillez réessayer');
      })
    ).subscribe(response => {
      this.regions = response;
      this.emailTemplagtes = response;
      console.log('Régions récupérées:', this.regions);
    });
  }

  ajouterRegion() {
    if (this.ajoutRegionForm.valid) {
      // Créez un objet Region à partir des valeurs du formulaire
      const nom_region = this.ajoutRegionForm.get('nom_region')?.value;
      const data ={
      nom_region: nom_region,
     }
     console.log("_______________Region saisie est ",nom_region)

      this.regionService.addRegion(data).subscribe(
        response => {
          Swal.fire('Succès', 'Ajout réussi', 'success').then(() => {
            this.ajoutRegionForm.reset(); // Réinitialiser le formulaire après ajout
            this.getAllRegions(); // Rafraîchir la liste des régions
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

  modifierRegion(id: number) {
    if (this.updateRegionForm.valid) {
      
      // Récupérer le nom de la région modifié depuis le formulaire
      const nom_region = this.updateRegionForm.get('nom_region')?.value;
      
      // Créer l'objet data avec l'ID et le nouveau nom
      const data = {
        nom_region: nom_region
      };
  
      console.log("_______________Modification de la région avec ID :", id, "et données :", data);
  
      // Appeler le service pour mettre à jour la région
      this.regionService.updateRegion(id, data).subscribe(
        response => {
          Swal.fire('Succès', 'La région a été modifiée avec succès', 'success').then(() => {
            this.updateRegionForm.reset(); // Réinitialiser le formulaire après modification
            this.getAllRegions(); // Rafraîchir la liste des régions
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
  

  supprimerRegion(id: number) {
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
        this.regionService.deleteRegion(id).subscribe(
          response => {
            Swal.fire('Supprimé !', 'La région a été supprimée.', 'success');
            this.getAllRegions(); // Optionnel : rafraîchir la liste des régions
          },
          error => {
            console.error('Erreur lors de la suppression :', error);
            Swal.fire('Erreur', 'Erreur lors de la suppression de la région.', 'error');
          }
        );
      }
    });
  }

  
  


  



}
