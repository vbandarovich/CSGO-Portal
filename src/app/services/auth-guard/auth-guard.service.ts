import { User } from '../../models/User';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public user: User | null;
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

  async signIn(email: string, password: string): Promise<boolean> {
    try {
      let model = {
        email: email,
        password: password
      }
      //let result = await this.http.post<User>('https://localhost:44348/api/login', model, { withCredentials: true }).toPromise();
      //this.user = result;
      //localStorage.setItem('user', JSON.stringify(this.user));
      this.isAuthorized = true;
      this.router.navigate(['/']);
      return false;
    } catch (error) {
      return true;
    }
  }

  public logout() {
    //localStorage.removeItem('user');
    this.isAuthorized = false;
    this.user = null;
    this.router.navigate(['/']);
  }
}
