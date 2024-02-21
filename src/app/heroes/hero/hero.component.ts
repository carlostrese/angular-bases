import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iroman';
  public age:  number = 30;

  get capitalzeName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name}- ${this.age}`;
  }
  changeHero():void{
    this.name ='Batman';
  }
  changeAge():void{
    this.age = 50;
  }
  resetForm():void{
    this.name = 'iroman';
    this.age = 30;
  }
}
