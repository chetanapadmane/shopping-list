import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  isManageRecipeClicked=false;
  constructor() { }

  ngOnInit() {
  }
  manageRecipe(){
    this.isManageRecipeClicked = !this.isManageRecipeClicked;
  }

}
