import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface de base pour un modèle Type
export interface Type {
  id: number;
  nom_type_parrainage: string;
}

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private apiUrl = 'http://127.0.0.1:8000/type_parrainage/';  // URL de base pour ton API

  constructor(private http: HttpClient) { }

  // -------------------------------------------
  // CREATE : Méthode pour ajouter une nouvelle région
  // -------------------------------------------
  addType(type: any): Observable<Type> {
    return this.http.post<Type>(this.apiUrl, type, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer toutes les régions
  // -------------------------------------------
  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiUrl);
  }
  // -------------------------------------------
  // DELETE : Méthode pour Récuperer toutes les région 
  // -------------------------------------------
  getAllTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiUrl);
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer une région par ID
  // -------------------------------------------
  getTypeById(id: number): Observable<Type> {
    return this.http.get<Type>(`${this.apiUrl}${id}/`);
  }

  // -------------------------------------------
  // UPDATE : Méthode pour mettre à jour une région
  // -------------------------------------------
  updateType(id: number, type: any): Observable<Type> {
    return this.http.put<Type>(`${this.apiUrl}${id}/`, type, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // DELETE : Méthode pour supprimer une région par ID
  // -------------------------------------------
  deleteType(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
  
}
