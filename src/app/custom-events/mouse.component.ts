import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse',
  template: `
    <h2>Mouse Events</h2>
    <div class="box" (mouseenter)="onEvent($event)"
                     (mouseleave)="onEvent($event)"
                     (mousemove)="coordinates($event)"
                     on-click="onEvent($event)"
                     on-dblclick="onEvent($event)"
                     on-contextmenu="onEvent($event)">
      <p class="type">Type: {{event?.type}}</p>    
      <p>x: {{clientX}}, y: {{clientY}}</p>
      <p>ctrl: {{event?.ctrlKey}}, shift: {{event?.shiftKey}}, meta: {{event?.metaKey}}, button: {{event?.button}}</p>
      <p>ctrl -> ctrl+mouseClick, shift -> shift+mouseClick, cmd -> windows+mouseClick </p>
    </div>
  `,
  styles: [
    '.box {width:100%; height:auto; border: 1px solid LightGray; padding: 10px;}',
    '.type {font-size: 30px;}',
    'h2{color:blue; text-align:center}']
})
export class MouseComponent {
    private event: MouseEvent;
    private clientX = 0;
    private clientY = 0;

    private onEvent(event: MouseEvent): void {
        this.event = event;
        //console.log("onEvent : ", event);
    }

    private coordinates(event: MouseEvent):void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
        //console.log("coordinates : ", event);
    }
}
