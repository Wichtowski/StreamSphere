import { Component } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { AdComponent } from '../ad/ad.component';
import { SingleVideoComponent } from '../single-video/single-video.component';
import { FooterComponent } from '../footer/footer.component';
import { SmallCarouselComponent } from '../small-carousel/small-carousel.component';
import { WideCarouselComponent } from '../wide-carousel/wide-carousel.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgIf,
    NgClass,
    NgFor,
    NavbarComponent,
    CarouselComponent,
    AdComponent,
    SingleVideoComponent,
    FooterComponent,
    SmallCarouselComponent,
    WideCarouselComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private router: Router) {}
  ngOnInit() {}
}
