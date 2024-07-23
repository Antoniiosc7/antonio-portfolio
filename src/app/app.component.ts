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
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, ExperienceComponent, EducationComponent, AboutComponent, CookiePolicyComponent, HeaderComponent, FooterComponent, NgIf, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {}

  cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';

}
