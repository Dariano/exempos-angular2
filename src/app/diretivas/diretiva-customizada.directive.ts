import { Directive, ElementRef, HostListener, Input, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[diretivaCustomizada]'
})
export class DiretivaCustomizadaDirective {

  constructor(private el: ElementRef, private _renderer: Renderer) {}

    @Input() 
    highlightColor: string;

    @HostListener('mouseenter') 
    onMouseEnter() {
        this.highlight(this.highlightColor || 'red');
    }

    @HostListener('mouseleave') 
    onMouseLeave() {
        this.highlight(null);
    }

    @HostBinding('style.backgroundColor')
    backgroundColor: string;

    private highlight(color: string) {
        // this.el.nativeElement.style.backgroundColor = color;
        
        // this._renderer.setElementStyle(
        //     this.el.nativeElement,
        //     'background-color',
        //     color
        // );

        this.backgroundColor = color;
    }

}
