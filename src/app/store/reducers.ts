import * as fromLayout from '../core/store/layout.reducers';
import * as fromRouter from '@ngrx/router-store';
import * as fromLocalMeta from './local-storage.metareducer';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment'; // Angular CLI environment

import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, ActionReducer } from '@ngrx/store';
import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return fromLocalMeta.localStorageSync({keys: ['auth', 'notes'], rehydrate: true})(reducer);
}

// const freezeReducers = !environment.production ? [storeFreeze] : [];
// export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer, ...freezeReducers];
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

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
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router');


// export const getUrl = createSelector(
//   getRouterState,
//   state => state.state.url
// );

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getSidebarOpen = createSelector(getLayoutState, fromLayout.getSidebarOpen);

