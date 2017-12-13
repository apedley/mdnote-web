import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromAuth from './store/reducers';
import * as fromRoot from '../reducers';
import * as auth from './store/actions';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { Authenticate, User } from './user.model';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthService {
  public token: string = null;
  public user: User;

  constructor(private httpClient: HttpClient, private router: Router, private authStore: Store<fromAuth.State>) {
    if (localStorage.getItem('authInfo')) {
      this.authStore.dispatch(new auth.ReadLocalAuthData());
    }

    // const storedUser = localStorage.getItem('storedUser');

    // if (storedUser) {
    //   const userInfo = JSON.parse(storedUser);
    //   this.token = userInfo.token;
    //   this.user = userInfo.user;
    // }
  }

  // signup(userData: { email: string, password: string}) {
  //   const url = `${environment.baseApiUrl}/signup`;
  //   return this.httpClient.post<User>(url, userData).pipe(
  //     map((body) => {
  //       this.router.navigate(['/signin']);
  //       return 'ok';
  //     })
  //   );
  // }

  signup(userData: Authenticate) {
    this.authStore.dispatch(new auth.Signup(userData));
  }

  signin(userData: Authenticate) {
    this.authStore.dispatch(new auth.Signin(userData));
  }

  // signin(userData: { email: string, password: string}) {
  //   const url = `${environment.baseApiUrl}/signin`;
  //   return this.httpClient.post<{ token: string, user: User }>(url, userData).pipe(
  //     map((body) => {
  //       if (body.token) {
  //         this.token = body.token;
  //         this.user = body.user;

  //         localStorage.setItem('storedUser', JSON.stringify({ user: this.user, token: this.token }));
  //         this.router.navigate(['/notes']);
  //         return 'ok';
  //       }
  //       throw new Error('Error processing login');
  //     })
  //   );
  // }

  signout() {
    // localStorage.removeItem('storedUser');
    // this.token = null;
    // this.user = null;

    // this.router.navigate(['/signin']);
    this.authStore.dispatch(new auth.Signout());
  }

  getError() {
    return this.authStore.select(fromRoot.getError);
  }

  getFormLoading() {
    return this.authStore.select(fromRoot.getFormLoading);
  }

  // isAuthenticated() {
  //   return this.authStore.select(fromRoot.getLoggedIn);
  // }
  isAuthenticated() {
    return this.token !== null;
  }

  getToken() {
    return this.authStore.select(fromRoot.getToken);
  }

  getAuthenticated() {
    return this.authStore.select(fromRoot.getLoggedIn);
  }
}
