import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { SidenavService } from './sidenav/sidenav.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DiscoveredPokemonComponent } from './discovered-pokemon/discovered-pokemon.component';
import { FetchdataService } from './pokemon-list/fetchdata.service';
import { PokedexService } from './pokemon-list/pokedex.service';
import { BattleComponent } from './battle/battle.component';
import { BattleFieldComponent } from './battle-field/battle-field.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    SidenavComponent,
    PokemonListComponent,
    DiscoveredPokemonComponent,
    BattleComponent,
    BattleFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  providers: [
    SidenavService,
    FetchdataService,
    PokedexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

