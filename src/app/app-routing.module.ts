import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "../../../education-ui/users/src/app/menu/menu.component";
import {UserComponent} from "../../../education-ui/users/src/app/user/user.component";
import {ErrorUrlComponent} from "../../../education-ui/users/src/app/error-url/error-url.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'menu',
    pathMatch:'full'
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'**',
    component:ErrorUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
