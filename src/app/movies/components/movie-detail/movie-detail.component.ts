import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass'],
})
export class MovieDetailComponent implements OnInit {
  public _movie: Movie;

  constructor() {}

  @Input()
  set movie(movie: Movie) {
    this._movie = movie;
  }

  ngOnInit(): void {}
}
