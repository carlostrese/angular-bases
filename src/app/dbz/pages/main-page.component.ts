import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor(private dbzService:DbzService){
  }
  get characters():Character[]{
    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }
}
