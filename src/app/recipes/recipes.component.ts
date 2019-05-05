import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor(private rs: RecipeService) { }

  ngOnInit() {
    console.log('recipe loaded');
    this.rs.selectedRecipe.subscribe(recipe => this.selectedRecipe = recipe);
  }

}
