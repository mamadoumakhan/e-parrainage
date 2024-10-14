import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { FilterHeadComponent } from '../../../elements/short-cods/cms/filter-head/filter-head.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
// import { Region, RegionService } from '../../../services/region.service';
import { catchError, retry, throwError } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Departement, DepartementService } from '../../../services/departement.service';
import { RegionService, Region } from '../../../services/region.service';


export interface type {
  id: number,
  title: string,
  status: string,
  date: string
}

@Component({
  selector: 'app-departement',
  standalone: true,
  imports: [NgClass, RouterLink, BreadcrumbComponent, CommonModule, FilterHeadComponent, PaginationComponent,ReactiveFormsModule,],
  templateUrl: './departement.component.html',
  styleUrl: './departement.component.css'
})
export class DepartementComponent implements OnInit{
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
  departements: Departement[] = [];
  submitted: boolean = false;
  ajoutDepartementForm!: FormGroup ;
  updateDepartementForm!: FormGroup ;
  // currentDate: Date;  // Ajout de la propriété pour la date
  regions: any[] = []; // Liste des régions à afficher dans le select

  // listRegion = [
  //   { id: 1, nom_region: "Dakar" },
  //   { id: 2, nom_region: "Diourbel" },
  //   { id: 3, nom_region: "MATAM" }
  // ];


  constructor(
    private fb: FormBuilder,
    private regionService: RegionService,
    private departementService: DepartementService
  ) {
     // Initialisation du formulaire
     this.ajoutDepartementForm = this.fb.group({
      nom_departement: ['', Validators.required], // Nom du département
      region: ['', Validators.required] // Sélection de la région (nouveau champ)
    });
  }

  nbFois = 3;
  listeDepartement: any[] = []; 

  ngOnInit(): void {
    this.getAllDepartements();
    this.getRegions(); // Récupérer la liste des régions dès le chargement du composant
    this.allData = this.paginator(this.emailTemplagtes, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;

    this.updateDepartementForm = this.fb.group({
      nom_departement: ['', Validators.required] 
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
  emailTemplagtes: Departement[] = [
    {
      'id':1,
      'nom_departement':"Dakar"
    },
    {
      'id':2,
      'nom_departement':"Diourbel"
    },
    {
      'id':3,
      'nom_departement':"MATAM"
    }
  ]


  // Méthode pour récupérer la liste des régions depuis l'API
  getRegions() {
    this.regionService.getAllRegions().subscribe(
      (data: any[]) => {
        this.regions = data; // Stocker les régions récupérées
      },
      (error: any) => {
        console.error('Erreur lors du chargement des régions :', error);
      }
    );
  }
   // Méthode pour récupérer toutes les departements
   getAllDepartements(): void {
    this.departementService.getDepartements().pipe(
      retry(3),
      catchError(error => {
        console.error('Erreur lors de la récupération des departements', error);
        return throwError('Veuillez réessayer');
      })
    ).subscribe(response => {
      this.departements = response;
      this.emailTemplagtes = response;
      console.log('departements récupérées:', this.departements);
    });
  }

  ajouterDepartement() {
    if (this.ajoutDepartementForm.valid) {
     
      const nom_departement = this.ajoutDepartementForm.get('nom_departement')?.value;
      const nom_region = this.ajoutDepartementForm.get('nom_region')?.value;
      const data ={
      nom_departement: nom_departement,
      nom_region: nom_region,
     }
     console.log("_______________departement saisie est ",nom_departement)

      this.departementService.addDepartement(data).subscribe(
        response => {
          Swal.fire('Succès', 'Ajout réussi', 'success').then(() => {
            this.ajoutDepartementForm.reset(); // Réinitialiser le formulaire après ajout
            this.getAllDepartements(); // Rafraîchir la liste des departements
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
// ******************************************************************************
// Méthode pour ajouter un département
// ajouterDepartement() {
//   if (this.ajoutDepartementForm.valid) {
//     const departement = this.ajoutDepartementForm.value; // Récupère le département et la région sélectionnée

//     this.departementService.addDepartement(departement).subscribe(
//       (response) => {
//         Swal.fire('Succès', 'Ajout réussi', 'success').then(() => {
//           this.ajoutDepartementForm.reset(); // Réinitialiser le formulaire après ajout
//         });
//       },
//       (error) => {
//         console.error('Erreur lors de l\'ajout :', error);
//       }
//     );
//   } else {
//     Swal.fire('Erreur', 'Veuillez remplir tous les champs obligatoires.', 'error');
//   }
// }

// ******************************************************************************
  modifierDepartement(id: number) {
    if (this.updateDepartementForm.valid) {
      
      // Récupérer le nom de la departement modifié depuis le formulaire
      const nom_departement = this.updateDepartementForm.get('nom_departement')?.value;
      
      // Créer l'objet data avec l'ID et le nouveau nom
      const data = {
        nom_departement: nom_departement
      };
  
      console.log("_______________Modification de la departement avec ID :", id, "et données :", data);
  
      // Appeler le service pour mettre à jour la departement
      this.departementService.updateDepartement(id, data).subscribe(
        response => {
          Swal.fire('Succès', 'La departement a été modifiée avec succès', 'success').then(() => {
            this.updateDepartementForm.reset(); // Réinitialiser le formulaire après modification
            this.getAllDepartements(); // Rafraîchir la liste des departements
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
  

  supprimerDepartement(id: number) {
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
        this.departementService.deleteDepartement(id).subscribe(
          response => {
            Swal.fire('Supprimé !', 'La departement a été supprimée.', 'success');
            this.getAllDepartements(); // Optionnel : rafraîchir la liste des departements
          },
          error => {
            console.error('Erreur lors de la suppression :', error);
            Swal.fire('Erreur', 'Erreur lors de la suppression de la departement.', 'error');
          }
        );
      }
    });
  }

  
  

}