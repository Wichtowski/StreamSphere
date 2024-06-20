import { Injectable } from '@angular/core';
import { User } from '../utils/interface.user';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  setSessionState(state: boolean): void {
    sessionStorage.setItem('sessionState', state.toString());
  }

  getSessionState(): boolean {
    return this.readSessionStorageValue('sessionState') === 'true';
  }

  readSessionStorageValue(key: string): string | null {
    return sessionStorage.getItem(key);
  }
}
