import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,  
  imports: [
    NgIf,
    FormsModule,
    CommonModule,
    RouterLink
  ] 
})
export class SignInComponent {
  signInTitle: string = 'Sign In';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorFieldMessage: string = '';
  signInError: boolean = false;

  constructor(private authService: AuthService, private router: Router, private sessionService: SessionService) {}

  ngOnInit() {
    const sessionState = this.sessionService.readSessionStorageValue('sessionState');
    if (sessionState) {
      this.router.navigate(['/browse']);
    }
    const email = localStorage.getItem('email');
    if (email) {
      this.email = email;
      this.rememberMe = true;
    }
  }

  signIn() {
    const authResult = this.authService.authenticate(this.email, this.password);
    if (authResult === true) {
      this.signInError = false;
      this.errorFieldMessage = '';
      if (this.rememberMe) {
        localStorage.setItem('email', this.email);
      }
      if (this.rememberMe === false) {
        localStorage.removeItem('email');
      }
      this.router.navigate(['/browse']);
    } else {
      this.signInError = true;
      this.errorFieldMessage = authResult.toString();
      
    }
  }
}
