import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly LANGUAGE_KEY = 'app_language';

  constructor(private translate: TranslateService, private platformService: PlatformService) {
    let savedLanguage = 'es';
    if (this.platformService.isBrowser()) {
      savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) || this.translate.getBrowserLang() || 'es';
    } else {
      savedLanguage = this.translate.getBrowserLang() || 'es';
    }
    this.translate.setDefaultLang('es');
    this.translate.use(savedLanguage);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    if (this.platformService.isBrowser()) {
      localStorage.setItem(this.LANGUAGE_KEY, lang);
    }
  }

  get currentLang() {
    return this.translate.currentLang;
  }
}
