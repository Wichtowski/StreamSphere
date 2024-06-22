import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { User } from '../utils/interface.user';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule, RouterLink],
})
export class SignInComponent {
  signInTitle: string = 'Sign In';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorFieldMessage: string = '';
  signInError: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService,
  ) {}

  ngOnInit() {
    const logState = this.sessionService.getSessionState();
    if (logState) {
      this.router.navigate(['/browse']);
    }
    const email = localStorage.getItem('email');
    if (email) {
      this.email = email;
      this.rememberMe = true;
    }
  }

  async signIn() {
    const authResult = await this.authService.authenticate(this.email, this.password);
    if (authResult === true) {
      this.signInError = false;
      this.errorFieldMessage = '';
      if (this.rememberMe) {
        localStorage.setItem('email', this.email);
      }
      if (this.rememberMe === false) {
        localStorage.removeItem('email');
      }
      this.authService.isLoggedIn = true;
      const data: User | undefined = this.authService.getUserInfo(this.email);
      if (data === undefined) {
        return;
      }
      this.authService.setUserData(data);
      const logState = this.authService.getLogState();
      this.sessionService.setSessionState(logState);
      this.router.navigate(['/browse']);
    } else {
      this.signInError = true;
      this.errorFieldMessage = authResult.toString();
    }
  }
}
