import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  readSessionStorageValue(key: string): string | null {
    return sessionStorage.getItem(key);
  }
}
