import { Component } from '@angular/core';
import { Movie } from 'src/app/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
})
export class AddComponent {
  constructor(private movieService: MovieService, private router: Router) {}

  movieFormEvent(movie: Movie) {
    this.movieService
      .addMovie(movie)
      .subscribe((_) => this.router.navigate(['/movies']));
  }
}
