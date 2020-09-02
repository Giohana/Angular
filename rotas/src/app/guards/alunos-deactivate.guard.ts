import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { IFormaCanDeactivate } from './iform-candeactivate';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFormaCanDeactivate> {
  canDeactivate(
    component: IFormaCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      console.log('guarda de desativação');
      
      return component.podeDesativar ? component.podeDesativar() : true;
  }
  
}
