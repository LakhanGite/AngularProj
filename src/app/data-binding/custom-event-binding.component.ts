import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  template: `<button (click)="eventClickMethod()">Custom Event Binding</button>`,
  styles: []
})
export class CustomEventBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  eventClickMethod(){
    this.clicked.emit("Custom Click Event Bound");
  }
}
