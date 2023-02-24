
import { IPokemon } from './api';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { PokedexService } from './pokedex.service';
import { Observable } from 'rxjs';

@Component({
selector: 'app-pokemon-list',
templateUrl: './pokemon-list.component.html',
styleUrls: ['./pokemon-list.component.scss'],
})

export class PokemonListComponent implements OnInit, OnDestroy
{
  pokemons$!: Observable<IPokemon[]>;
  error: string=" "
  location: string[] =["Gentofte", "Theis' kælder","Herlev ghetto","Cuongs \"Farm\"","Ishøj","Lyngby","Herning","\"Herning\"","Løgum Kloster","Teodor Uden H"]

  constructor(private pokedexService:PokedexService){
    this.pokemons$ = pokedexService.pokedex$;
  }

  ngOnInit(): void
  {

  }

  ngOnDestroy(): void
  {

  }
}


