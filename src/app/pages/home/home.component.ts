import {  Movie } from './../../models/movie';
import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = []
  upComingMovies: Movie[] = []
  topRatedMovies: Movie[] = []

  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getMovies('popular').subscribe({
      next: (Movies) => {
        this.popularMovies = Movies

      }
    })
    this._MoviesService.getMovies('upcoming').subscribe({
      next: (Movies) => {
        this.upComingMovies = Movies

      }
    })

    this._MoviesService.getMovies('top_rated').subscribe({
      next: (Movies) => {
        this.topRatedMovies = Movies
      }
    })

  }

}
