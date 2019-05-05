import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  newIngredients = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];;
  constructor() { }
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    console.log('call from service');
    this.ingredients.push(ingredient);
    this.newIngredients.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredients.next(this.ingredients.slice());
  }
}
