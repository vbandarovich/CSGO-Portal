import { AuthGuardService } from '../services/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userId = "";

  constructor(public authService: AuthGuardService) { 
  }

  ngOnInit() {
    if (this.authService.isAuthorized) {
      this.userId = this.authService.user?.id!;
    }
  }
}
