import {Component} from '@angular/core';
import {MovieService} from './movie.service'
@Component({
    selector:`<movie-list></movie-list>`,	
    template:`
    <div class='movie-list-container'>
    <label > Enter Movie Title to search for:</label>
     <input (input)="searchTitle=$event.target.value"> <button (click)="searchMovie()">Search</button>
    <h2>{{title}}</h2>

    <ul class="movies"> 
        <li *ngFor="let movie of movies">
<span class="badge"> {{movie.title}}</span>
        </li>
    </ul>
    </div>
    `
	,
    providers:[MovieService],
	styles:[` .movies .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
      margin-bottom:10px;
    }
    .movie-list-container{
      margin-top:10px;
    }
`]
})
export class MoviesListComponent{
   title:string=`The List of movies`
   movies:any;
   searchTitle:string;
   constructor(private movieService:MovieService){
 
   }
searchMovie(){
this.movieService.getMovies(this.searchTitle).subscribe(movies=>this.movies=movies);                           
}

}