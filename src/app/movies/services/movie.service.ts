import { Injectable } from '@angular/core';
import { Movie } from 'src/app/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _movies: Array<Movie>;
  constructor() {
    this._movies = new Array<Movie>();
  }

  addMovie(movie: Movie): Observable<Movie> {
    movie.id = uuidv4();
    this._movies.push(movie);
    return of(movie);
  }

  getMovies(): Observable<Movie[]> {
    return of(this._movies);
  }
}
