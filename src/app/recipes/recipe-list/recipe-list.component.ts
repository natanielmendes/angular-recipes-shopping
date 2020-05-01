import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipeEl = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A First Recipe', 'This is simply a first recipe.', 'https://p0.pikrepo.com/preview/1002/340/chocolate-cake-chocolate-cake-recipe.jpg'),
    new Recipe('A Second Recipe', 'This is simply a second recipe.', 'https://p0.pikrepo.com/preview/1002/340/chocolate-cake-chocolate-cake-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(selectedRecipe: Recipe) {
    this.selectedRecipeEl.emit(selectedRecipe);
  }

}
