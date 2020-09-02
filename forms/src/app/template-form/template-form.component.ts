import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form) {
    console.log(form);

    //console.log(this.usuario);
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    }
  }

  //webservice = viacep
  consultaCep(cep, form){
    cep = cep.replace(/\D/g, '');
    if(cep != ""){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        this.resetaDadosForm(form);
        this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`)
        .subscribe(dados => this.populaDadosForm(dados, form));
      }
      else{
        alert("CEP inválido!");
      }

    }
  }

  populaDadosForm(dados, formulario){
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        //cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    //console.log(formulario);
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        //cep: dados.cep,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
  });
  }
}