import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[];

  constructor() {
    this.movies = [
      {
        name: 'El Señor de los Anillos',
        duration: 300,
        director: 'Peter Jackson',
      },
      {
        name: 'La Naranja Mecánica',
        duration: 120,
        director: 'Stanley Kubrick',
      },
    ];
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  getMovie(name: string): Movie | undefined {
    return this.movies.find((movie) => movie.name === name);
  }
}
