import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import {MoviesListComponent} from './movies-list.component';
import {PageNotFoundComponent} from './not-found.component';
import {AppRoutingModule} from './app-routing-module';




@NgModule({
  imports:      [ BrowserModule
                  ,FormsModule
                  ,HttpModule
                  ,JsonpModule
                  ,AppRoutingModule
                   ],
  declarations: [ AppComponent ,MoviesListComponent,PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
