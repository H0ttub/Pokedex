import { Component } from '@angular/core';
import { PokedexService } from '../pokemon-list/pokedex.service';
import { IPokemon } from '../pokemon-list/api';
import { Observable } from 'rxjs';
import { FetchdataService } from '../pokemon-list/fetchdata.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {

  selectedPokemon:IPokemon | undefined;
  pokemons$!: Observable<IPokemon[]>;
  opponent$:Observable<IPokemon>;

  constructor(public readonly pokedexService:PokedexService, public readonly fetchData:FetchdataService) {
    this.pokemons$ = pokedexService.pokedex$;
    this.opponent$ = this.generateOpponent();
  }

  generateOpponent():Observable<IPokemon> {
    const Id = Math.ceil(Math.random() * 151);

    return this.fetchData.getPokemon(Id);
  }

  battleOver($event:{playerWon:boolean, opponent:IPokemon, pokemon:IPokemon}) {
    if ($event.playerWon) {
      this.pokedexService.addPokemon($event.opponent);
      this.opponent$ = this.generateOpponent();
    } else {
      this.pokedexService.removePokemon($event.pokemon);
      this.selectedPokemon = undefined;
    }
  }

}

