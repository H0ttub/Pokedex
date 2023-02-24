import { Injectable } from '@angular/core';
import {IPokemon} from "../pokemon-list/api"
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PokedexService {
    pokedex: IPokemon[] = [];
    pokedex$: Observable<IPokemon[]>;
    subject = new BehaviorSubject<IPokemon[]>(this.pokedex);

    constructor() {
        this.pokedex$ = this.subject.asObservable();
        const localPokedex = window.localStorage.getItem('pokedex');
        if (localPokedex) {
            this.pokedex = JSON.parse(localPokedex);
            this.subject.next(this.pokedex);
        }
    }

    addPokemon(pokemon:IPokemon) {
        if (this.pokedex.find((p) => p.id === pokemon.id) === undefined) { //Hvis pokemonen allerede er i pokedex giver .find() index-værdien for den ellers giver den undefined.
            this.pokedex.push(pokemon);
            this.subject.next(this.pokedex);
            window.localStorage.setItem('pokedex', JSON.stringify(this.pokedex));
        }
    }
}
