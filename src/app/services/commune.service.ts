import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface de base pour un modèle Commune
export interface Commune {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  private apiUrl = 'http://127.0.0.1:8000/Communes/';  // URL de base pour ton API

  constructor(private http: HttpClient) { }

  // -------------------------------------------
  // CREATE : Méthode pour ajouter une nouvelle commune
  // -------------------------------------------
  addCommune(Commune: Commune): Observable<Commune> {
    return this.http.post<Commune>(this.apiUrl, Commune, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer toutes les communes
  // -------------------------------------------
  getCommunes(): Observable<Commune[]> {
    return this.http.get<Commune[]>(this.apiUrl);
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer une commune par ID
  // -------------------------------------------
  getCommuneById(id: number): Observable<Commune> {
    return this.http.get<Commune>(`${this.apiUrl}${id}/`);
  }

  // -------------------------------------------
  // UPDATE : Méthode pour mettre à jour une commune
  // -------------------------------------------
  updateCommune(id: number, Commune: Commune): Observable<Commune> {
    return this.http.put<Commune>(`${this.apiUrl}${id}/`, Commune, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // DELETE : Méthode pour supprimer une commune par ID
  // -------------------------------------------
  deleteCommune(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
