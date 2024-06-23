import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  fragment: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.fragment = fragment;
        this.viewportScroller.scrollToAnchor(fragment);
        let element: string | null = null;
        switch (fragment) {
          case 'premium':
            element = this.el.nativeElement.querySelector('#premium');
            this.el.nativeElement.querySelector('#premium-price').style.textDecoration = 'line-through';
            this.el.nativeElement.querySelector('#new-premium-price').style.display = 'inline-block';
            this.renderer.addClass(element, 'highlight');
            setTimeout(() => {
              this.renderer.removeClass(element, 'highlight');
              this.renderer.addClass(element, 'colorStay');
            }, 1500);
            break;
          case 'regular':
            element = this.el.nativeElement.querySelector('#regular');
            this.el.nativeElement.querySelector('#regular-price').style.textDecoration = 'line-through';
            this.el.nativeElement.querySelector('#new-regular-price').style.display = 'inline-block';
            this.renderer.addClass(element, 'highlight');
            setTimeout(() => {
              this.renderer.removeClass(element, 'highlight');
              this.renderer.addClass(element, 'colorStay');
            }, 1500);
            break;
        }
      }
    });
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
