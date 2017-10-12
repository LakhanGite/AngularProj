import {
  Component,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,} from '@angular/core';
import { InnerTemplateComponent } from './inner-template.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements AfterViewInit, AfterViewChecked {
  title : string = "Templates";
  bind : string = "string bind property";
  @ViewChild('bindParagraph') bindValue : HTMLElement;

  ngAfterViewInit() {
    //right place to use it
    console.log("Templates -> ngAfterViewInit()" , " : " , this.bindValue);
  }
  ngAfterViewChecked() {
    console.log("Templates -> ngAfterViewChecked()" , " : " , this.bindValue);
  }

  @ViewChild("childHandle") invokeChild : InnerTemplateComponent;
  callChildMethod(){
    console.log("callChildMethod invoked");
    this.invokeChild.childMethod();
  }
}
