import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
  <h1>Movie App</h1>
  <ul class="nav nav-pills">
  
  <li class="nav-item">
    <a class="nav-link" routerLink="/movies" routerLinkActive="active">Movies</a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link " routerLink="/foo" href="#">Page not found</a>
  </li>
</ul>
  <router-outlet></router-outlet>
`,
styles:[`a{
    background:#607D8B;
    color:white;
    border:1px solid grey;
}`]
})
export class AppComponent { }