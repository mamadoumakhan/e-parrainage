import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interface de base pour un modèle User
export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://127.0.0.1:8000/user/';  

  constructor(private http: HttpClient) { }

    // -------------------------------------------
  // CREATE : Méthode pour ajouter une nouvelle User
  // -------------------------------------------
  addUser(User: any): Observable<User> {
    return this.http.post<User>(this.apiUrl, User, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer toutes les Users
  // -------------------------------------------
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  // -------------------------------------------
  // DELETE : Méthode pour Récuperer toutes les User 
  // -------------------------------------------
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // -------------------------------------------
  // READ : Méthode pour récupérer une User par ID
  // -------------------------------------------
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${id}/`);
  }

    // -------------------------------------------
  // UPDATE : Méthode pour mettre à jour une User
  // -------------------------------------------
  updateUser(id: number, User: any): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}${id}/`, User, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // -------------------------------------------
  // DELETE : Méthode pour supprimer une User par ID
  // -------------------------------------------
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }

}
