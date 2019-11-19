import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MovieSelectComponent } from './views/home/movie-select/movie-select.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import {FilmService} from './shared/services/film.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselDetailsComponent} from './shared/components/carousel-details/carousel-details.component';
import {MovieDetailsComponent} from './shared/components/carousel-details/movie-details/movie-details.component';
import {
  GenderPipe,
  MovieCharactersComponent
} from './shared/components/carousel-details/movie-characters/movie-characters.component';
import {CharacterService} from './shared/services/character.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MovieSelectComponent,
    MovieDetailsComponent,
    MovieCharactersComponent,
    MovieCardComponent,
    CarouselDetailsComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [
    MovieDetailsComponent,
    MovieCharactersComponent,
    CarouselDetailsComponent
  ],
  providers: [FilmService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
