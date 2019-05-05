import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  private ingredients: Ingredient[] 
  constructor(private sl: ShoppingListService) { }

  ngOnInit() {
    console.log('shopping list loaded');
    this.ingredients = this.sl.getIngredients();
    this.sl.newIngredients.subscribe(newIngredients => this.ingredients = newIngredients)
  }
  
  
}
