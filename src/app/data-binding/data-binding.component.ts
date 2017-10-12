import { Component } from '@angular/core';
import {document} from "@angular/platform-browser/src/facade/browser";

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  stringInterpolation = "Example of String";
  numberInterpolation = 2;
  someString : string = " <script>alert('evil never sleeps')</script>";

  //property-binding method call
  methodCall(){
    return false;
  }

  //event binding
  clickMethod(){
    document.getElementById("eventId").innerHTML = "Click Event Bound ";
  }

  //custom event binding
  eventClickMethod(value : string){
    document.getElementById("customEventId").innerHTML = value;
  }

  //Two-Way data binding
  person = {
    name : "Aakash",
    age : 23
  };
}
