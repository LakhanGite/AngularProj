import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  template: `
     <h2>Keyboard Events</h2>
      <p>
        <input type="text" (keydown)="onEvent($event)" on-keyup="onEvent($event)">
        <span class="large">Type: {{event?.type}}</span>
      </p>
      <p>ctrl: {{event?.ctrlKey}}, shift: {{event?.shiftKey}}, meta: {{event?.metaKey}}</p>
      <p>
        <input type="text" on-keypress="onKeyPress($event)">
        <span class="large"> Key: {{key}}</span>
      </p>
  `,
  styles: [
    '.large {font-size: 30px;}',
    'h2{color:blue; text-align:center}'
  ]
})
export class KeyboardComponent {
    private key: string;
    private event: KeyboardEvent;

    private onKeyPress(event: KeyboardEvent): void {
        this.key = event.key;
        console.log("onKeyPress : ", event);
    }

    private onEvent(event: KeyboardEvent): void {
        this.event = event;
        console.log("onEvent : ", event);
    }
}
