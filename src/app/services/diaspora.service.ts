import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface de base pour un modèle diaspora
export interface Diaspora {
  id: number;
  nom_diaspora: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiasporaService {
  private apiUrl = 'http://127.0.0.1:8000/diaspora/';  // URL de base pour ton API

  constructor(private http: HttpClient) { }

  // -------------------------------------------
  // CREATE : Méthode pour ajouter une nouvelle Diaspora
  // -------------------------------------------
  addDiaspora(diaspora: any): Observable<Diaspora> {
    return this.http.post<Diaspora>(this.apiUrl, diaspora, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer toutes les Diasporas
  // -------------------------------------------
  getDiasporas(): Observable<Diaspora[]> {
    return this.http.get<Diaspora[]>(this.apiUrl);
  }
  // -------------------------------------------
  // DELETE : Méthode pour Récuperer toutes les Diaspora 
  // -------------------------------------------
  getAllDiasporas(): Observable<Diaspora[]> {
    return this.http.get<Diaspora[]>(this.apiUrl);
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer une Diaspora par ID
  // -------------------------------------------
  getDiasporaById(id: number): Observable<Diaspora> {
    return this.http.get<Diaspora>(`${this.apiUrl}${id}/`);
  }

  // -------------------------------------------
  // UPDATE : Méthode pour mettre à jour une Diaspora
  // -------------------------------------------
  updateDiaspora(id: number, diaspora: any): Observable<Diaspora> {
    return this.http.put<Diaspora>(`${this.apiUrl}${id}/`, diaspora, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // DELETE : Méthode pour supprimer une Diaspora par ID
  // -------------------------------------------
  deleteDiaspora(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
  
}
