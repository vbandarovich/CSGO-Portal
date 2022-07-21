import { Component, OnInit } from '@angular/core';
import { ARTS } from '../../models/BestArtsPaths';

@Component({
  selector: 'app-best-arts',
  templateUrl: './best-arts.component.html',
  styleUrls: ['./best-arts.component.scss']
})
export class BestArtsComponent implements OnInit {
  sum = 18;
  imagesSrc = ARTS.slice(0, this.sum);
  throttle = 300;
  scrollDistance = 1;

  constructor() {
  }

  ngOnInit() {
  }

  onScrollDown() {
    const start = this.sum;
    this.sum += 12;
    this.addItems(start, this.sum);
  }

  addItems(startIndex: number, endIndex: number) { 
    this.imagesSrc.push(...ARTS.slice(startIndex, endIndex));
  }
}
