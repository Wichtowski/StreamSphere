import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
<<<<<<< HEAD:StreamSphere/src/app/homepage/homepage.component.ts
import { CarouselComponent } from '../carousel/carousel.component';
=======
import { AdComponent } from '../ad/ad.component';
import { SingleVideoComponent } from '../single-video/single-video.component';
>>>>>>> main:src/app/homepage/homepage.component.ts

@Component({
  selector: 'app-homepage',
  standalone: true,
<<<<<<< HEAD:StreamSphere/src/app/homepage/homepage.component.ts
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    CarouselComponent
  ],
=======
  imports: [CommonModule, RouterLink, NavbarComponent, AdComponent, SingleVideoComponent],
>>>>>>> main:src/app/homepage/homepage.component.ts
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private router: Router) {}
  ngOnInit() {}
}
