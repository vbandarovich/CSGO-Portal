import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
]

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [BodyComponent, HomeComponent, NotFoundComponent],
  exports: [BodyComponent]
})
export class BodyModule { }
