import { Component, ViewChild, ElementRef, Renderer, OnInit  } from '@angular/core';
import {document} from "@angular/platform-browser/src/facade/browser";

const containerSize: number = 320;
const draggableHeight: number = 50;
const draggableWidth: number = 100;

@Component({
  selector: 'app-drag-drop',
  template: `
    <h2>Drag and Drop</h2>
    <div id="content"></div>
    <div #container class="container" (mousemove)="onMouseMove($event)">
      <div #draggable class="draggable" (mousedown)="onMouseButton($event)" (mouseup)="onMouseButton($event)">
      </div>
    </div>
  `,
  styles: [`
        .container {
            height: ${containerSize}px;
            width: ${containerSize}px;
            background-color: LightGray;
        }
        .draggable {
            height: ${draggableHeight}px;
            width: ${draggableWidth}px;
            background-color: Green;
            position: absolute;
            cursor: move;
        }
        h2{color:blue; text-align:center}
    `]
})
export class DragDropComponent implements OnInit {
   @ViewChild('container') private containerElement: ElementRef;
   @ViewChild('draggable') private draggableElement: ElementRef;

    private boundary: any = {};
    private draggable: any;
    private isMouseDown = false;

    constructor(private renderer: Renderer) {}

    ngOnInit() {
        this.draggable = this.draggableElement.nativeElement;

        const container = this.containerElement.nativeElement;
        this.boundary = {
            left : container.offsetLeft + (draggableWidth / 2),
            right : container.clientWidth + container.offsetLeft - (draggableWidth / 2),
            top : container.offsetTop + (draggableHeight / 2) - 1400,
            bottom : container.clientWidth + container.offsetTop - (draggableHeight / 2) - 1400
        }
        console.log("Boundary", this.boundary);
        console.log("container", container);
        console.log("Draggable", this.draggable);
        console.log("container.offsetLeft : " + container.offsetLeft);
        console.log("container.clientWidth : " + container.clientWidth);
        console.log("container.offsetTop : " + container.offsetTop);
        console.log("draggableWidth / 2 : " + draggableWidth / 2);
        console.log("draggableHeight / 2 : " + draggableHeight / 2);
    }

    private onMouseButton(event: MouseEvent): void {
        this.isMouseDown = event.buttons === 1;
        console.log("isMouseDown",  this.isMouseDown);
    }

    private onMouseMove(event: MouseEvent): void {
        if (this.isMouseDown && this.isInsideBoundary(event)) {
            console.log("onMouseMove if Drag and Drop");
            document.getElementById("content").innerHTML="onMouseMove if Drag and Drop";
            this.renderer.setElementStyle(this.draggable, 'left', event.clientX - (draggableWidth / 2) + "px");
            this.renderer.setElementStyle(this.draggable, 'top', event.clientY - (draggableHeight / 2) + "px");
        }
        console.log("onMouseMove Drag and Drop "+this.isMouseDown + " " + this.isInsideBoundary(event));
    }

    private isInsideBoundary(event: MouseEvent) {
      return event.clientX > this.boundary.left &&
            event.clientX < this.boundary.right &&
            event.clientY > this.boundary.top &&
            event.clientY < this.boundary.bottom;
    }
}
