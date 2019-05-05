import { Component, OnInit,ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  constructor(private sl:ShoppingListService) { }

  ngOnInit() {
  }
  addItem(){
    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.value;
    let newIngredient = new Ingredient(name, amount)
    this.sl.addIngredient(newIngredient);
  }
  deleteItem(){

  }
  clearItem(){

  }
}
