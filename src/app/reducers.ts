import * as fromAuth from './auth/store/reducers';
import * as fromLayout from './core/store/layout.reducers';
import * as fromRouter from '@ngrx/router-store';

import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    return { url, queryParams };
  }
}

export interface State {
  auth: fromAuth.State;
  layout: fromLayout.State;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  layout: fromLayout.reducer,
  routerReducer: fromRouter.routerReducer
};


export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getSidebarOpen = createSelector(getLayoutState, fromLayout.getSidebarOpen);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');

export const getUser = createSelector(getAuthState, fromAuth.getUser);
export const getLoggedIn = createSelector(getAuthState, fromAuth.getLoggedIn);
