import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  valor: number = 5;

  mudarValor(){
    this.valor++;
  }

  deletarCiclo: boolean = false;

  destruirClico(){
    this.deletarCiclo = true;
  }
}
