import { Component, OnInit } from '@angular/core';


import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('This is test', 'This is test Recipe',"https://cdn5.norecipes.com/wp-content/uploads/2018/02/02071114/mapo-tofu-recipe-010.jpg"),
    new Recipe('This is test', 'This is test Recipe',"https://cdn5.norecipes.com/wp-content/uploads/2018/02/02071114/mapo-tofu-recipe-010.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
