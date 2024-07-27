import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent } from "@ng-doc/app";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [
    RouterOutlet,
    NgDocSidebarComponent,
    NgDocRootComponent,
    NgDocNavbarComponent,
    HeaderComponent
  ],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {

}
