import { Component, OnInit } from '@angular/core';
import { ARTS } from '../../models/BestArtsPaths';

@Component({
  selector: 'app-best-arts',
  templateUrl: './best-arts.component.html',
  styleUrls: ['./best-arts.component.scss']
})
export class BestArtsComponent implements OnInit {
  imagesSrc = ARTS;

  constructor() {
  }

  ngOnInit() {
  }

}
