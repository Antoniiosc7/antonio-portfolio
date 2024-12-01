import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TranslateModule } from "@ngx-translate/core";
import { Meta, Title } from "@angular/platform-browser";
import { PlatformService } from './services/platform.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cookiesAccepted: boolean = false;

  constructor(private meta: Meta, private title: Title, private platformService: PlatformService) {}

  ngOnInit() {
    this.title.setTitle('Antonio Saborido');
    this.meta.addTags([
      { name: 'description', content: 'Curriculum de Antonio Saborido' },
      { property: 'og:title', content: 'Antonio Saborido' },
      { property: 'og:description', content: 'Curriculum' },
      { property: 'og:image', content: 'https://antoniosaborido.es/foto.png' },
      { property: 'og:url', content: 'https://antoniosaborido.es/' },
      { property: 'og:locale', content: 'es_ES' },
      { property: 'og:locale:alternate', content: 'en_US' }
    ]);

    if (this.platformService.isBrowser()) {
      this.cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    }
  }

  acceptCookies() {
    this.cookiesAccepted = true;
    if (this.platformService.isBrowser()) {
      localStorage.setItem('cookiesAccepted', 'true');
    }
  }
}
