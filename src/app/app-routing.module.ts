import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "movies",
    component: MoviesComponent
  },
  {
    path: "movie/:id",
    component: MovieComponent
  }
  ,
  {
    path: "tvshows",
    component: TvShowsComponent
  }
  ,
  {
    path: "genres",
    component: GenresComponent
  }
  ,
  {
    path: "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
