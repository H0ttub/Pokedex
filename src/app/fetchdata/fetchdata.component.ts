
import { IPokemon } from './api';
import { Component, OnDestroy, OnInit } from "@angular/core";
import{ Subscription} from "rxjs"
import { FetchdataService } from './fetchdata.service';

@Component({
selector: 'fetchdata',
templateUrl: './fetchdata.component.html',
styleUrls: ['./fetchdata.component.scss'],
providers: [FetchdataService]
})

export class FetchdataComponent implements OnInit, OnDestroy
{
  pokemons!: IPokemon;
  error: string=" "
  sub: Subscription |undefined

  constructor(private fetchdataService:FetchdataService){}

  ngOnInit(): void
  {
      this.sub = this.fetchdataService.getPokemons().subscribe({
        next: x => this.pokemons = x,
        error: err => this.error =err
      }  );
  }

  ngOnDestroy(): void
  {
      this.sub?.unsubscribe();
  }
}


