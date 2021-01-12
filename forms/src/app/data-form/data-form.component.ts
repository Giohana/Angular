import { Cidade } from './../shared/models/cidade';
import { VerificaEmailService } from './services/verifica-email.service';
import { FormValidations } from './../shared/form-validations';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { EstadoBr } from './../shared/models/estado-br.model';
import { DropdownService } from './../shared/services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { empty, Observable } from 'rxjs';
import { ValueTransformer } from '@angular/compiler/src/util';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { BaseFormComponent } from '../shared/base-form/base-form.component';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {



  estados: EstadoBr[];
  //estados: Observable<EstadoBr[]>;
  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];
  cidades: Cidade[];


  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verficaEmailService: VerificaEmailService,
    ) {
      super();
    }

  ngOnInit(): void {

    //this.verficaEmailService.verificarEmail('email@email.com').subscribe()

    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();

    // this.dropdownService.getEstadosBr().subscribe(dados => {this.estados = dados; console.log(dados);})

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: FormControl(null),
    //   })
    // });

   // this.estados = this.dropdownService.getEstadosBr();

   this.dropdownService.getEstadosBr()
    .subscribe(dados => this.estados = dados);

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email], this.validarEmail.bind(this)],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()

    });

    //this.formulario.get('endereco.cep').valueChanges.subscribe(value => console.log('valor CEP', value));

    this.formulario.get('endereco.cep').statusChanges
        .pipe(
          distinctUntilChanged(),
          tap(value => console.log('status Cep: ', value)),
          switchMap(ststus => status === 'VALID' ?  this.cepService.consultaCep(this.formulario.get('endereco.cep').value)
          : empty()
          )
        )
        .subscribe(dados => dados ? this.populaDadosForm(dados) : {});

        this.formulario.get('endereco.estado').valueChanges
          .pipe(
            tap(estado => console.log('Novo estado: ', estado)),
            map(estado => this.estados.filter(e => e.sigla === estado)),
            map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
            switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
            tap(console.log)
          )
          .subscribe(cidades => this.cidades = cidades);

       // this.dropdownService.getCidades(8).subscribe(console.log);

    // [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
  }

  buildFrameworks() {

    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));

    // return [
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false)
    // ]
  }

  submit(){
    console.log(this.formulario.value);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks.map((v, i) => v ? this.frameworks[i] : null)
        .filter(v => v !== null)
      });
      console.log(this.formulario.value);

      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .subscribe(dados => {
          console.log(dados);
          // reseta o form
          // this.formulario.reset();
          // this.resetar();
        },
          (error: any) => alert('erro'));


    }

  consultaCep() {

    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep)
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados) {

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    this.formulario.get('nome').setValue('Giohana');

    // console.log(formulario);
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        // cep: dados.cep,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue(cargo);

  }

  comparaCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologias').setValue(['java', 'javascript', 'php']);
  }

  validarEmail(formControl: FormControl){
    return this.verficaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? {emailInvalido: true} : null))
  }

}
