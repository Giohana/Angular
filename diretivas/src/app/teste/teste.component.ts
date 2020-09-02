import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  minhaVariavel: string;

  constructor() { }

  ngOnInit(): void {
  }

}

// ng lint - verifica se a erros no projeto
// ng test - testa o que tem no spec.ts
// ngn e2e - teste de integração