import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, Observable, of, tap, throwError} from 'rxjs';
import {API_URL} from "../../config";
import {Router} from "@angular/router";
import {RegisterData} from "../models/registerData.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sessionUrl = `${API_URL}/api/auth/session`;

  constructor(private http: HttpClient, private router: Router) { }

  checkSession(): Observable<boolean> {
    return this.http.get<boolean>(this.sessionUrl);
  }
  public isLoggedIn(): boolean {
    return !!this.getToken();
  }
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  removeToken(): void {
    localStorage.removeItem('token');
  }
  private loginUrl = `${API_URL}/api/auth/login`;
  login(credentials: {username: string, password: string}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'json' as 'json'
    };

    return this.http.post<any>(this.loginUrl, credentials, httpOptions).pipe(
      tap((response: any) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('tokenType', response.tokenType);
        localStorage.setItem('username', credentials.username);
      }),
      catchError(error => {
        console.error('Error durante el inicio de sesión', error);
        return throwError(error);
      })
    );
  }
  private registerUrl = `${API_URL}/api/auth/register`;

  // In AuthService
  register(user: RegisterData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };

    return this.http.post<string>(this.registerUrl, user, httpOptions).pipe(
      tap(() => {
      }),
      catchError(error => {
        console.error('Error durante el registro', error);
        return throwError(error);
      })
    );
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenType');
    localStorage.removeItem('username');

  }

  checkTokenValidity(): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    };

    return this.http.get<boolean>(this.sessionUrl, httpOptions).pipe(
      catchError(error => {
        this.logout();
        return of(false);
      })
    );
  }
  /*
  private adminUrl = `${API_URL}/api/auth/is_admin`;
  isAdmin(): Observable<boolean> {
    const headers = { 'Authorization': 'Bearer ' + this.getToken() };
    return this.http.get<boolean>(this.adminUrl, { headers }).pipe(
      catchError(error => {
        console.error('Error checking admin status', error);
        return of(false);
      })
    );
  }
  */

  getUserProfile(username: string): Observable<any> {
    return this.http.get(`${API_URL}/api/users/profile/${username}`,this.getHttpOptions());
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
