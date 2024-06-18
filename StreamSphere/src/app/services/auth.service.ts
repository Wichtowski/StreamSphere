import { Injectable } from '@angular/core';
import users from '../assets/users.json';
import { PasswordHashingService } from './password-hashing.service';
import { User } from '../utils/interface.user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = users;
  private userData: Object = {};
  public isLoggedIn: boolean = false;

  constructor(private passwordHashing: PasswordHashingService) { }

  logOut(): void {
    this.isLoggedIn = false;
    this.userData = {};
  }

  getLogState(): boolean {
    return this.isLoggedIn;
  }
  
  setUserData(data: User): void {
    delete data.password;
    this.userData = data;
  }

  getUserData(): Object {
    return this.userData;
  }

  getUserInfo(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  async authenticate(email: string, password: string): Promise<string | boolean>{
    if (!email || !password) {
      return 'Email and password are required';
    }
    const user = this.getUserInfo(email);
    if (!user) {
      return 'Email not found';
    }
    const userPassword = user.password;
    if (!userPassword) {
      return 'Password not found';
    }
    if (await this.passwordHashing.comparePassword(password, userPassword) === false) {
      return 'Incorrect password';
    }
    this.isLoggedIn = true;
    return true;
  }
}
