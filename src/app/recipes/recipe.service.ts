import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A First Recipe', 'This is simply a first recipe.', 'https://p0.pikrepo.com/preview/1002/340/chocolate-cake-chocolate-cake-recipe.jpg'),
    new Recipe('A Second Recipe', 'This is simply a second recipe.', 'https://p0.pikrepo.com/preview/1002/340/chocolate-cake-chocolate-cake-recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}