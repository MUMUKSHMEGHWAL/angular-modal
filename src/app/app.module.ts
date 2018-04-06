import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { Services } from '../core/services/services.module';

import { AppComponent } from './app.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDirectiveComponent } from '../directives/modalDirective/modalDirective.component';


@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    ModalComponent,
    ModalDirectiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Services
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
