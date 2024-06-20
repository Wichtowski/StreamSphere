import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setUserLocalStorage(data: Object): void {
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getFieldFromUserLocalStorage(field: string): string | null {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      return parsedUserData[field];
    }
    return null;
  }
}
