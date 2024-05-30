import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[];

  constructor() {
    this.movies = [];
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }
}
