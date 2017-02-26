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

import { HighlightDirective } from './property-binding/input-property.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    ComponenteCriadoPeloNgComponent,
    PropertyBindingComponent,
    HighlightDirective,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
