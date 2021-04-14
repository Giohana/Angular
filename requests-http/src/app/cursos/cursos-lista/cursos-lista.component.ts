import { Subject } from 'rxjs';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { empty, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  //cursos: Curso[];
  cursos$: Observable<Curso[]>;
  error$= new Subject<boolean>();

  constructor(private service: CursosService) { }

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.cursos = dados)

    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        //return empty();
        this.error$.next(true);
        return of();;
      })
    );
    this.service.list()
    .pipe(
      catchError(error => empty())
    )
    .subscribe(
      dados => {console.log(dados)},
      error => console.log(error),
      () => console.log('Observable completo')
    );

  }



}
