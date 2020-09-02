import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosGuard implements CanActivateChild {
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean{

    console.log('guarda de rota filha');
    return true;
  }
  
}
