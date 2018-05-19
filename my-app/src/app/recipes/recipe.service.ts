import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../common/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel-just awesome!',
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/2560px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG",
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20),
        new Ingredient('Cucumber',1)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/2018-04-26_Pulled_beef_burger.jpg/2560px-2018-04-26_Pulled_beef_burger.jpg",
      [
        new Ingredient('Bread',2),
        new Ingredient('Meat',1),
        new Ingredient('Tomato',1),
        new Ingredient('Onion',1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
