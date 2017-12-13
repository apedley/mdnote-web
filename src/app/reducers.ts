import * as fromAuth from './auth/store/reducers';
import * as fromLayout from './core/store/layout.reducers';
import * as fromRouter from '@ngrx/router-store';

import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export class CustomRouterStateSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
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

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getSidebarOpen = createSelector(getLayoutState, fromLayout.getSidebarOpen);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');

export const getUser = createSelector(getAuthState, fromAuth.getUser);
export const getToken = createSelector(getAuthState, fromAuth.getToken);
export const getError = createSelector(getAuthState, fromAuth.getError);
export const getLoggedIn = createSelector(getAuthState, fromAuth.getLoggedIn);
export const getFormLoading = createSelector(getAuthState, fromAuth.getFormLoading);
