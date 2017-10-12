import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Component
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
                  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title : string = "Life Cycle Hooks";

  constructor() {
    console.log("constructor()");
  }
  ngOnInit() {
    console.log("ngOnInit()");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy()");
  }
  ngDoCheck() {
    console.log("ngDoCheck()");
  }
  ngOnChanges(changes) {
    console.log("ngOnChanges()");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit()");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked()");
  }
  ngAfterViewInit() {
   console.log("ngAfterViewInit()");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked()");
  }
}
