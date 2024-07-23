import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PdfViewerPopupComponent} from "../../components/pdf-viewer-popup/pdf-viewer-popup.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    TranslateModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  constructor(private dialog: MatDialog) { }

  openPdfViewer(pdfUrl: string, pdfName: string): void {
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
