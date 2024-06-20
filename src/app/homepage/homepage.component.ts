import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AdComponent } from '../ad/ad.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    NavbarComponent,
    AdComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private router: Router) {}
  ngOnInit() {}
}
