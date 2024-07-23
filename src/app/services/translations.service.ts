import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly LANGUAGE_KEY = 'app_language';

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLanguage);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem(this.LANGUAGE_KEY, lang);
  }

  get currentLang() {
    return this.translate.currentLang;
  }
}
