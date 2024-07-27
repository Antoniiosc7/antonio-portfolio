// projects/certificaciones/src/lib/certificaciones.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CertificacionesComponent } from './certificaciones.component';
import { CertificacionesExampleComponent } from './certificaciones-example/certificaciones-example.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ExamenComponent } from './pages/examen-page/examen/examen.component';
import { ExamenPageComponent } from './pages/examen-page/examen-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DocsComponent } from './component/docs/docs.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: CertificacionesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'documentacion', component: DocsComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'examenes', component: ExamenPageComponent, canActivate: [AuthGuard] },
      { path: 'examenes/examen/:id', component: ExamenComponent, canActivate: [AuthGuard] },
      { path: 'register', component: RegisterComponent },
      { path: 'user', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'videos', component: VideosComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CertificacionesExampleComponent
  ],
  exports: [
    CertificacionesExampleComponent,
    RouterModule
  ]
})
export class CertificacionesModule { }
