import { StartupMessage } from './../../../node_modules/piscina/src/common';
import { error } from './../../../node_modules/ajv/lib/vocabularies/applicator/dependencies';
import { Message } from './../../../node_modules/esbuild/lib/main.d';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError,Observable,tap,throwError } from 'rxjs';
import {IPokemon} from "./api";

@Injectable()
export class FetchdataService
{
    private url: string = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
    private header = new HttpHeaders();

    private _http;

    constructor(http: HttpClient)
    {
      this._http=http
    }

    getPokemons():Observable<IPokemon>
    {
      this.header.append('Content-Type', 'application/json');
      return this._http.get<IPokemon>(this.url,{headers:this.header}).pipe(
        tap(data => console.log(' all: ',JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
    private handleError (err: HttpErrorResponse)
    {
      let errorMessage= ' ';
      if(err.error.instanceof ErrorEvent)
      {
        errorMessage = `an error occured: ${err.error.message}`;
      }
      else
      {
        errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(()=>errorMessage);
    }

}
