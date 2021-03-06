
import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';




@Injectable()
export class HeroService{
    private headers = new Headers({'Content-Type':'application/json'});
    private heroesUrl = 'http://godnodejs.hopto.org:3000/api/users'; //URL to web api

    constructor (private http: Http) { }

    update(hero: Hero): Promise<Hero>{
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError)
    }

    getHeroes(): Promise<Hero[]> {
        return this.http
                    .get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().Users as Hero[])
                    .catch(this.handleError)
    }



    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve =>{
            setTimeout(() => resolve(this.getHeroes()),2000);
        })
    }

    getHero(id: number): Promise<Hero>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json().Users[0] as Hero)
                   .catch(this.handleError);
    }

    create(name:string):Promise<Hero>{
        return this.http
            .post(this.heroesUrl, JSON.stringify({email:name,password:1234}), {headers: this.headers})
            .toPromise()
            .then(response => response.json().Users)
            .catch(this.handleError);
    }

    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); //for demo purposes only
        return Promise.reject(error.message || error);
    }
}