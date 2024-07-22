import {Component, OnInit} from '@angular/core';
import {AboutComponent} from "../../general-components/about/about.component";
import {EducationComponent} from "../../general-components/education/education.component";
import {ExperienceComponent} from "../../general-components/experience/experience.component";
import {ProjectsComponent} from "../../general-components/projects/projects.component";
import {HeaderComponent} from "../../components/header/header.component";
import {Title} from "@angular/platform-browser";
import {RouterLink} from "@angular/router";
import {InfoComponent} from "../../general-components/info/info.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    HeaderComponent,
    RouterLink,
    InfoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title = 'Antonio Saborido';
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
