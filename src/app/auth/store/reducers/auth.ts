import * as auth from '../actions';
import { Authenticate, User } from '../../user.model';

export interface State {
  user: User | null;
  loggedIn: boolean;
  token: string | null;
}

export const initialState: State = {
  user: null,
  loggedIn: false,
  token: null
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.SIGNIN_SUCCESS:
    case auth.LOAD_LOCAL_AUTH_DATA: {
      return { ...state, user: action.payload.user, token: action.payload.token, loggedIn: true };
    }
    case auth.SIGNOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
export const getToken = (state: State) => state.token;
