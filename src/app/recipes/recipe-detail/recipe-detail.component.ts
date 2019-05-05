import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  isManageRecipeClicked=false;
  constructor(private rs: RecipeService) { }

  ngOnInit() {
  }
  manageRecipe(){
    this.isManageRecipeClicked = !this.isManageRecipeClicked;
  }
  addToShoppingList(){
    this.rs.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
