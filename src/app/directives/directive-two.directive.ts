import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appDirectiveTwo]'
})
export class DirectiveTwoDirective {

  constructor(private templateReference: TemplateRef<any>, private viewReference: ViewContainerRef, private elementReference: ElementRef,
   private renderer: Renderer) { }

  // @Input() set appDirectiveTwo(condition: boolean){
  //   if(!condition)
  //     this.viewReference.createEmbeddedView(this.templateReference);
  //   else
  //     this.viewReference.clear();
  // }

  @Input() set appDirectiveTwo(condition: boolean) {
    if (condition) {
      console.log("If Condition : ", condition);
      this.viewReference.createEmbeddedView(this.templateReference);
      console.log("this.templateReference : ", this.templateReference);
      console.log("this.elementReference : ", this.elementReference);
      //this.renderer.setElementStyle(this.elementReference.nativeElement, 'color', 'green');
    }
    else{
       this.viewReference.clear();
      console.log("Else Condition : "+ condition + " ",  this.templateReference);
    }
     
  }
}
