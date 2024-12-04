import {Component, LOCALE_ID, OnInit, Renderer2, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule, Location, DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es';
import {PlatformService} from "../../../services/platform.service";
import {Subscription} from "rxjs";
import {PdfViewerPopupComponent} from "../../../components/pdf-viewer-popup/pdf-viewer-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {TranslateModule} from "@ngx-translate/core";

registerLocaleData(localeEs);

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, DatePipe],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  @ViewChild('blogDetailContainer') blogDetailContainer!: ElementRef;
  blog: any;
  formattedDate: string | null = null;
  isLoading: boolean = true; // Add loading flag
  private langSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    private datePipe: DatePipe,
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    private dialog: MatDialog,
    private platformService: PlatformService,
  ) {}

  goBack(): void {
    this.location.back();
  }
  get currentRoute(): string {
    return this.route.snapshot.url.join('/');
  }
  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.langSubscription = this.platformService.getLanguageObservable().subscribe(lang => {
        this.loadBlogs(blogId);
      });
    }
  }

  loadBlogs(blogId: any) {
    const lang = this.platformService.getSessionStorageItem('app_language') || 'es'; // Get language from localStorage or default to 'es'

    this.apiService.getBlogByCodBlog(blogId, lang).subscribe(data => {
      this.blog = data;
      const date = new Date(this.blog.createdAt); // Ensure the date is a valid Date object
      this.formattedDate = this.datePipe.transform(date, 'd \'de\' MMMM, y', 'es-ES');

      // Check and replace title
      if (this.blog.title.includes('TRABAJO FIN DE GRADO')) {
        this.blog.title = this.blog.title.replace('TRABAJO FIN DE GRADO', 'TFG');
      }

      this.titleService.setTitle(this.blog.title); // Set the page title to the blog title
      this.metaService.updateTag({ name: 'description', content: this.blog.description }); // Set the meta description
      this.addStructuredData();
      this.isLoading = false; // Set loading to false when data is loaded
      this.scrollToComponent(); // Scroll to the component
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  scrollToComponent() {
    this.blogDetailContainer.nativeElement.scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  addStructuredData() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://antoniosaborido.es/blog/${this.blog.codBlog}`
      },
      "headline": this.blog.title,
      "image": this.blog.imageUrl,
      "datePublished": this.blog.createdAt,
      "dateModified": this.blog.createdAt,
      "author": {
        "@type": "Person",
        "name": "Antonio Saborido"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Antonio Saborido",
        "logo": {
          "@type": "ImageObject",
          "url": "https://antoniosaborido.es/assets/logo.png"
        }
      },
      "description": this.blog.description
    };
    script.text = JSON.stringify(jsonLd);
    this.renderer.appendChild(document.head, script);
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
}
