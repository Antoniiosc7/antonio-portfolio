import { Component } from '@angular/core';
import {AboutComponent} from "../../general-components/about/about.component";
import {EducationComponent} from "../../general-components/education/education.component";
import {ExperienceComponent} from "../../general-components/experience/experience.component";
import {ProjectsComponent} from "../../general-components/projects/projects.component";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
