import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../recipe/ingridient';

@Component({
  selector: 'sl-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items: Ingridient[] = [];

}
