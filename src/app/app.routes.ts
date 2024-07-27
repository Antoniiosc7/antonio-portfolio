// src/app/app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CookiePolicyPageComponent } from './pages/cookie-policy-page/cookie-policy-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/proyectos/projectdetail/projectdetail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NG_DOC_ROUTING } from '@ng-doc/generated';
import { InicioComponent } from './pages/docs/inicio/inicio.component';
import { DocsComponent } from './pages/docs/docs.component';

export const routes: Routes = [
  { path: 'cookie-policy', component: CookiePolicyPageComponent },
  { path: '', component: HomeComponent },
  { path: 'proyectos/:nombreProyecto', component: ProjectDetailComponent },
  { path: 'docs', component: DocsComponent, children: [
      { path: '', component: InicioComponent },
      ...NG_DOC_ROUTING
    ]},
  { path: 'blog', loadChildren: () => import('blog').then(m => m.BlogModule) },
  { path: 'blog/:subpagina', loadChildren: () => import('blog').then(m => m.BlogModule) },
  { path: 'certificaciones', loadChildren: () => import('certificaciones').then(m => m.CertificacionesModule) },
  { path: 'certificaciones/:subpagina', loadChildren: () => import('certificaciones').then(m => m.CertificacionesModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
