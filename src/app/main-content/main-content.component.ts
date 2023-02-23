import { Component } from '@angular/core';
import { IPokemon } from '../pokemon-list/api';
import { FetchdataService } from '../pokemon-list/fetchdata.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  caught:boolean = false;
  first:boolean = true;
  pokemon$: Observable<IPokemon> | undefined;

  constructor(private readonly fetchdata:FetchdataService) {

  }
  
  discover() {
    const id = Math.ceil(Math.random() * 151);

    this.pokemon$ = this.fetchdata.getPokemon(id);
  }

  catchResult(caught:boolean) {
    this.caught = caught;
    this.pokemon$ = undefined;
    this.first = false;
  }
}

