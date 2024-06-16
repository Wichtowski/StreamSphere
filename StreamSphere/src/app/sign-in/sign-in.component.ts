import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,  
  imports: [NgIf, FormsModule, CommonModule] 
})
export class SignInComponent {
  signInTitle: string = 'Sign In';
  email: string = '';
  password: string = '';
  errorFieldMessage: string = '';
  signInError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    
  }

  signIn() {
    const authResult = this.authService.authenticate(this.email, this.password);
    console.log(authResult);
    if (authResult === true) {
      this.signInError = false;
      this.errorFieldMessage = '';
      this.router.navigate(['/']);
    } else {
      this.signInError = true;
      this.errorFieldMessage = authResult.toString();
      
    }
  }
}
