import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface de base pour un modèle Departement
export interface Departement {
  id: number;
  nom_departement: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private apiUrl = 'http://127.0.0.1:8000/departement/';  // URL de base pour ton API

  constructor(private http: HttpClient) { }

  // -------------------------------------------
  // CREATE : Méthode pour ajouter un nouveau departement
  // -------------------------------------------
  addDepartement(Any: any): Observable<Departement> {
    return this.http.post<Departement>(this.apiUrl, Any, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer tous les departements
  // -------------------------------------------
  getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(this.apiUrl);
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer une departement par ID
  // -------------------------------------------
  getDepartementById(id: number): Observable<Departement> {
    return this.http.get<Departement>(`${this.apiUrl}${id}/`);
  }

  // -------------------------------------------
  // UPDATE : Méthode pour mettre à jour un departement
  // -------------------------------------------
  updateDepartement(id: number, Any: any): Observable<Departement> {
    return this.http.put<Departement>(`${this.apiUrl}${id}/`, Any, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // DELETE : Méthode pour supprimer une departement par ID
  // -------------------------------------------
  deleteDepartement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
