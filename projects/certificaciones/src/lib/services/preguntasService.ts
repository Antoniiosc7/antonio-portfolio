import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta.model';
import { API_URL } from "../../config";

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  constructor(private http: HttpClient) { }

  obtenerPreguntas(examenId: string): Observable<Pregunta[]> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<Pregunta[]>(`${API_URL}/api/pregunta/${examenId}/preguntas`, httpOptions);
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
