import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chivito al pan',
      'Plato típico de Uruguay a base de carne vacuna y especias.',
      'https://upload.wikimedia.org/wikipedia/commons/1/12/Chivito_al_pan_uruguayo.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 15)
      ]
    ),
    new Recipe(
      'Tasty Burger',
      'What else you need to say?',
      'https://p0.pikist.com/photos/874/195/burger-food-hamburger-lunch-restaurant-meal-eat-tasty-fastfood.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}