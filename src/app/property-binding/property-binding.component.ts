import { Component, OnInit } from '@angular/core';

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

  getValor() {
    return 2;
  }

  onClick() {
    alert('Botão clicado!');
  }

  onKeyup(event:KeyboardEvent) {
    console.log(event);
    
  }

  onEnter(campo:string){
    console.log(campo);
  }

  isMouseOver: boolean = false;

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }
}
