import { Component } from '@angular/core';
import { DarkModeService } from '../../_services/dark-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    public darkModeService: DarkModeService,
    private _router: Router
  ) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
