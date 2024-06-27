import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import * as CryptoJS from 'crypto-js';
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
    private http: HttpClient,
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

  purchasePlan(price: number, plan: string) {
    const sessionId = this.generateRandomString(10);
    let signparams =
      '{"sessionId":"' +
      sessionId +
      '","merchantId":249264,"amount":' +
      price +
      ',"currency":"PLN","crc":"9e354e0bbafa14bd"}';
    let sign = this.computeSHA384(signparams);
    let data = {
      merchantId: 249264,
      posId: 249264,
      sessionId: sessionId,
      amount: price,
      currency: 'PLN',
      description: 'StreamSphere ' + plan,
      email: 'test@tester.pl',
      country: 'PL',
      urlReturn: 'https://wichtowski.github.io/StreamSphere',
      sign: sign,
    };
    console.log(data);
    this.http
      .post('https://sandbox.przelewy24.pl/api/v1/transaction/register', data, {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Basic MjQ5MjY0OjIxYjg5YjQ5MDRkZDU1ZjZhYjgzYWNkMWZlZDg0ZDY5',
        },
      })
      .subscribe((response: any) => {
        console.log(response);
        let token = response.data.token;
        window.location.href = 'https://sandbox.przelewy24.pl/trnRequest/' + token;
      });
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  computeSHA384(input: string): string {
    return CryptoJS.SHA384(input).toString(CryptoJS.enc.Hex);
  }
}
