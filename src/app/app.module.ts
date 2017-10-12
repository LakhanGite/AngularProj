import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CustomPropertyBindingComponent } from './data-binding/custom-property-binding.component';
import { CustomEventBindingComponent } from './data-binding/custom-event-binding.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ParentComponentComponent } from './NestedComponents/parent-component.component';
import { ChildComponent } from './NestedComponents/child.component';
import { ParentComponent } from './component-communication/parent.component';
import { ChildrenComponent } from './component-communication/children.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { SupportChildComponent } from './custom-events/support-child.component';
import { InnerTemplateComponent } from './templates/inner-template.component';
import { TemplatesComponent } from './templates/templates.component';
import { MouseComponent } from './custom-events/mouse.component';
import { KeyboardComponent } from './custom-events/keyboard.component';
import { DragDropComponent } from './custom-events/drag-drop.component';

import { MainComponent } from './recipe/main.component';
import { HeaderComponent } from './recipe/header.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeListComponent } from './recipe/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';

import { DirectivesComponent } from './directives/directives.component';
import { DirectiveOneDirective } from './directives/directive-one.directive';
import { DirectiveTwoDirective } from './directives/directive-two.directive';
import { DirectiveThreeDirective } from './directives/directive-three.directive';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    DataBindingComponent,
    CustomPropertyBindingComponent,
    CustomEventBindingComponent,
    ParentComponentComponent,
    ChildComponent,
    ParentComponent,
    ChildrenComponent,
    CustomEventsComponent,
    SupportChildComponent,
    InnerTemplateComponent,
    TemplatesComponent,
    MouseComponent,
    KeyboardComponent,
    DragDropComponent,
    
    MainComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,

    DirectivesComponent,
    DirectiveOneDirective,
    DirectiveTwoDirective,
    DirectiveThreeDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [MainComponent,ShoppingListComponent]
})
export class AppModule { }
