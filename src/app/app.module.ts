import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddTimeComponent } from './add-time/add-time.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "add",
  component: AddTimeComponent
}, {
  path: "login",
  component: LoginComponent
},{
  path:"**",
  redirectTo : ""
}];

@NgModule({
  declarations: [
    AppComponent
,
    HomeComponent,
    AddTimeComponent,
    LoginComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
