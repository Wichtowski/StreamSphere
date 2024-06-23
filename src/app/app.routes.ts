import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleVideoComponent } from './single-video/single-video.component';

export const routes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'browse', component: HomepageComponent, canActivate: [AuthGuard] },
  {
    path: 'browse/movies',
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'browse/tv-shows',
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'browse/watch', component: SingleVideoComponent, canActivate: [AuthGuard] },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: 'browse', pathMatch: 'full' },
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload', // This ensures navigation within the same route triggers events
  scrollPositionRestoration: 'enabled', // This restores the scroll position on navigation
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
