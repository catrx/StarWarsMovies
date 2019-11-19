import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../../models/character.model';
import {CharacterService} from '../../../services/character.service';

@Component({
  selector: 'app-movie-characters',
  templateUrl: './movie-characters.component.html',
  styleUrls: ['./movie-characters.component.scss']
})
export class MovieCharactersComponent implements OnInit {

  @Input() characters;

  charactersList: Character[] = [];
  isLoading = true;
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    if (this.characters) {
      this.getCharacters();
    }
  }

  getCharacters() {
    for (const url of this.characters) {
      this.characterService.getCharacter(url).subscribe(data => {
          this.charactersList.push(data);
          this.isLoading = false;
      });
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  transform(name: string, gender: string): string {
    if (gender.toLowerCase() === 'male')
      return 'M';
    else
      return 'F';
  }
}
