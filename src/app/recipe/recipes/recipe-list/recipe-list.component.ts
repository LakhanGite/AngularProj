import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipes} from '../../Recipes';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeArray: Recipes[] = [
    new Recipes("Recipe 1", "Dummy Description", "https://s-media-cache-ak0.pinimg.com/564x/55/b0/02/55b002d776c574a191680f74ecd35e22.jpg", []),
    new Recipes("Recipe 2", "Dummy Description", "http://c.buyoly.com/bethbee-recipes-journal-lg.jpg", []),
    new Recipes("Recipe 3", "Dummy Description", "https://cdn2.hubspot.net/hub/153301/file-1857974228-jpg/COPD_Friendly_Recipes.jpg", []),
    new Recipes("Recipe 4", "Dummy Description", "https://pe-wbcm.s3.amazonaws.com/media/1080/recipes.png", []),
    new Recipes("Recipe 5", "Dummy Description", "http://www.excelmass.com/wp-content/uploads/2015/12/ph_recipes.jpg", [])
  ];
  dummyRecipe = new Recipes("Recipe 1", "Dummy Description", "https://s-media-cache-ak0.pinimg.com/564x/55/b0/02/55b002d776c574a191680f74ecd35e22.jpg", []);
  @Output() recipeListSelected = new EventEmitter<Recipes>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipes){
    this.recipeListSelected.emit(recipe);
  }

}
