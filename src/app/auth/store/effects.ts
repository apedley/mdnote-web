import { ApiService } from '../../core/api.service';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as auth from './actions';
import * as routerActions from '../../store/router-actions';
import { Authenticate } from '../user.model';

@Injectable()
export class AuthEffects {
  @Effect()
  signup = this.actions.ofType(auth.SIGNUP).pipe(
    map((action: auth.Signup) => action.payload),
    exhaustMap((authData: Authenticate) => this.api.signUp(authData)
      .pipe(
        map(response => new auth.SignupSuccess(response)),
        catchError(error => of(new auth.SignupFailure(error.error)))
      )
    )
  );

  @Effect()
  signin = this.actions.ofType(auth.SIGNIN).pipe(
    map((action: auth.Signin) => action.payload),
    exhaustMap((authData: Authenticate) => this.api.signIn(authData)
      .pipe(
        map(response => new auth.SigninSuccess(response)),
        catchError(error => of(new auth.SigninFailure(error.error)))
      )
    )
  );

  @Effect()
  signinSuccess = this.actions.ofType(auth.SIGNIN_SUCCESS).pipe(
    map((action: auth.SigninSuccess) => new routerActions.Go({ path: ['/notes'] }) )
  );

  @Effect()
  signout = this.actions.ofType(auth.SIGNOUT).pipe(
    map((action: auth.Signout) => new routerActions.Go({ path: ['/signin'] }) )
  );

  // @Effect({ dispatch: false })
  // saveAuthInfo = this.actions.ofType(auth.SIGNIN_SUCCESS).pipe(
  //   map((action: auth.SigninSuccess) => {
  //     localStorage.setItem('authInfo', JSON.stringify(action.payload));
  //   })
  // );

  // @Effect()
  // loadLocalAuthData = this.actions.ofType(auth.READ_LOCAL_AUTH_DATA).pipe(
  //   map((action: auth.LoadLocalAuthData) => {
  //     const info = localStorage.getItem('authInfo');
  //     if (!info) {
  //       return;
  //     }
  //     const payload = JSON.parse(info);
  //     return {
  //       type: auth.LOAD_LOCAL_AUTH_DATA,
  //       payload: payload
  //     };
  //   })
  // );

  // @Effect({ dispatch: false })
  // signoutAuthInfo = this.actions.ofType(auth.SIGNOUT).pipe(
  //   map((action: auth.Signout) => {
  //     localStorage.removeItem('authInfo');
  //     this.router.navigate(['/signin']);
  //   })
  // );


  constructor(private actions: Actions, private api: ApiService, private router: Router) {}
}
