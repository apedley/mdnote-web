import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import * as fromAuth from './auth';
import * as fromAuthForm from './auth-form';

export interface AuthState {
  status: fromAuth.State;
  authForm: fromAuthForm.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  status: fromAuth.reducer,
  authForm: fromAuthForm.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);

export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

export const getToken = createSelector(selectAuthStatusState, fromAuth.getToken);

export const selectAuthFormState = createSelector(
  selectAuthState,
  (state: AuthState) => state.authForm
);

export const getAuthFormError = createSelector(
  selectAuthFormState,
  fromAuthForm.getFormError
);

export const getAuthFormLoading = createSelector(
  selectAuthFormState,
  fromAuthForm.getFormLoading
);

