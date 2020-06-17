import { Injectable } from '@angular/core';
import { Movie } from 'src/app/core';
import { Observable, of, from, throwError } from 'rxjs';
import { first, filter, defaultIfEmpty, catchError } from 'rxjs/operators';
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

  getMovie(movieId): Observable<Movie> {
    return from(this._movies).pipe(
      filter(({ id }) => id === movieId),
      first()
    );
  }
}
