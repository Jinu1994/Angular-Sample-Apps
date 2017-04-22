import {Injectable} from '@angular/core'
import { Http, Response,Headers,RequestOptions , URLSearchParams}  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Movie} from './movie'
@Injectable()
export class MovieService{
    private getMoviesListUrl="http://www.omdbapi.com/?";
    
    
    constructor(private http: Http) { }
   
 mapMovies(response:Response): Movie[]{
    var x= response.json();
    return x.Search.map(toMovie);
}
mapMovie(response:Response):Movie{
  var x= response.json();
  return <Movie>{
    id:x.Id,
    title:x.Title,
    year:x.Year,
    genre:x.Genre
  };
}
  getMovies(searchTitle:string){
    let params: URLSearchParams = new URLSearchParams();
 params.set('s', searchTitle);
   var movies= this.http.get(this.getMoviesListUrl,{search:params})
               .map(this.mapMovies);
               return movies;
  }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
   
}
}
function toMovie(r:any): Movie{
  let movie = <Movie>({
    title: r.Title,
    year: r.Year,
  });
  console.log('Parsed person:', movie);
  return movie;
}