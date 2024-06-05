import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'StreamSphere';
  sessionState: boolean = false;

  ngOnInit() {
    const sessionState = this.readLocalStorageValue('sessionState');
    this.sessionState = sessionState === 'true' ? true : false;
  }
  readLocalStorageValue(key: string): string | null {
    return localStorage.getItem(key);
  }
}