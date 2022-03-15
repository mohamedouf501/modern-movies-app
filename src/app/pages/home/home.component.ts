import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies =[]

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getMovies().subscribe({
      next:(respones)=>{
        this.movies =respones.results
        console.log(this.movies)

      }
    })
  }

}
