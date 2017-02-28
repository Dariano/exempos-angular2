import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html'
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nome = 'Dariano Soares';
  imagem = 'http://lorempixel.com/400/200/sports/';
  like: boolean = false;

  getValor() {
    return 2;
  }

  onClick() {
    alert('Botão clicado!');
  }

  onKeyup(event) {
    console.log(event);

  }

  onEnter(campo: string) {
    console.log(campo);
  }

  isMouseOver: boolean = false;

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }

  onLike() {
    this.like = !this.like;
  }
}

