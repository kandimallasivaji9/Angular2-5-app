import {Component, EventEmitter, OnInit, Output} from '@angular/core';


import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('This is test', 'This is test Recipe',"https://cdn5.norecipes.com/wp-content/uploads/2018/02/02071114/mapo-tofu-recipe-010.jpg"),
    new Recipe('This another is test', 'This is test Recipe',"https://cdn5.norecipes.com/wp-content/uploads/2018/02/02071114/mapo-tofu-recipe-010.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
