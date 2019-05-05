import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[]= [
    new Recipe('Pestry','Pestry desc','https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2013/6/25/0/CC_kelsey-nixon-smores-bars-recipe-2_s4x3.jpg.rend.hgtvcom.966.725.suffix/1372183746016.jpeg'),
    new Recipe('Cake ','Cake desc','https://happycakestudio.files.wordpress.com/2017/11/img_3546.jpg?w=1277&h=1277'),
    new Recipe('Fruit','Fruit desc','https://5.imimg.com/data5/EE/LS/MY-40752636/red-apple-500x500.jpg')
  ];
  constructor() { }

  getRecipe(){
    return this.recipes.slice();
  }
  
}
