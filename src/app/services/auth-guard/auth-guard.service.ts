import { environment } from './../../../environments/environment.prod';
import { User } from '../../models/User';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public user: User | null;
  public isAuthorized = false;
  public isConfirmEmailSend = false;
  private avatar: string = '';

  constructor(private router: Router, private http: HttpClient) {
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
      //this.user = await this.http.post<User>(`${environment.apiUrl}/users`, model, { withCredentials: true }).toPromise() ?? null;     
      this.user = await this.http.get<User>(`${environment.apiUrl}/user`).toPromise() ?? null;     
      localStorage.setItem('user', JSON.stringify(this.user));
      this.isAuthorized = true;
      this.router.navigate(['/']);
      return false;
    } catch (error) {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('user');
    this.isAuthorized = false;
    this.user = null;
    this.router.navigate(['/']);
  }
}
