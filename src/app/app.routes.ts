import {RouterModule, Routes} from '@angular/router';
import {CookiePolicyPageComponent} from "./pages/cookie-policy-page/cookie-policy-page.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  { path: 'cookie-policy', component: CookiePolicyPageComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
