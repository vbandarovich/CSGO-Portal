import { News } from './../../models/News';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sum = 0;
  news = [1,2,3,4,5,6];
  throttle = 300;
  scrollDistance = 1;

  constructor(private titleService: Title) {
    this.titleService.setTitle("CS:GO Platform");
  }

  ngOnInit() {
  }

  onScrollDown() {
    const start = this.sum;
    this.sum += 12;
    this.addItems(start, this.sum);
  }

  addItems(startIndex: number, endIndex: number) { 
    //this.news.push(...this.news.slice(startIndex, endIndex));
    this.news.push(...Array(endIndex - startIndex + 1).fill(Number).map((_, idx) => startIndex + idx +  1));
  }
}
