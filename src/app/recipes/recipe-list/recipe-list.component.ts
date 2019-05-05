import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipe:Recipe[];

  constructor(private rs: RecipeService) { }

  ngOnInit() {
    this.recipe = this.rs.getRecipes();
  }
}
