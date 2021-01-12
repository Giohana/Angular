import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../../../angular-cli-libs-externas/src/app/app-routing.module';
import { UploadComponent } from './upload/upload.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModalTesteComponent } from './modal-teste/modal-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ModalTesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
