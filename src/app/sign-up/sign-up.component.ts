import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
})
export class SignUpComponent {
  signUpTitle: string = 'Sign Up';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  rememberMe: boolean = false;
  signUpError: boolean = false;
  errorMessage: string = '';

  constructor(
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

  signUp() {
    if (this.password !== this.confirmPassword) {
      this.signUpError = true;
      this.errorMessage = 'Passwords do not match';
      return;
    } else {
      this.signUpError = false;
      this.errorMessage = '';
    }
    if (this.email === '' || this.password === '') {
      this.signUpError = true;
      this.errorMessage = 'Email and password are required';
      return;
    }
    // add user logic or keep this as a placeholder
  }
}
