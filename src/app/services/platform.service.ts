// src/app/services/platform.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private languageSubject = new BehaviorSubject<string>(this.getSessionStorageItem('app_language') || 'es');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Verificar si estamos en un entorno de navegador
  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // Guardar un elemento en el session storage
  setSessionStorageItem(key: string, value: string): void {
    if (this.isBrowser()) {
      sessionStorage.setItem(key, value);
      if (key === 'app_language') {
        this.languageSubject.next(value);
      }
    }
  }

  getSessionStorageItem(key: string): string | null {
    if (this.isBrowser()) {
      const value = sessionStorage.getItem(key);
      return value;
    }
    return null;
  }

  // Eliminar un elemento del session storage (opcional)
  removeSessionStorageItem(key: string): void {
    if (this.isBrowser()) {
      sessionStorage.removeItem(key);
    }
  }

  // Obtener el observable del idioma
  getLanguageObservable() {
    return this.languageSubject.asObservable();
  }
}
