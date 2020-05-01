import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  itemsOnDropdown = ['To Shopping List', 'Edit Recipe', 'Delete Recipe'];
  @Input() recipeToDisplay: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
