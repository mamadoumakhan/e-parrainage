import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface de base pour un modèle Region
export interface Forme {
  id: number;
  nom_forme: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormeService {
  private apiUrl = 'http://127.0.0.1:8000/forme_parrainage/';  // URL de base pour ton API

  constructor(private http: HttpClient) { }

  // -------------------------------------------
  // CREATE : Méthode pour ajouter une nouvelle Forme
  // -------------------------------------------
  addForme(forme: any): Observable<Forme> {
    return this.http.post<Forme>(this.apiUrl, forme, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer toutes les Formes
  // -------------------------------------------
  getFormes(): Observable<Forme[]> {
    return this.http.get<Forme[]>(this.apiUrl);
  }
  // -------------------------------------------
  // DELETE : Méthode pour Récuperer toutes les Forme 
  // -------------------------------------------
  getAllFormes(): Observable<Forme[]> {
    return this.http.get<Forme[]>(this.apiUrl);
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer une Forme par ID
  // -------------------------------------------
  getFormeById(id: number): Observable<Forme> {
    return this.http.get<Forme>(`${this.apiUrl}${id}/`);
  }

  // -------------------------------------------
  // UPDATE : Méthode pour mettre à jour une Forme
  // -------------------------------------------
  updateForme(id: number, forme: any): Observable<Forme> {
    return this.http.put<Forme>(`${this.apiUrl}${id}/`, forme, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // DELETE : Méthode pour supprimer une Forme par ID
  // -------------------------------------------
  deleteForme(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
  
}
