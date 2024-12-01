import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../config';
import { BlogDTO } from '../models/blog.dto';
import { BlogDetailDTO } from '../models/blog-detail.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${API_URL}/api/portfolio`;

  constructor(private http: HttpClient) {}

  // Get all blogs
  getAllBlogs(lang: string): Observable<BlogDTO[]> {
    const params = new HttpParams().set('lang', lang);
    return this.http.get<BlogDTO[]>(`${this.apiUrl}/blogs/`, { params });
  }

  // Get all projects
  getAllProjects(lang: string): Observable<BlogDTO[]> {
    const params = new HttpParams().set('lang', lang);
    return this.http.get<BlogDTO[]>(`${this.apiUrl}/projects/`, { params });
  }

  // Get blog by codBlog
  getBlogByCodBlog(codBlog: string, lang: string): Observable<BlogDetailDTO> {
    const params = new HttpParams().set('lang', lang);
    return this.http.get<BlogDetailDTO>(`${this.apiUrl}/blogs/${codBlog}`, { params });
  }

  // Get project by codProject
  getBlogByCodProject(codProject: string, lang: string): Observable<BlogDetailDTO> {
    const params = new HttpParams().set('lang', lang);
    return this.http.get<BlogDetailDTO>(`${this.apiUrl}/projects/${codProject}`, { params });
  }
}
