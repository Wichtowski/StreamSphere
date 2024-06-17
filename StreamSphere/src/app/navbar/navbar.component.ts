import { Component } from '@angular/core';
import { SessionService } from '../session.service';
import { CommonModule, NgIf } from '@angular/common';
import { Router, NavigationEnd, RouterLink  } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    RouterLink,
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logo: boolean = false;
  currentUrl: string = '';

  constructor(private sessionService: SessionService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }
  ngOnInit() {
    const logo = this.sessionService.readSessionStorageValue('sessionState');
    this.logo = logo === 'true' ? true : false;
  }

  logOut() {
    sessionStorage.removeItem('sessionState');
    this.logo = false;
    this.router.navigate(['/']);
  }
  // <li class="nav-item">
    // <button class="nav-link log-out-button">Log Out</button>
  // </li>
}
