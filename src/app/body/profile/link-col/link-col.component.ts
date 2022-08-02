import { AuthGuardService } from './../../../services/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-col',
  templateUrl: './link-col.component.html',
  styleUrls: ['./link-col.component.scss']
})
export class LinkColComponent implements OnInit {

  constructor(public authService: AuthGuardService) { }

  ngOnInit() {
  }

}
