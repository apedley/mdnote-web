import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import * as routerActions from './router-actions';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate = this.actions.ofType(routerActions.GO).pipe(
    map((action: routerActions.Go) => action.payload),
    tap(({ path, query: queryParams, extras}) => this.router.navigate(path, { queryParams, ...extras }))
  );

  @Effect({ dispatch: false })
  back = this.actions.ofType(routerActions.BACK).pipe(
    map((action) => {
      this.location.back();
    })
  );

  @Effect({ dispatch: false })
  forward = this.actions.ofType(routerActions.FORWARD).pipe(
    map((action) => {
      this.location.forward();
    })
  );

  constructor(
    private actions: Actions,
    private router: Router,
    private location: Location) { }
}
