import { AlunosService } from './../alunos.service';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Aluno } from './../aluno';

import { Observable } from 'rxjs';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunoservice: AlunosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            console.log('AlunosdetalheResolver');

            let id = route.params['id'];

            return this.alunoservice.getAluno(id);
    }
}