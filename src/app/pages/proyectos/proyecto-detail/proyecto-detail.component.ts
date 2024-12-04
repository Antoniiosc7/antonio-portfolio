import {Component, ElementRef, LOCALE_ID, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import {Subscription} from "rxjs";
import {DatePipe, Location, NgIf} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {PlatformService} from '../../../services/platform.service';
import {MatButton} from '@angular/material/button';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  standalone: true,
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, DatePipe],
  imports: [
    NgIf,
    MatButton,
    TranslateModule
  ],
  styleUrls: ['./proyecto-detail.component.css']
})
export class ProyectoDetailComponent implements OnInit, OnDestroy {
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
    private renderer: Renderer2,
    private platformService: PlatformService
  ) {}

  goBack(): void {
    this.location.back();
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

    this.apiService.getBlogByCodProject(blogId, lang).subscribe(data => {
      this.blog = data;
      const date = new Date(this.blog.createdAt); // Ensure the date is a valid Date object
      this.formattedDate = this.datePipe.transform(date, 'd \'de\' MMMM, y', 'es-ES');
      this.titleService.setTitle(this.blog.title); // Set the page title to the blog title
      this.addCanonicalTag(`https://antoniosaborido.es/project/${this.blog.codBlog}`);
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

  openRepo(url: string): void {
    window.open(url, '_blank');
  }

  scrollToComponent() {
    this.blogDetailContainer.nativeElement.scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  addCanonicalTag(url: string) {
    const link: HTMLLinkElement = this.renderer.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.renderer.appendChild(document.head, link);
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
}
