import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
    imports: [
        RouterLink,
        TranslateModule
    ],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.css'
})
export class CookiePolicyComponent {
  constructor() { }

  acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    window.location.reload();
  }

  rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    window.location.reload();
  }
}
