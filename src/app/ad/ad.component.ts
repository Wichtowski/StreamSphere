import { Component } from '@angular/core';
import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-ad',
  standalone: true,
  imports: [CommonModule, RouterLink, NgSwitch, NgIf],
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.scss',
})
export class AdComponent {
  subscriptionType: string = '';
  randAd: number = 0; 
  // Math.floor(Math.random() * 3);

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    const subscriptionType = this.localStorageService.getFieldFromUserLocalStorage('subscriptionType');
    if (subscriptionType) {
      this.subscriptionType = subscriptionType;
      console.log(this.randAd);
      console.log(this.subscriptionType);
    }
  }
}
