import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveThree]'
})
export class DirectiveThreeDirective {
  @Input('appDirectiveThree') highlightColor: string;
  constructor(private elementReference: ElementRef, private rendererReference: Renderer) {
    console.log("appDirectiveThree : "+this.highlightColor);
    this.rendererReference.setElementStyle(this.elementReference.nativeElement,'background-color','yellow');
    this.rendererReference.setElementStyle(this.elementReference.nativeElement,'color','blue'); 
    //this.elementReference.nativeElement.style.backgroundColor = 'pink';
    //this.elementReference.nativeElement.style.color = 'red';
  }
}
