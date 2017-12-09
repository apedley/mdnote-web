import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { User } from './users.model';

@Injectable()
export class AuthService {
  public token: string = null;
  public user: User;

  constructor(private httpClient: HttpClient, private router: Router) {

    const storedUser = localStorage.getItem('storedUser');

    if (storedUser) {
      const userInfo = JSON.parse(storedUser);
      this.token = userInfo.token;
      this.user = userInfo.user;
    }
  }

  signup(userData: { email: string, password: string}) {
    const url = `${environment.baseApiUrl}/signup`;
    return this.httpClient.post<User>(url, userData);
  }

  signin(userData: { email: string, password: string}) {
    const url = `${environment.baseApiUrl}/signin`;
    return this.httpClient.post<{ token: string, user: User }>(url, userData).pipe(
      map((body) => {
        if (body.token) {
          this.token = body.token;
          this.user = body.user;

          localStorage.setItem('storedUser', JSON.stringify({ user: this.user, token: this.token }));
          this.router.navigate(['/']);
        }
        return body;
      })
    );
  }

  signout() {
    localStorage.removeItem('storedUser');
    this.token = null;
    this.user = null;

    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    return this.token !== null;
  }
}
