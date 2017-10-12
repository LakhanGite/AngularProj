import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  styles: [`
    .parent{
        color: red;
    }
`,
  `
    h2{
      color : blue;
      text-align: center;
    }
`],
  template: `
    <h2>Nested Components Examples</h2>
    <div class="parent">
        <h1>Parent Component</h1>
        <app-child></app-child>
    </div>  
  `
})
export class ParentComponentComponent {

}
