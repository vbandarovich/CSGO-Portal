import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email = "";
  password = "";
  phoneNumber = "";
  isEmptyError = false;
  isNotValidError = false;

  constructor(private titleService: Title, private authService: AuthGuardService) { 
    this.titleService.setTitle("Sign up");
  }

  ngOnInit() {
  }

  async signUp() {
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
