// projects/certificaciones/src/lib/certificaciones.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'lib-certificaciones',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterOutlet
  ],
  template: `
    <app-header></app-header>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class CertificacionesComponent { }
