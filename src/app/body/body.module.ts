import { FriendItemComponent } from './profile/link-col/friend-item/friend-item.component';
import { GroupItemComponent } from './profile/link-col/group-item/group-item.component';
import { ProfileStatComponent } from './profile/profile-stat/profile-stat.component';
import { CommentsComponent } from './profile/comments/comments.component';
import { LinkColComponent } from './profile/link-col/link-col.component';
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';
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
import { AuthGuardService } from '../services/auth-guard/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'signin', pathMatch: 'full', component: SigninComponent },
  { path: 'signup', pathMatch: 'full', component: SignupComponent },
  { path: 'profile', pathMatch: 'full', redirectTo: '' },
  { path: 'profile/:id', pathMatch: 'full', component: ProfileComponent, canActivate: [AuthGuardService] },
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
    MdbFormsModule,
    HttpClientModule
  ],
  declarations: [BodyComponent, HomeComponent, NotFoundComponent, SigninComponent, SignupComponent, 
    BestArtsComponent, ProfileComponent, ProfileHeaderComponent, LinkColComponent, CommentsComponent, ProfileStatComponent, 
    GroupItemComponent, FriendItemComponent],
  exports: [BodyComponent]
})
export class BodyModule { }
