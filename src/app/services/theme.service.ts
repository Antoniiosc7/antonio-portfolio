import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loadInitialTheme();
  }

  toggleTheme() {
    const newThemeIsDark = document.body.getAttribute('data-theme') !== 'dark';
    document.body.setAttribute('data-theme', newThemeIsDark ? 'dark' : 'light');
    this.isDarkTheme.next(newThemeIsDark);
  }

  getThemeStatus() {
    return this.isDarkTheme.asObservable();
  }

  private loadInitialTheme() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    this.isDarkTheme.next(isDark);
  }
}
