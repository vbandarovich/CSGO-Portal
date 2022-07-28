import { AuthGuardService } from '../services/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public authService: AuthGuardService) { 
  }

  ngOnInit() {
  }
}
