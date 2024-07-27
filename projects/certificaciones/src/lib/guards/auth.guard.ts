import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from "../services/authService";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    // Verifica si la ruta actual es '/register'
    if (state.url === '/register') {
      // Permite el acceso a '/register' sin verificar el token
      return new Observable<boolean>((observer) => {
        observer.next(true);
        observer.complete();
      });
    }

    // Para todas las demás rutas, verifica la validez del token
    return this.authService.checkTokenValidity().pipe(
      map(isValid => {
        if (!isValid) {
          // Si el token no es válido, redirige a 'login'
          this.router.navigate(['login']);
        }
        return isValid;
      })
    );
  }
}
