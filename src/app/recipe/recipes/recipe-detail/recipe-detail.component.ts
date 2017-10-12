import { Component, OnInit, Input } from '@angular/core';
import {Recipes} from '../../Recipes';

@Component({
  selector: 'rd-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipes;
  constructor() { }

  ngOnInit() {
  }

}
