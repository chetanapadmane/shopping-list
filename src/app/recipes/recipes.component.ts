import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
    console.log('recipe loaded');
  }

}
