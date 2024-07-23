import { Component } from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  imports: [
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
