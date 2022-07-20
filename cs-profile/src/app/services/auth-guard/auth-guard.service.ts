import { User } from '../../models/User';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public user: User;
  public isAuthorized = false;
  public isConfirmEmailSend = false;
  private avatar: string = '';

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (this.user) {
      this.isAuthorized = true;     
    }
  }

  canActivate(): boolean {
    if (!this.isAuthorized) {
      this.router.navigate(['signin']);
      return false;
    }
    return true;
  }
}
