import { Component } from '@angular/core';
import { CommonModule, NgSwitch } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-ad',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    NgSwitch,
  ],
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.scss'
})


export class AdComponent {
  subscriptionType: string = 'free' || 'premium';

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    const subscriptionType = this.sessionService.readSessionStorageValue('subscriptionType');
    if (subscriptionType) {
      this.subscriptionType = subscriptionType;
    }
  }
}
