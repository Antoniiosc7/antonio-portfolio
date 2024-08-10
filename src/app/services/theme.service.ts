import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);

  constructor(private platformService: PlatformService) {
    this.loadInitialTheme();
  }

  toggleTheme() {
    if (this.platformService.isBrowser()) {
      const newThemeIsDark = document.body.getAttribute('data-theme') !== 'dark';
      document.body.setAttribute('data-theme', newThemeIsDark ? 'dark' : 'light');
      this.isDarkTheme.next(newThemeIsDark);
      localStorage.setItem('isDarkTheme', newThemeIsDark.toString());
    } else {
      const currentTheme = this.isDarkTheme.value;
      this.isDarkTheme.next(!currentTheme);
    }
  }

  getThemeStatus() {
    return this.isDarkTheme.asObservable();
  }

  private loadInitialTheme() {
    if (this.platformService.isBrowser()) {
      const isDark = localStorage.getItem('isDarkTheme') === 'true';
      this.isDarkTheme.next(isDark);
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } else {
      this.isDarkTheme.next(false);
    }
  }
}
