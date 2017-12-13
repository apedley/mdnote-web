import { ApiService } from '../../core/api.service';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as auth from './actions';

@Injectable()
export class AuthEffects {
  @Effect()
  signup = this.actions.ofType(auth.SIGNUP).pipe(
    switchMap((action: auth.Signup) => {
      return this.api.signUp(action.payload);
    }),
    map((result) => {
      this.router.navigate(['/signin']);
      return {
        type: auth.SIGNUP_SUCCESS
      };
    }),
    catchError(error => of(new auth.SignupFailure(error)))
  );

  @Effect()
  signin = this.actions.ofType(auth.SIGNIN).pipe(
    switchMap((action: auth.Signin) => {
      return this.api.signIn(action.payload);
    }),
    map((result) => {
      this.router.navigate(['/notes']);
      return {
        type: auth.SIGNIN_SUCCESS,
        payload: {
          user: result['user'],
          token: result['token']
        }
      };
    }),
    catchError(error => of(new auth.SigninFailure(error)))
  );

  @Effect({ dispatch: false })
  saveAuthInfo = this.actions.ofType(auth.SIGNIN_SUCCESS).pipe(
    map((action: auth.SigninSuccess) => {
      localStorage.setItem('authInfo', JSON.stringify(action.payload));
    })
  );

  @Effect()
  loadLocalAuthData = this.actions.ofType(auth.READ_LOCAL_AUTH_DATA).pipe(
    map((action: auth.LoadLocalAuthData) => {
      const info = localStorage.getItem('authInfo');
      if (!info) {
        return;
      }
      const payload = JSON.parse(info);
      return {
        type: auth.LOAD_LOCAL_AUTH_DATA,
        payload: payload
      };
    })
  );

  @Effect({ dispatch: false })
  signoutAuthInfo = this.actions.ofType(auth.SIGNOUT).pipe(
    map((action: auth.Signout) => {
      localStorage.removeItem('authInfo');
      this.router.navigate(['/signin']);
    })
  );
  constructor(private actions: Actions, private api: ApiService, private router: Router) {}
}
