import { NgModule } from "@angular/core";
import {Routes,RouterModule} from'@angular/router';
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes:Routes=[
    {path:'',redirectTo:'/recipe',pathMatch:'full'},
    {path:'recipe',component:RecipeComponent,children:[
      {path:'',component:RecipeStartComponent} , 
      {path:'new',component:RecipeEditComponent,canActivate:[AuthGuard]} , 
      {path:':id',component:RecipeDetailComponent},
      {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGuard]}      
    ]},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent}
    //{path:'**',component:'Page Not Found - 404'}
  ];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutingModule{

}