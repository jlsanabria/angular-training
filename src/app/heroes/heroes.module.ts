import { NgModule } from '@angular/core';
import { HeroInfoComponent } from './components/hero-info/hero-info.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroInfoComponent, HeroListComponent],
  exports: [HeroInfoComponent, HeroListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
