import { Component, OnInit } from '@angular/core';
import {Film} from '../../../shared/models/film.model';
import {FilmService} from '../../../shared/services/film.service';

@Component({
  selector: 'app-movie-select',
  templateUrl: './movie-select.component.html',
  styleUrls: ['./movie-select.component.scss']
})
export class MovieSelectComponent implements OnInit {
  isLoading = true;
  films: Film[];
  selectValue: string[]
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(title?) {
    this.filmService.getAllFilm(title).subscribe(data => {
      this.films = data.results;
      if (!this.selectValue) {
        this.selectValue = data.results.map(films => films.title);
      }
      this.isLoading = false;
    });
  }

  onChange(e) {
    this.getFilms(e.target.value);
  }

}
