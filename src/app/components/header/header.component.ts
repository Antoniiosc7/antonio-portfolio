import { Component } from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {RouterLink} from "@angular/router";
import {TranslationService} from "../../services/translations.service";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkTheme: boolean = false;
  constructor(private themeService: ThemeService,
              private translationService: TranslationService) {}
  switchLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
    this.themeService.getThemeStatus().subscribe(isDark => this.isDarkTheme = isDark);

  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
