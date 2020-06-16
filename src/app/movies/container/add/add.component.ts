import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
})
export class AddComponent {
  constructor(private movieService: MovieService) {}

  movieFormEvent(movie: Movie) {
    this.movieService.addMovie(movie);
  }
}
