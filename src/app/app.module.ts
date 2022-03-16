import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieItemComponent } from './components/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { MovieComponent } from './pages/movie/movie.component';
import {TabViewModule} from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TirmPipe } from './pips/tirm.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    GenresComponent,
    SliderComponent,
    ItemsBannerComponent,
    MovieItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    TirmPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
