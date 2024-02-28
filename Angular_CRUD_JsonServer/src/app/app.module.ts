import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { AddproductonlyGuiComponent } from './addproductonly-gui/addproductonly-gui.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { UserComponent } from './user/user.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    HomeComponent,
    AddproductComponent,
    DisplayproductComponent,
    AddproductonlyGuiComponent,
    EditproductComponent,
    UserComponent,
    UserdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,   
    ReactiveFormsModule,
    MaterialModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
