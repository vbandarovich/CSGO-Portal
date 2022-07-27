import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { BestArtsComponent } from './best-arts/best-arts.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'signin', pathMatch: 'full', component: SigninComponent },
  { path: 'signup', pathMatch: 'full', component: SignupComponent },
  { path: 'profile', pathMatch: 'full', redirectTo: '' },
  { path: 'profile/:id', pathMatch: 'full', component: ProfileComponent },
  { path: 'best-arts', pathMatch: 'full', component: BestArtsComponent },
  { path: '**', component: NotFoundComponent }
]

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule,
    MdbCheckboxModule,
    MdbRippleModule,
    InfiniteScrollModule,
    MdbFormsModule
  ],
  declarations: [BodyComponent, HomeComponent, NotFoundComponent, SigninComponent, SignupComponent, BestArtsComponent, ProfileComponent],
  exports: [BodyComponent]
})
export class BodyModule { }
