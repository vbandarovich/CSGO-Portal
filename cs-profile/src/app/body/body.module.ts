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
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'signin', pathMatch: 'full', component: SigninComponent },
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
    MdbRippleModule
  ],
  declarations: [BodyComponent, HomeComponent, NotFoundComponent, SigninComponent],
  exports: [BodyComponent]
})
export class BodyModule { }
