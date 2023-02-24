import { Component } from '@angular/core';
import { PokedexService } from '../pokemon-list/pokedex.service';
import { IPokemon } from '../pokemon-list/api';
import { Observable } from 'rxjs';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {

  pokemon:IPokemon | undefined;
  pokemons$!: Observable<IPokemon[]>;

  constructor(public readonly pokedexService:PokedexService) {
    this.pokemons$ = pokedexService.pokedex$;
  }

}
