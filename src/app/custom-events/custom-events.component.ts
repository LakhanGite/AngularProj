import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title : string = "Custom Events";
  url : string = "http://lishman.io/angular-2-event-binding";
}
