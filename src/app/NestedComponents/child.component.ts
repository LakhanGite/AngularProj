import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
        <h3>Child Component</h3>
        <ng-content></ng-content>
    </div>  
  `,
  styles: [`
    .child{
        color: blue;
    }
`]
})
export class ChildComponent  {

}
