import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  constructor() { }

  getCursos() {
    return ['Angular 2', 'Angular 1', 'JavaScript', 'Java', '.NET'];
  }
}
