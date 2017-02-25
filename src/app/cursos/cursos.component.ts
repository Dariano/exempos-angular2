import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nome = 'Dariano';

  cursos = ['Angular 2', 'Angular 1', 'JavaScript'];

}
