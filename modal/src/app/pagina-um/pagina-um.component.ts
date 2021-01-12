import { FormGroup, FormBuilder, EmailValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-um',
  templateUrl: './pagina-um.component.html',
  styleUrls: ['./pagina-um.component.scss']
})
export class PaginaUmComponent implements OnInit {

  formulario: FormGroup;
  from: any;
  teste: any;
  formTeste: FormGroup;


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    debugger
  }

  onSubmit(type: any){
    debugger
    console.log('ENTROU')
    if(type == 'TESTE'){
      alert('TESTE');
      console.log('TESTE')
    }else if(type == 'FORM'){
      alert('FORM\n' + this.formulario + '\n' + this.from);
      console.log('FORM')
    }else {
      alert('SAIU')
      console.log('SAIU')
    }

  }

  iniciaForm(){
    return this.formBuilder.group({
      nome: [''],
      email: ['']
    })
  }

  montaForm(formForm: FormGroup){
    this.from = {
      nome: formForm.value.nome,
      email: formForm.value.email
    }
  }

  iniciaTeste(){
    return this.formBuilder.group({
      sobrenome: [''],
      idade: ['']
    })
  }

  montaTeste(formTest: FormGroup){
    this.teste ={
      sobrenome: formTest.value.sobrenome,
      idade: formTest.value.idade
    }
  }

}
