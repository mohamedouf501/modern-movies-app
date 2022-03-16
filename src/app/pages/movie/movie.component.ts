import { Movie, MovieVideo, MovieImages, MovieCredits } from './../../models/movie';
import { MoviesService } from './../../service/movies.service';
import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  imagesSizes = IMAGES_SIZES;

  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) { }

  movie: Movie | null = null
  MovieVideos: MovieVideo[] = []
  MovieImages: MovieImages | null = null
  movieCredits: MovieCredits | null = null;

  ngOnInit(): void {
    this._ActivatedRoute.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id)
      this.getMovieVideos(id)
      this.getMovieImges(id)
      this.getMovieCredits(id);
    })
  }
  getMovie(id: string) {
    this._MoviesService.getMovie(id).subscribe({
      next: (Movie) => {
        this.movie = Movie
      }
    })
  }
  getMovieVideos(id: string) {
    this._MoviesService.getMovieVideos(id).subscribe(MovieVideo => {
      this.MovieVideos = MovieVideo
    })
  }
  getMovieImges(id: string) {
    this._MoviesService.getMovieImages(id).subscribe(MovieImage => {
      this.MovieImages = MovieImage

    })
  }
  getMovieCredits(id: string) {
    this._MoviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }


  ngOnDestroy(): void {

  }
}
