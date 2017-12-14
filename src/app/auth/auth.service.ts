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

  }


  signup(userData: Authenticate) {
    this.authStore.dispatch(new auth.Signup(userData));
  }

  signin(userData: Authenticate) {
    this.authStore.dispatch(new auth.Signin(userData));
  }


  signout() {
    this.authStore.dispatch(new auth.Signout());
  }

  getError() {
    return this.authStore.select(fromRoot.getError);
  }

  getFormLoading() {
    return this.authStore.select(fromRoot.getFormLoading);
  }

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
