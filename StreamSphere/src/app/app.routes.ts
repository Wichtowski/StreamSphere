import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'signIn', component: SignInComponent },
  { path: 'homepage', component: AppComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/signIn'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
