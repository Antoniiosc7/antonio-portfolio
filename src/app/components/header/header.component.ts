import { Component } from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {RouterLink} from "@angular/router";
import {TranslationService} from "../../services/translations.service";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {PdfViewerPopupComponent} from "../pdf-viewer-popup/pdf-viewer-popup.component";
import {MatDialog} from "@angular/material/dialog";

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
              private translationService: TranslationService,
              private dialog: MatDialog) {}
  switchLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
    this.themeService.getThemeStatus().subscribe(isDark => this.isDarkTheme = isDark);

  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme;
  }

  openPdfViewer(): void {
    const currentLang = this.translationService.currentLang;
    const pdfUrl = currentLang === 'es' ? 'cvs/resumeES.pdf' : 'cvs/resumeEN.pdf';
    const pdfName = currentLang === 'es' ? 'resumeES.pdf' : 'resumeEN.pdf';

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(pdfUrl, '_blank');
    } else {
      // Si no es un dispositivo móvil, abrir el PDF en un pop-up
      this.dialog.open(PdfViewerPopupComponent, {
        width: '80%',
        height: '80%',
        panelClass: 'custom-dialog-container',
        data: { pdfSrc: pdfUrl, pdfName: pdfName }
      });
    }
  }
}
