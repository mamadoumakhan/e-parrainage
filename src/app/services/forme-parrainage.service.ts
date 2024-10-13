// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// // Interface de base pour un modèle Region
// export interface Forme_parrainage {
//   id: number;
//   nom_forme: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class Forme_parrainageService {
//   private apiUrl = 'http://127.0.0.1:8000/forme_parrainage/';  // URL de base pour ton API

//   constructor(private http: HttpClient) { }

//   // -------------------------------------------
//   // CREATE : Méthode pour ajouter une nouvelle Forme_parrainage
//   // -------------------------------------------
//   addForme_parrainage(forme_parrainage: any): Observable<Forme_parrainage> {
//     return this.http.post<Forme_parrainage>(this.apiUrl, forme_parrainage, {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     });
//   }

//   // -------------------------------------------
//   // READ : Méthode pour récupérer toutes les Forme_parrainages
//   // -------------------------------------------
//   getForme_parrainages(): Observable<Forme_parrainage[]> {
//     return this.http.get<Forme_parrainage[]>(this.apiUrl);
//   }
//   // -------------------------------------------
//   // DELETE : Méthode pour Récuperer toutes les Forme_parrainage 
//   // -------------------------------------------
//   getAllForme_parrainages(): Observable<Forme_parrainage[]> {
//     return this.http.get<Forme_parrainage[]>(this.apiUrl);
//   }

//   // -------------------------------------------
//   // READ : Méthode pour récupérer une Forme_parrainage par ID
//   // -------------------------------------------
//   getForme_parrainageById(id: number): Observable<Forme_parrainage> {
//     return this.http.get<Forme_parrainage>(`${this.apiUrl}${id}/`);
//   }

//   // -------------------------------------------
//   // UPDATE : Méthode pour mettre à jour une Forme_parrainage
//   // -------------------------------------------
//   updateForme_parrainage(id: number, forme_parrainage: any): Observable<Forme_parrainage> {
//     return this.http.put<Forme_parrainage>(`${this.apiUrl}${id}/`, forme_parrainage, {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     });
//   }

//   // -------------------------------------------
//   // DELETE : Méthode pour supprimer une Forme_parrainage par ID
//   // -------------------------------------------
//   deleteForme_parrainage(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}${id}/`);
//   }
  
// }
