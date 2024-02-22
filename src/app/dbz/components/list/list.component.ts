import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name:'Trunk',
      power:500,
    },
    {
      name:'Gojan',
      power:1000
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharecter(id?:string):void{
    //TODO: eminit el id del pesonaje
    if( !id) return;

    this.onDelete.emit(id);
  }
}
