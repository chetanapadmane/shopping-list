import { Component, OnInit,ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addItem(){
    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.value;
    this.ingredientAdded.emit((new Ingredient(name, amount)));
  }
  deleteItem(){

  }
  clearItem(){

  }
}
