import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setUserLocalStorage(data: Object, fieldName: string): void {
    localStorage.setItem(`${fieldName}`, JSON.stringify(data));
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }

  getFieldFromUserLocalStorage(field: string, fieldName: string): string | null {
    const userData = localStorage.getItem(`${fieldName}`);
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      return parsedUserData[field];
    }
    return null;
  }
}
