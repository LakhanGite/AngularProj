import { Component, OnInit } from '@angular/core';
import {Recipes} from '../Recipes';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipes;
  constructor() { }

  ngOnInit() {
  }

}
