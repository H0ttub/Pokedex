import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../pokemon-list/api';
import { FetchdataService } from '../pokemon-list/fetchdata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent {
  
  @Input() pokemon:IPokemon | undefined;
  @Input() opponent:IPokemon | null | undefined;
  @Output() battleOver = new EventEmitter<{playerWon:boolean, opponent:IPokemon, pokemon:IPokemon}>();

  fighting:boolean = false;
  played:boolean = false;
  playerWin:boolean = true;
  healthOpponent:number = 100;
  healthPokemon:number = 100;

  async fight(pokemon:IPokemon, opponent:IPokemon) {
    //Logistics
    this.fighting = true;
    
    //Constants
    const opponentAtk = opponent.stats[1].base_stat;
    const pokemonAtk = pokemon.stats[1].base_stat;
    const opponentDef = opponent.stats[2].base_stat;
    const pokemonDef = pokemon.stats[2].base_stat;
    const opponentHp = opponent.stats[0].base_stat;
    const pokemonHp = pokemon.stats[0].base_stat;
    
    //Variables
    let opponentCurrentHp = opponent.stats[0].base_stat;
    let pokemonCurrentHp = pokemon.stats[0].base_stat;

    while (opponentCurrentHp > 0 && pokemonCurrentHp > 0) {
      //Attack Round
      opponentCurrentHp -= pokemonAtk / opponentDef;
      pokemonCurrentHp -= opponentAtk / pokemonDef;

      this.healthOpponent = opponentCurrentHp * (100 / opponentHp)
      this.healthPokemon = pokemonCurrentHp * (100 / pokemonHp)

      //Wait
      await new Promise(f => setTimeout(f, 500)); //Waits 1000 milliseconds
      console.log("waited")
    }

    this.playerWin = (opponentCurrentHp < 0 && pokemonCurrentHp < 0) ? //Ternary operator (if else statement)
        ((opponent.stats[5].base_stat > pokemon.stats[5].base_stat) ? false : true) :
        (opponentCurrentHp < 0) ? true : false;

    //Reseting health bars
    this.healthOpponent = 100;
    this.healthPokemon = 100;

    //Logistics
    this.played = true;
    this.fighting = false;

    //Communication
    const playerWon = this.playerWin;

    this.battleOver.emit({playerWon, opponent, pokemon});

  }

}

