import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {
  options: AnimationOptions = {
    path: 'assets/animation/not-found.json',
  };
  
  constructor(private titleService:Title) {
    this.titleService.setTitle("Page not found!");
   }

  ngOnInit() {
  }

}
