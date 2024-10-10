import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface de base pour un modèle Arrondissement
export interface Arrondissement {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArrondissementService {
  private apiUrl = 'http://127.0.0.1:8000/Arrondissements/';  // URL de base pour ton API

  constructor(private http: HttpClient) { }

  // -------------------------------------------
  // CREATE : Méthode pour ajouter une nouvelle commune
  // -------------------------------------------
  addArrondissement(Arrondissement: Arrondissement): Observable<Arrondissement> {
    return this.http.post<Arrondissement>(this.apiUrl, Arrondissement, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer toutes les communes
  // -------------------------------------------
  getArrondissements(): Observable<Arrondissement[]> {
    return this.http.get<Arrondissement[]>(this.apiUrl);
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer une commune par ID
  // -------------------------------------------
  getArrondissementById(id: number): Observable<Arrondissement> {
    return this.http.get<Arrondissement>(`${this.apiUrl}${id}/`);
  }

  // -------------------------------------------
  // UPDATE : Méthode pour mettre à jour une commune
  // -------------------------------------------
  updateArrondissement(id: number, Arrondissement: Arrondissement): Observable<Arrondissement> {
    return this.http.put<Arrondissement>(`${this.apiUrl}${id}/`, Arrondissement, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // DELETE : Méthode pour supprimer une commune par ID
  // -------------------------------------------
  deleteArrondissement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
