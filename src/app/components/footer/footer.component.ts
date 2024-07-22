import { Component } from '@angular/core';
import { ThemeService } from "../../services/theme.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Corregido de 'styleUrl' a 'styleUrls' y en forma de array
})
export class FooterComponent {
  isDarkTheme: boolean = false; // Propiedad para almacenar el estado del tema

  constructor(private themeService: ThemeService) {
    // Suscripción a los cambios del tema
    this.themeService.getThemeStatus().subscribe(isDark => this.isDarkTheme = isDark);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
