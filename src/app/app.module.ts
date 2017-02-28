import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { ComponenteCriadoPeloNgComponent } from './componente-criado-pelo-ng/componente-criado-pelo-ng.component';
import { CursosComponent } from './cursos/cursos.component';


import { CursosModule } from './cursos/cursos.module';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

import { MaterializeModule } from 'angular2-materialize';
import "angular2-materialize";
import { DiretivaCustomizadaDirective } from './diretivas/diretiva-customizada.directive';
import { NgElseDirective } from './diretivas/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    ComponenteCriadoPeloNgComponent,
    PropertyBindingComponent,
    DiretivaCustomizadaDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
