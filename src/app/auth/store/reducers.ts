import * as auth from './actions';
import { Authenticate, User } from '../user.model';

export interface State {
  user: User | null;
  loggedIn: boolean;
  error: any;
  formLoading: boolean;
  token: string | null;
}

const initialState: State = {
  user: null,
  loggedIn: false,
  error: null,
  formLoading: false,
  token: null
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.SIGNIN_SUCCESS:
    case auth.LOAD_LOCAL_AUTH_DATA: {
      return { ...state, user: action.payload.user, token: action.payload.token, formLoading: false, loggedIn: true };
    }
    case auth.SIGNOUT: {
      return initialState;
    }
    case auth.SIGNUP_FAILURE: {
      return { ...state, error: action.payload, formLoading: false };
    }
    case auth.SIGNUP:
    case auth.SIGNIN: {
      return { ...state, formLoading: true };
    }
    case auth.SIGNUP_SUCCESS: {
      return { ...state, formLoading: false };
    }
    default: {
      return state;
    }
  }
}


export const getLoggedIn = (state: State) => state.loggedIn;
export const getFormLoading = (state: State) => state.formLoading;
export const getError = (state: State) => state.error;
export const getUser = (state: State) => state.user;
export const getToken = (state: State) => state.token;
