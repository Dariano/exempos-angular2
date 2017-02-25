import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  providers: [CursoService]
})
export class CursosComponent{

  nome = 'Dariano';
  cursos = [];
  cursoService;

  constructor(cursoService: CursoService) {

    this.cursos = cursoService.getCursos();
  }
}
