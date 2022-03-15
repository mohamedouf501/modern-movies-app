import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovies():Observable<any>{
    return  this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=7df7a995a9cb46caad1003dc4c0e0c65')
  }
}
