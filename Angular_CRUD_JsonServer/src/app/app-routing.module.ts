import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddproductonlyGuiComponent } from './addproductonly-gui/addproductonly-gui.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';

import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {
    path: "displayproduct",
    component: DisplayproductComponent
  },

  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },

  {
    path: "login",
    component: UserloginComponent
  },

  {
    path: "addproduct",
    component: AddproductComponent
  },
  {
    path: "addproductonly_gui",
    component: AddproductonlyGuiComponent
  },
  {
    path: "edit/:id",
    component: EditproductComponent
  },
  {
    path: "",
    component: UserloginComponent
  },
  {
    path: "displayProductToUser",
    component: UserdisplayComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
