import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  public movie: Observable<Movie>;
  constructor(private _movieService: MovieService) {}

  setMovies(): Observable<Movie[]> {
    return this._movieService.getMovies();
  }

  movieDetail(movieId): void {
    this.movie = this._movieService.getMovie(movieId);
  }
}
