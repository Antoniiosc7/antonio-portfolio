import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PdfViewerPopupComponent} from "../../../components/pdf-viewer-popup/pdf-viewer-popup.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [
    NgIf,
    TranslateModule,
    NgForOf
  ],
  templateUrl: './projectdetail.component.html',
  styleUrl: './projectdetail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  projectName: string | null = null;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('nombreProyecto');
  }

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
