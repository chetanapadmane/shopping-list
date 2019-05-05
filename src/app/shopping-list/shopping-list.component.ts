import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomato',10)
  ];
  constructor() { }

  ngOnInit() {
    console.log('shopping list loaded');
  }
  onIngredientAdded(newIngredient:Ingredient){
    this.ingredients.push(newIngredient)
  }
}
