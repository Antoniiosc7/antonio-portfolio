import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewerPopupComponent } from '../../../components/pdf-viewer-popup/pdf-viewer-popup.component';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import {ImageModalComponent} from "../../../components/image-modal/image-modal.component";

@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [
    NgIf,
    TranslateModule,
    NgForOf,
    ImageModalComponent
  ],
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectName: string | null = null;
  isImageModalOpen = false;
  selectedImageUrl: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('nombreProyecto');
    this.route.params.subscribe(params => {
      this.projectName = params['nombreProyecto'];
      this.title.setTitle(`Proyecto: ${this.projectName}`);
      this.meta.addTags([
        { name: 'description', content: `Detalles del proyecto ${this.projectName}` },
        { property: 'og:title', content: `Proyecto: ${this.projectName}` },
        { property: 'og:description', content: `Detalles del proyecto ${this.projectName}` },
        { property: 'og:image', content: 'https://antoniosaborido.es/foto.png' },
        { property: 'og:url', content: `https://antoniosaborido.es/proyectos/${this.projectName}` },
        { property: 'og:locale', content: 'es_ES' },
        { property: 'og:locale:alternate', content: 'en_US' }
      ]);
    });
  }

  openProductionPage(): void {
    const url = this.sanitizer.bypassSecurityTrustResourceUrl('https://certs.antoniosaborido.es/');
    window.open('https://certs.antoniosaborido.es/', '_blank');
  }

  openPdfViewer(pdfUrl: string, pdfName: string): void {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(pdfUrl, '_blank');
    } else {
      this.dialog.open(PdfViewerPopupComponent, {
        width: '80%',
        height: '80%',
        panelClass: 'custom-dialog-container',
        data: { pdfSrc: pdfUrl, pdfName: pdfName }
      });
    }
  }

  openImageModal(imageUrl: string): void {
    this.selectedImageUrl = imageUrl;
    this.isImageModalOpen = true;
  }

  closeImageModal(): void {
    this.isImageModalOpen = false;
    this.selectedImageUrl = null;
  }
}
