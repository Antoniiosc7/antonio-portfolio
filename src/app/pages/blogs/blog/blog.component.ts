import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PlatformService } from '../../../services/platform.service';
import { Subscription } from 'rxjs';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgClass,
    NgIf,
    DatePipe,
    TranslateModule
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  blogs: any[] = [];
  searchQuery: string = '';
  filteredBlogs: any[] = [];
  paginatedBlogs: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 1;
  sortOrder: string = 'asc'; // 'asc' or 'desc'
  sortField: string = ''; // 'visitas', 'createdAt', or 'nombre'
  totalPagesArray: number[] = [];
  showAll: boolean = false;
  numTotalBlogs!: number;
  isLoading: boolean = true; // Add loading flag
  private langSubscription!: Subscription;

  constructor(
    private apiService: ApiService,
    protected router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.showAll = url.length > 0 && url[0].path === 'blogs';
      this.loadBlogs();
    });
    if (this.showAll) {
      this.titleService.setTitle(`Proyectos - Antonio Saborido`);
    }

    this.langSubscription = this.platformService.getLanguageObservable().subscribe(lang => {
      this.loadBlogs();
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  loadBlogs() {
    this.isLoading = true; // Set loading to true when starting to load blogs
    const lang = this.platformService.getSessionStorageItem('app_language') || 'es'; // Get language from localStorage or default to 'es'
    this.apiService.getAllBlogs(lang).subscribe(data => {
      this.blogs = data;
      this.numTotalBlogs = this.blogs.length;
      this.filteredBlogs = [...this.blogs];
      this.sortByDate(); // Ordena por fecha de creación de más nueva a más vieja
      if (this.showAll) {
        this.paginatedBlogs = this.filteredBlogs;
      } else {
        this.updatePagination();
      }
      this.isLoading = false; // Set loading to false when blogs are loaded
    });
  }

  searchBlogs() {
    if (this.searchQuery.trim() === '') {
      this.filteredBlogs = [...this.blogs];
    } else {
      this.filteredBlogs = this.blogs.filter(blog =>
        blog.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    this.updatePagination();
  }

  sortByVisits() {
    this.sortField = 'visitas';
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.filteredBlogs.sort((a, b) => this.sortOrder === 'asc' ? a.visitas - b.visitas : b.visitas - a.visitas);
    if (this.showAll) {
      this.paginatedBlogs = this.filteredBlogs;
    } else {
      this.updatePagination();
    }
  }

  sortByDate() {
    this.sortField = 'createdAt';
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.filteredBlogs.sort((a, b) => this.sortOrder === 'asc' ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    if (this.showAll) {
      this.paginatedBlogs = this.filteredBlogs;
    } else {
      this.updatePagination();
    }
  }

  sortByName() {
    this.sortField = 'nombre';
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.filteredBlogs.sort((a, b) => this.sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    if (this.showAll) {
      this.paginatedBlogs = this.filteredBlogs;
    } else {
      this.updatePagination();
    }
  }

  resetFilters() {
    this.searchQuery = '';
    this.filteredBlogs = [...this.blogs];
    if (this.showAll) {
      this.paginatedBlogs = this.filteredBlogs;
    } else {
      this.updatePagination();
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredBlogs.length / this.itemsPerPage);
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.paginatedBlogs = this.filteredBlogs.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  goToPage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const page = Number(target.value);
    this.currentPage = page;
    this.updatePagination();
  }

  goToBlogDetail(id: number) {
    this.router.navigate(['/blog', id]);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
