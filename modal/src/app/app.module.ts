import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalTesteComponent } from './modal-teste/modal-teste.component';
import { PaginaUmComponent } from './pagina-um/pagina-um.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalTesteComponent,
    PaginaUmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
