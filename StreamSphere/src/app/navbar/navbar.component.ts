import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Router, NavigationEnd, RouterLink  } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';

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

  constructor(private authService: AuthService, private router: Router, private sessionService: SessionService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }
  ngOnInit() {
    const logo = this.authService.getLogState();
    console.log(logo);
    this.logo = logo === true ? true : false;
  }

  logOut() {
    this.authService.logOut();
    this.sessionService.setSessionState(false);
    this.logo = false;
    this.router.navigate(['/']);
  }
  // <li class="nav-item">
    // <button class="nav-link log-out-button">Log Out</button>
  // </li>
}
