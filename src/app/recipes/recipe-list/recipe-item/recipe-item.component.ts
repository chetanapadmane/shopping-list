import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  constructor(private rs: RecipeService) { }

  ngOnInit() {
  }
  onRecipeSelected(){
    this.rs.selectedRecipe.emit(this.recipe);
  }
}
