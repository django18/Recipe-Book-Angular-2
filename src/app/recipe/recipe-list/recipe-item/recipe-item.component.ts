import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()recipeItem:Recipe;
  @Input()index:number;
  //@Output()recipeListItemClickEvntEmit=new EventEmitter<void>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  // recipeListItemClickEvnt(){
  //   // event.preventDefault();
  //   // console.log("Recipe Item Event()");
  //   //this.recipeService.showRecipeDetail(this.recipeItem);
  //   this.recipeService.getRecipe(this.index);
  // }


}
