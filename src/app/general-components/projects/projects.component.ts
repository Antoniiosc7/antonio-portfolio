import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private router: Router) {}

  scrollToTopAndNavigate(commands: any[]): void {
    window.scrollTo(0, 0);
    this.router.navigate(commands);
  }
  openRepo(url: string): void {
    window.open(url, '_blank');
  }
}
