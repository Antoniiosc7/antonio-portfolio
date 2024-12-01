import { RouterModule, Routes } from '@angular/router';
import { CookiePolicyPageComponent } from './pages/cookie-policy-page/cookie-policy-page.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlogDetailComponent } from './pages/blogs/blog-detail/blog-detail.component';
import { ProjectDetailComponent } from './pages/proyectos/projectdetail/projectdetail.component';
import { ProyectoDetailComponent } from './pages/proyectos/proyecto-detail/proyecto-detail.component';

export const routes: Routes = [
  { path: 'cookie-policy', component: CookiePolicyPageComponent },
  { path: '', component: HomeComponent },
  { path: 'proyectos/tfg', redirectTo: '/blog/tfg', pathMatch: 'full' },
  { path: 'proyectos/:nombreProyecto', component: ProjectDetailComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'project/:id', component: ProyectoDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
