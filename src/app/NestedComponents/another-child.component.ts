import { Component,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-another-child',
  template: `
    <button class="btn btn-info" (click)="eventClickMethod()">For Parent</button>
  `,
  styles: []
})
export class AnotherChildComponent {
  @Output() messageToParent = new EventEmitter<String>();
  eventClickMethod(){
      this.messageToParent.emit("This text is passed to parent from child");
  }
}
