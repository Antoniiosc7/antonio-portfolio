import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet, Routes} from '@angular/router';
import {NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent} from "@ng-doc/app";

@Component({
  selector: 'ng-doc-docs',
  template: `
    <ng-doc-root>
      <ng-doc-navbar [leftContent]="leftContent">
        <ng-template #leftContent>
          <h3 style="margin: 0">MyAwesomeDoc</h3>
        </ng-template>
      </ng-doc-navbar>
      <ng-doc-sidebar></ng-doc-sidebar>
      <router-outlet></router-outlet>
    </ng-doc-root>
  `,
  styleUrls: ['./docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    NgDocSidebarComponent,
    NgDocNavbarComponent,
    NgDocRootComponent
  ],
  standalone: true
})
export class DocsComponent {}

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
  },
];

export default routes;
