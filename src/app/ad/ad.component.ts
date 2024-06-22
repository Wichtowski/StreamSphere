import { Component, OnInit } from '@angular/core';
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
export class AdComponent implements OnInit {
  paragraf: string = 'Get 50% off on your purchase for limited time!';
  subscriptionType: string = '';
  randAdNum: number = 0;
  altText: string = `Advertisement image for Users`;
  countdownText: string = '';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    const subscriptionType = this.localStorageService.getFieldFromUserLocalStorage('subscriptionType', 'userData');
    if (subscriptionType) {
      this.subscriptionType = subscriptionType;
      this.altText = `Advertisement Image for ${this.subscriptionType} Users`;
    }
    const viewAD = this.localStorageService.getFieldFromUserLocalStorage('ad', 'ad');

    if (viewAD === null) {
      if (this.subscriptionType === 'regular') {
        this.randAdNum = Math.floor(Math.random() * 2);
      } else if (this.subscriptionType === 'free') {
        this.randAdNum = Math.floor(Math.random() * 3);
      }
    } else {
      const ad = parseInt(viewAD);

      if (this.subscriptionType === 'regular' && (ad === 0 || ad === 1)) {
        this.randAdNum = ad;
      } else if (this.subscriptionType === 'free' && ad >= 0 && ad <= 2) {
        this.randAdNum = ad;
      } else {
        if (this.subscriptionType === 'regular') {
          this.randAdNum = Math.floor(Math.random() * 2);
        } else if (this.subscriptionType === 'free') {
          this.randAdNum = Math.floor(Math.random() * 3);
        }
      }
    }

    const saleEndTime = new Date('07-20-2024');

    setInterval(() => {
      const currentTime = new Date();
      const timeDifference = saleEndTime.getTime() - currentTime.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        this.countdownText = `${days}d ${hours}h ${minutes}min ${seconds}s`;
      } else {
        this.countdownText = 'Sale ended';
      }
    }, 1000);
  }
}
