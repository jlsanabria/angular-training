import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css',
})
export class HeroListComponent {
  public heroNames: string[] = [
    'American Captain',
    'Ironman',
    'Hulk',
    'Thor',
    'Black Widow',
    'Hawk Eye',
  ];
  public deletedHero?: string;

  deleteLastHero() {
    this.deletedHero = this.heroNames.pop();
  }
}
