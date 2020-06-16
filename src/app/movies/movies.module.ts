import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './container/movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './container/home/home.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AddComponent } from './container/add/add.component';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    MoviesComponent,
    HomeComponent,
    MovieItemComponent,
    MovieDetailComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatRippleModule,
  ],
})
export class MoviesModule {}
