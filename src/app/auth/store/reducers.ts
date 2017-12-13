import * as auth from './actions';
import { Authenticate, User } from '../user.model';

export interface State {
  user: User | null;
  loggedIn: boolean;
}

const initialState: State = {
  user: null,
  loggedIn: false
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.LOGIN_SUCCESS: {
      return { ...state, user: action.payload.user };
    }
    case auth.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}


export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
