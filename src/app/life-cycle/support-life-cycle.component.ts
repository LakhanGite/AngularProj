import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-support-life-cycle',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class SupportLifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
                  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() someValue : number = 100;

  constructor() {
    console.log("SupportLifeCycleComponent : constructor()");
  }
  ngOnInit() {
    console.log("SupportLifeCycleComponent : ngOnInit()");
  }
  ngOnDestroy() {
    console.log("SupportLifeCycleComponent : ngOnDestroy()");
  }
  ngDoCheck() {
    console.log("SupportLifeCycleComponent : ngDoCheck()");
  }
  ngOnChanges(changes) {
    console.log("SupportLifeCycleComponent : ngOnChanges()");
  }
  ngAfterContentInit() {
    console.log("SupportLifeCycleComponent : ngAfterContentInit()");
  }
  ngAfterContentChecked() {
    console.log("SupportLifeCycleComponent : ngAfterContentChecked()");
  }
  ngAfterViewInit() {
   console.log("SupportLifeCycleComponent : ngAfterViewInit()");
  }
  ngAfterViewChecked() {
    console.log("SupportLifeCycleComponent : ngAfterViewChecked()");
  }
}
