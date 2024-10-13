import { NgClass } from '@angular/common';
import { Component,inject,OnInit, TemplateRef } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { FilterHeadComponent } from '../../../elements/short-cods/cms/filter-head/filter-head.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Commune, CommuneService } from '../../../services/commune.service';
import { catchError, retry, throwError } from 'rxjs';
import Swal from 'sweetalert2';
export interface type {
  id: number,
  title: string,
  status: string,
  date: string
}
@Component({
  selector: 'app-commune',
  standalone: true,
  // imports: [NgClass, RouterLink, BreadcrumbComponent, FilterHeadComponent, PaginationComponent],
  imports: [NgClass, RouterLink, BreadcrumbComponent, FilterHeadComponent, PaginationComponent, ReactiveFormsModule],
  templateUrl: './commune.component.html',
  styleUrl: './commune.component.css'
})
export class CommuneComponent implements OnInit{

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
communes: Commune[] = [];
submitted: boolean = false;
ajoutCommuneForm!: FormGroup ;
updateCommuneForm!: FormGroup ;
// currentDate: Date;  // Ajout de la propriété pour la date

constructor(
  private fb: FormBuilder,
  private communeService: CommuneService
) {
  // Initialisation du formulaire
  this.ajoutCommuneForm = this.fb.group({
    nom_commune: ['', Validators.required] 
  });
  // Initialisation de la date actuelle
  // this.currentDate = new Date();
}
// constructor(private communeService: CommuneService) {}

nbFois = 3;
listeCommune: any[] = []; 
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ngOnInit(): void {
  this.getAllCommunes();
  this.allData = this.paginator(this.emailTemplagtes, this.page, this.totalRows);
  this.totalPage = this.allData.total_pages;

  this.updateCommuneForm = this.fb.group({
    nom_commune: ['', Validators.required] 
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

  emailTemplagtes: Commune[] = [
    {
      'id':1,
      'nom_commune':"DK"
    },
    {
      'id':2,
      'nom_commune':"DL"
    },
    {
      'id':3,
      'nom_commune':"MT"
    }
  ]
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
   // Méthode pour récupérer toutes les Communes
   getAllCommunes(): void {
    this.communeService.getCommunes().pipe(
      retry(3),
      catchError(error => {
        console.error('Erreur lors de la récupération des Communes', error);
        return throwError('Veuillez réessayer');
      })
    ).subscribe(response => {
      this.communes = response;
      this.emailTemplagtes = response;
      console.log('Communes récupérées:', this.communes);
    });
  }

  ajouterCommune() {
    if (this.ajoutCommuneForm.valid) {
      // Créez un objet commune à partir des valeurs du formulaire
      const nom_commune = this.ajoutCommuneForm.get('nom_commune')?.value;
      const data ={
      nom_commune: nom_commune,
     }
     console.log("_______________commune saisie est ",nom_commune)

      this.communeService.addCommune(data).subscribe(
        response => {
          Swal.fire('Succès', 'Ajout réussi', 'success').then(() => {
            this.ajoutCommuneForm.reset(); // Réinitialiser le formulaire après ajout
            this.getAllCommunes(); // Rafraîchir la liste des Communes
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

  modifierCommune(id: number) {
    if (this.updateCommuneForm.valid) {
      
      // Récupérer le nom de la commune modifié depuis le formulaire
      const nom_commune = this.updateCommuneForm.get('nom_commune')?.value;
      
      // Créer l'objet data avec l'ID et le nouveau nom
      const data = {
        nom_commune: nom_commune
      };
  
      console.log("_______________Modification de la commune avec ID :", id, "et données :", data);
  
      // Appeler le service pour mettre à jour la commune
      this.communeService.updateCommune(id, data).subscribe(
        response => {
          Swal.fire('Succès', 'La commune a été modifiée avec succès', 'success').then(() => {
            this.updateCommuneForm.reset(); // Réinitialiser le formulaire après modification
            this.getAllCommunes(); // Rafraîchir la liste des Communes
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
  

  supprimerCommune(id: number) {
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
        this.communeService.deleteCommune(id).subscribe(
          response => {
            Swal.fire('Supprimé !', 'La commune a été supprimée.', 'success');
            this.getAllCommunes(); // Optionnel : rafraîchir la liste des Communes
          },
          error => {
            console.error('Erreur lors de la suppression :', error);
            Swal.fire('Erreur', 'Erreur lors de la suppression de la commune.', 'error');
          }
        );
      }
    });
  }

  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
}
