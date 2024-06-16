import { Injectable } from '@angular/core';
import users from '../app/assets/users.json';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = users;

  constructor() {}

  logout(): void {
    sessionStorage.removeItem('sessionState');
  }

  authenticate(email: string, password: string): boolean | string {
    if (!email || !password) {
      return 'Email and password are required';
    }
    const user = this.users.find(user => user.email === email);
    if (!user) {
      return 'Email not found';
    }
    if (user.password !== password) {
      return 'Incorrect password';
    }
    sessionStorage.setItem('sessionState', 'true');
    return true;
  }
}
