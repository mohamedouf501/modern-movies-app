import { Genre } from './../../models/genre';
import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres: Genre[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData.genres

    });
  }

}
