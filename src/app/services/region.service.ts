import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface de base pour un modèle Region
export interface Region {
  id: number;
  nom_region: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private apiUrl = 'http://127.0.0.1:8000/regions/';  // URL de base pour ton API

  constructor(private http: HttpClient) { }

  // -------------------------------------------
  // CREATE : Méthode pour ajouter une nouvelle région
  // -------------------------------------------
  addRegion(region: any): Observable<Region> {
    return this.http.post<Region>(this.apiUrl, region, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer toutes les régions
  // -------------------------------------------
  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.apiUrl);
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer une région par ID
  // -------------------------------------------
  getRegionById(id: number): Observable<Region> {
    return this.http.get<Region>(`${this.apiUrl}${id}/`);
  }

  // -------------------------------------------
  // UPDATE : Méthode pour mettre à jour une région
  // -------------------------------------------
  updateRegion(id: number, region: Region): Observable<Region> {
    return this.http.put<Region>(`${this.apiUrl}${id}/`, region, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // DELETE : Méthode pour supprimer une région par ID
  // -------------------------------------------
  deleteRegion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
