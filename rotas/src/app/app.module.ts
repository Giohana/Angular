//import { CursosService } from './cursos/cursos.service';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosComponent } from './alunos/alunos.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { AlunosModule } from './alunos/alunos.module';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosComponent } from './cursos/cursos.component';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosRoutingModule } from './cursos/cursos.routing.module';
import { AuthService } from './login/auth.service';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    //AlunosComponent
    // CursoDetalheComponent,
    // CursosComponent,
    // CursoNaoEncontradoComponent,
    
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent

  ],
  imports: [
    //CursosModule,
    //AlunosModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CursosRoutingModule

  ],
  providers: [
    AuthService, 
    AuthGuard, 
    CursosGuard,
    AlunosGuard,
    
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
