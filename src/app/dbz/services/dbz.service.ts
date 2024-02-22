

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }
  public characters: Character[] =[
    {
      id: uuid(),
      name:'krilin',
      power:1000
    },
    {
      id: uuid(),
      name:'goku',
      power:9500
    },{
      id: uuid(),
      name:'Vegata',
      power:7500
    }

  ];
  onNewCharacter(character:Character):void{
    const newCharecter: Character={id:uuid(), ...character};
    this.characters.push(newCharecter);
  }

  // onDeleteCharacter(index:number):void{
  //    this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id !=id);
    }
  }

