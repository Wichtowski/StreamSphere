import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'browse', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'browse/movies', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'browse/tv-shows', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: 'browse', pathMatch: 'full', },
  { path: 'browse/watch' , component: HomepageComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
