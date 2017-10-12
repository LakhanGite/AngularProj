import { Component} from '@angular/core';
import {document} from "@angular/platform-browser/src/facade/browser";

@Component({
  selector: 'app-inner-template',
  template: `
    <ng-content></ng-content>
    <p id="child-template"></p>
  `,
  styles: []
})
export class InnerTemplateComponent {

  childMethod(){
    console.log("childMethod invoked");
    document.getElementById("child-template").innerHTML = "Child Method Invoked!";
  }

}
