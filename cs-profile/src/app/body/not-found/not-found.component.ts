import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {
  options: AnimationOptions = {
    path: 'assets/animation/not-found.json',
  };
  
  constructor() { }

  ngOnInit() {
  }

}
