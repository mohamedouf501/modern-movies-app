import { Movie } from './../../models/movie';
import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []

  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.getPageMovies(1)
  }
  getPageMovies(page:number)
  {
    this._MoviesService.searchMovies(page).subscribe({
      next: (movies) => {
        this.movies = movies
      }
    })
  }
  paginate(event:any) {
    console.log(event)
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.getPageMovies(event.page)

}
}
