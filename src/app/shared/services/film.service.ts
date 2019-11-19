import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private dataURL = 'https://swapi.co/api/films/';

  constructor(private http: HttpClient) {
  }

  getAllFilm(title?): Observable<any> {
    const params = new HttpParams().set('search', title || '');
    return this.http.get<any>(this.dataURL, {params});
  }


}
