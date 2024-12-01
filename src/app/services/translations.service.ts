import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly LANGUAGE_KEY = 'app_language'; // Clave para el almacenamiento
  private readonly DEFAULT_LANGUAGE = 'es'; // Idioma predeterminado
  private readonly SUPPORTED_LANGUAGES = ['en', 'es']; // Idiomas soportados

  constructor(private translate: TranslateService, private platformService: PlatformService) {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    const defaultLanguage = this.DEFAULT_LANGUAGE; // Idioma predeterminado
    let savedLanguage = this.platformService.getSessionStorageItem(this.LANGUAGE_KEY) || defaultLanguage;

    if (this.platformService.isBrowser()) {
      this.platformService.setSessionStorageItem(this.LANGUAGE_KEY, savedLanguage);
    }

    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(savedLanguage);
  }


  // Cambiar el idioma y guardarlo
  changeLanguage(lang: string) {
    if (this.SUPPORTED_LANGUAGES.includes(lang)) {
      this.translate.use(lang);
      if (this.platformService.isBrowser()) {
        this.platformService.setSessionStorageItem(this.LANGUAGE_KEY, lang);
      }
    }
  }

  // Obtener el idioma actual
  get currentLang() {
    return this.translate.currentLang;
  }
}
