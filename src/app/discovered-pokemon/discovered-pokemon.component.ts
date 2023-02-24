import { Component , Input , Output , EventEmitter} from '@angular/core';
import {IPokemon} from "../pokemon-list/api"
import { PokedexService } from '../pokemon-list/pokedex.service';

@Component({
  selector: 'app-discovered-pokemon',
  templateUrl: './discovered-pokemon.component.html',
  styleUrls: ['./discovered-pokemon.component.scss']
})
export class DiscoveredPokemonComponent {
  @Input() pokemon:IPokemon | undefined | null;
  @Output() caught = new EventEmitter<boolean>();

  constructor(private readonly pokedexService:PokedexService) {

  }

  catch(pokemon:IPokemon | undefined | null) {
    if (pokemon) {
      pokemon.location = Math.floor(Math.random() * 12)
      const caught = Math.random() <= 2/3;
      if (caught) {
        this.pokedexService.addPokemon(pokemon)
      }
      this.caught.emit(caught);
    }
  }
}

