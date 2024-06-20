import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Router, NavigationEnd, RouterLink  } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    RouterLink,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit  {
  slides = [
    'one-piece.png',
    'sponge.png',
    'adventure-time.png'
  ];
  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    //Nie wiem czy to chcemy
    //this.startAutoSlide();
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    //Nie wiem czy to chcemy
    //this.stopAutoSlide();
    //this.startAutoSlide();
  }

  //Nie wiem czy to chcemy
  /*

  startAutoSlide() {
    this.slideInterval = setInterval(() => this.next(), 3000);
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
  */
}
