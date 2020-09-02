//import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
    imports: [
        //RouterModule
        CommonModule,
        CursosRoutingModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosService],
})
export class CursosModule { }
