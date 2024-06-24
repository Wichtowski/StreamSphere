import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, AfterViewInit, OnInit, Injectable } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import videos from '../assets/videos.json';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-wide-carousel',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './wide-carousel.component.html',
  styleUrls: ['./wide-carousel.component.scss'],
})
export class WideCarouselComponent implements OnInit, AfterViewInit {
  @Input() carouselId: string = '';
  @Input() genre: string = '';
  @Input() slidesPerView: number = 0;
  @Input() slidesPerViewMobile: number = 0;
  @Input() pagination: boolean = false;
  @Input() autoplay: boolean = false;
  @Input() dynamicBullets: boolean = false;
  @Input() navigation: boolean = false;
  @Input() scrollbar: boolean = false;
  @Input() spaceBetween: number = 0;
  @Input() centeredSlides: boolean = false;
  @Input() grabCursor: boolean = false;

  slides = videos;
  carouselLength = this.slides.length;

  constructor() {}
  ngOnInit(): void {
    register();
  }

  ngAfterViewInit(): void {
    this.genre.toLocaleLowerCase();
    const swiperEl: any = document.querySelector(`swiper-container[data-id="${this.carouselId}"]`);
    const swiperSlidesData = document.querySelectorAll(
      `swiper-container[data-id="${this.carouselId}"] > swiper-slide[data-info]`,
    );
    if (this.genre !== 'all') {
      swiperSlidesData.forEach((slide: any) => {
        if (!slide.dataset.info.includes(this.genre)) {
          slide.remove();
        }
      });
    }

    const swiperParams = {
      loop: true,
      lazy: true,
      slidesPerView: 1,
      Pagination: {
        el: `.swiper-pagination-${this.carouselId}`,
        clickable: true,
      },
      Navigation: {
        nextEl: `.swiper-button-next-${this.carouselId}`,
        prevEl: `.swiper-button-prev-${this.carouselId}`,
      },
      breakpoints: {
        989: {
          slidesPerView: this.slidesPerView,
        },
        685: {
          slidesPerView: this.slidesPerViewMobile,
        },
      },
      on: {
        init() {
          // ...
        },
      },
    };
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
}
