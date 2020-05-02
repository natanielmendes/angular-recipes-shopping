import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('confetti', 2),
    new Ingredient('cacao', 4)
  ]

  constructor() { }

  ngOnInit() {
  }

  addIngredientToList(ingredient: Ingredient) {
    console.log(this.ingredients)
    this.ingredients.push(ingredient);
    console.log(this.ingredients)
  }

}
