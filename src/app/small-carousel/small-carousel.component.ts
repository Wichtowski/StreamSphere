import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import videos from '../assets/videos.json';

interface Slide {
  poster: string;
  title: string;
}

@Component({
  selector: 'app-small-carousel',
  standalone: true,
  imports: [CommonModule, NgIf, RouterLink],
  templateUrl: './small-carousel.component.html',
  styleUrls: ['./small-carousel.component.scss'],
})
export class SmallCarouselComponent {
  @Input() carouselId: string = '';
  slides: Slide[] = videos.slice(0, 7);
  pages: { slides: Slide[] }[] = [];
  currentPageIndex: number = 0;
  slidesPerPage: number = 3;

  ngOnInit() {
    this.generatePages();
  }

  generatePages() {
    this.pages = [];
    for (let i = 0; i < this.slides.length; i += this.slidesPerPage) {
      const pageSlides = this.slides.slice(i, i + this.slidesPerPage);
      this.pages.push({ slides: pageSlides });
    }
  }

  next() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
    }
    this.updateTransform();
  }

  prev() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
    this.updateTransform();
  }

  goToPage(index: number) {
    this.currentPageIndex = index;
    this.updateTransform();
  }

  updateTransform() {
    const math = 100 / this.pages.length;
    const carouselInner = document.querySelector(`.small-carousel-inner[data-id="${this.carouselId}"]`) as HTMLElement;
    if (carouselInner) {
      carouselInner.style.transform = `translateX(-${this.currentPageIndex * math}%)`;
    }
  }
}
