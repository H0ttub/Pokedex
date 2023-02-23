import { error } from './../../../node_modules/ajv/lib/vocabularies/applicator/dependencies';
import { ErrorMessage } from './../../../node_modules/@angular/compiler-cli/ngcc/src/execution/cluster/api.d';

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
      let errorMessage = '';
      if(err.error instanceof ErrorEvent)
      {
        errorMessage = `an error occured: ${err.error.message}`;
      }
      else
      {
       errorMessage =`server returned code: ${err.status}, error message is ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(()=>errorMessage);
    }

}
