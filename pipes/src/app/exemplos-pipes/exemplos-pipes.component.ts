import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos em JavaScript',
    rating: 4.712,
    numeroPaginas: 304,
    preco: 150.00,
    dataLancamento: new Date(2017,3,5),
    url: 'https://www.amazon.com.br/dp/8575225537#customerReviews'
  };

  livros: string[] = ['Java', 'Angular', 'Spring'];
  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    })
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('valor assíncrono'), 2000)
  });

  valorAsync2 =  interval(2000).pipe(map(valor => 'Valor assíncrono 2'));
  constructor() { }

  ngOnInit(): void {
  }

}
