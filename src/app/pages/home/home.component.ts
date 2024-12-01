import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {NgForOf, NgIf} from "@angular/common";
import {PdfViewerPopupComponent} from "../../components/pdf-viewer-popup/pdf-viewer-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {BlogComponent} from "../blogs/blog/blog.component";
import {ProyectoComponent} from "../proyectos/proyecto/proyecto.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    NgForOf,
    NgIf,
    BlogComponent,
    ProyectoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title = 'Antonio Saborido';
  constructor(private titleService: Title, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  scrollToTopAndNavigate(commands: any[]): void {
    window.scrollTo(0, 0);
    this.router.navigate(commands);
  }
  openRepo(url: string): void {
    window.open(url, '_blank');
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
