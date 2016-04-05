import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Injectable} from 'angular2/core';

@Injectable() //don't forget parens
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
        //return HEROES;
    }

    getHero(id: number | string): Promise<Hero> {

        //return Promise.resolve(new Hero());

        return this.getHeroes().then(heroes => heroes.filter(h => h.id === +id)[0]);
    }
}