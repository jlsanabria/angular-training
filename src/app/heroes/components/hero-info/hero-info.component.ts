import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero-info.component.html',
  styleUrl: './hero-info.component.css',
})
export class HeroInfoComponent {
  public name: string = 'Ironman';
  public age: number = 39;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'American Captain';
  }

  changeAge(): void {
    this.age = 95;
  }

  resetValues() {
    //this.name = 'Ironman';
    this.age = 39;
    document.querySelectorAll('h1')!.forEach((element) => {
      element.innerHTML = '<h1>Angular 17</h1>';
    });
  }
}
