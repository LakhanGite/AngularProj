import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { DirectiveOneDirective } from './directive-one.directive';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  title: string = "Directives";
  attributeDirectives: string = "Attribute Directives";
  structuralDirectives: string = "Structural Directives";
  
  constructor(private elementReference: ElementRef, private renderer: Renderer) {
    
   }

  ngOnInit() {
  }

  mouseEnterEvent(){
    this.renderer.setElementStyle(this.elementReference.nativeElement, 'color', 'gray');
  }
  mouseLeaveEvent(){
    this.renderer.setElementStyle(this.elementReference.nativeElement, 'color', 'green');
  }

  private switchFlag: boolean = true;
  onSwitch(){
    this.switchFlag = !this.switchFlag; 
  }

  private forArray: string[] = ["Aakash", "Goplani", "Angular 2"];

  private switchCondition: string = "aakash";
}
