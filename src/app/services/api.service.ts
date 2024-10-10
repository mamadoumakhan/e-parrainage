import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/';  // URL de mon API Django

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer des données
  getArrondissement(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'arrondissement/');  // 'endpoint/' est le chemin vers l'API que nous souhaitons appeler
  }
  getCommune(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'commune/');  // 'endpoint/' est le chemin vers l'API que nous souhaitons appeler
  }
  getDepartement(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'departement/');  // 'endpoint/' est le chemin vers l'API que nous souhaitons appeler
  }

  // Méthode pour envoyer des données
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'endpoint/', data);
  }
}
