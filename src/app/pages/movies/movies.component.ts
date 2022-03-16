import { ActivatedRoute } from '@angular/router';
import { Movie } from './../../models/movie';
import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []
  genreId: string | null = null;
  searchValue:string |null = null
  constructor(private _MoviesService: MoviesService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.pipe(take(1)).subscribe(({ genresId }) => {
      
      if (genresId) {
        this.genreId = genresId;
        this.getMoviesByGenre(genresId, 1 );
      } else {
        this.getPageMovies(1);
      }
    })
  }
  getPageMovies(page: number , searchKeyWord?:string) {
    this._MoviesService.searchMovies(page , searchKeyWord).subscribe({
      next: (movies) => {
        this.movies = movies
      }
    })
  }
  getMoviesByGenre(genreId: string, page: number) {
    this._MoviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {

    const pageNumber = event.page + 1;

    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPageMovies(pageNumber, this.searchValue);
      } else {
        this.getPageMovies(pageNumber);
      }
    }
  }
  searchChanged()
  {
    if(this.searchValue)
    {
      this.getPageMovies(1 , this.searchValue)

    }
    else{

    }
  }
}
