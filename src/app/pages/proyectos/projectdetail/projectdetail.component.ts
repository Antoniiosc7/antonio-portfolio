import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PdfViewerPopupComponent} from "../../../components/pdf-viewer-popup/pdf-viewer-popup.component";

@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [
    NgIf
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
