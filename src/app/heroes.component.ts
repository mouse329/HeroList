import { Router } from '@angular/router';
import { Component, NgModule, OnInit } from '@angular/core';
import { Hero } from './hero';


import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  templateUrl:'/heroes.component.html',
  styleUrls: ['/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  title = 'Heroes Component';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router){}

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  };
  
  ngOnInit(): void {
    this.getHeroes();
  };

  gotoDetail(): void {
    this.router.navigate(['/detail',this.selectedHero.id]);
  }


}