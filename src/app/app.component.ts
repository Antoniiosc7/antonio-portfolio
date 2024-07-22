import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectsComponent} from "./general-components/projects/projects.component";
import {ExperienceComponent} from "./general-components/experience/experience.component";
import {EducationComponent} from "./general-components/education/education.component";
import {AboutComponent} from "./general-components/about/about.component";
import {CookiePolicyComponent} from "./components/cookie-policy/cookie-policy.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NgIf} from "@angular/common";
import {Title} from "@angular/platform-browser";
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, ExperienceComponent, EducationComponent, AboutComponent, CookiePolicyComponent, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Antonio Saborido';
  constructor(private titleService: Title,
              private themeService: ThemeService) {}

  cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
