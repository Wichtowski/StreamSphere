import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import videos from '../assets/videos.json';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgIf, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  slides = videos.slice(0, 7);

  currentSlide: number = 0;
  slideInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.startAutoSlide();
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateTransform();
  }

  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateTransform();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateTransform();
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => this.next(), 60000);
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  updateTransform() {
    var math = 0;
    document.querySelectorAll('.carousel-item').forEach((element) => {
      math += 1;
    });
    math = 100 / math;
    const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
    carouselInner.style.transform = `translateX(-${this.currentSlide * math}%)`;
  }
}
