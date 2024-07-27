import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  private baseUrl = `${API_URL}/api/resultados`;

  constructor(private http: HttpClient) { }

  getResultadosByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}`, this.getHttpOptions());
  }

  saveResultado(resultado: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, resultado, this.getHttpOptions());
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      })
    };
  }
}
