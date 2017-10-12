import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveOne]'
})
export class DirectiveOneDirective {

  constructor(private elementReference: ElementRef, private renderer: Renderer) { 
  //   this.renderer.setElementStyle(this.elementReference.nativeElement, 'color', 'gray');
  }

  private color;
  @Input() defaultColor;
  @Input() highlightColor;
  @Input("appDirectiveOne") highlightColor2;

  @HostListener("mouseenter") mouseEnter(){
    this.color = (this.highlightColor != undefined) ? this.highlightColor : this.highlightColor2;
    //this.highlight(this.color);
  }

  @HostListener("mouseleave") mouseLeave(){
    this.color = (this.defaultColor != undefined) ? this.defaultColor : 'black';
    //this.highlight(this.color);
  }

  @HostBinding("style.color") get setColor(){
    console.log("Color : ", this.color);
    return this.color;
  }

  private highlight(color: string) {
    this.elementReference.nativeElement.style.color = color;
  }

  /*
    someProperty: any;
    constructor(someProperty: SomeType){
      this.someProperty = someProperty;
    }
    **access someProperty here

    IS SAME AS

    constructor(private someProperty: SomeType){}
    **access someProperty here
  */
}
