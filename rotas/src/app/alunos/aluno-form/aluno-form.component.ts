import { IFormaCanDeactivate } from './../../guards/iform-candeactivate';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormaCanDeactivate {

  aluno: any;
  inscrição: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscrição = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.inscrição.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página?\nAs alterações não serão salvas!')
    }
    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }


}
