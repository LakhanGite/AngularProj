import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom-property-binding',
  template: `<p><b>{{someString}}</b> from custom-property-binding!</p>`,
  styles: []
})
export class CustomPropertyBindingComponent {
  @Input() someString : string = "Custom Bind this String";
}
