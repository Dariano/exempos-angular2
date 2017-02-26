import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular 2!';

  valorInicial = 15;
  deletarConteudo = false;

  incrementar() {
    this.valorInicial++;
  }
}
