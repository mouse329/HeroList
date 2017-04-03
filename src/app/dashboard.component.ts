import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';


@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls:  ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroservice: HeroService){}

    ngOnInit(): void{
        this.heroservice.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
}