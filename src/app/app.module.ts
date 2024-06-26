import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleVideoComponent } from './single-video/single-video.component';
import { AdComponent } from './ad/ad.component';
import { SmallCarouselComponent } from './small-carousel/small-carousel.component';
import { WideCarouselComponent } from './wide-carousel/wide-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    CarouselComponent,
    LandingPageComponent,
    HomepageComponent,
    SingleVideoComponent,
    AdComponent,
    SmallCarouselComponent,
    WideCarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterLink,
    NgSwitch,
    NgIf,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
