import {RouterModule, Routes} from '@angular/router';
import {CookiePolicyPageComponent} from "./pages/cookie-policy-page/cookie-policy-page.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {TfgComponent} from "./pages/proyectos/tfg/tfg.component";

export const routes: Routes = [
  { path: 'cookie-policy', component: CookiePolicyPageComponent },
  { path: '', component: HomeComponent},
  { path: 'proyectos/tfg', component: TfgComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
