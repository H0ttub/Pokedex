import { Component , ViewChild , AfterViewInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!:MatSidenav;

  constructor(private readonly sidenavService:SidenavService) {
    
  }

  ngAfterViewInit(): void {
      this.sidenavService.setSidenav(this.sidenav);
  }
}
