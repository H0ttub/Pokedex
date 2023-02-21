import { Component } from '@angular/core';
import { SidenavService } from './sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pokedex';

  constructor(private readonly sidenavService:SidenavService) {
    
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
