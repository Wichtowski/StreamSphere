import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const sessionState = sessionStorage.getItem('sessionState');
    if (sessionState == 'true') {
      return true;
    } else {
      this.router.navigate(['/signIn']);
      return false;
    }
  }
}
