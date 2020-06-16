import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.sass'],
})
export class MovieItemComponent implements OnInit {
  public _title: String;
  public _releaseDate: Date;

  constructor() {}

  @Input()
  set title(title: String) {
    this._title = title;
  }

  @Input()
  set releaseDate(releaseDate: Date) {
    this._releaseDate = releaseDate;
  }

  ngOnInit(): void {}
}
