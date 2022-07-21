import { AuthGuardService } from './../../services/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email = "";
  password = "";
  isEmptyError = false;
  isNotValidError = false;

  constructor(private titleService: Title, private authService: AuthGuardService) {
    this.titleService.setTitle("Sign in");
  }

  ngOnInit() {
  }

  async signIn() {
    this.isEmptyError = false;
    this.isNotValidError = false;

    if (this.email && this.password) {
      this.isNotValidError = await this.authService.signIn(this.email, this.password);
    }
    else {
      this.isEmptyError = true;
    }
  }
}
