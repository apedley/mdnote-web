import * as auth from '../actions';
import { Authenticate, User } from '../../user.model';

export interface State {
  formError: string;
  formLoading: boolean;
}

export const initialState: State = {
  formError: null,
  formLoading: false,
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.SIGNUP_SUCCESS:
    case auth.SIGNIN_SUCCESS:
    case auth.LOAD_LOCAL_AUTH_DATA: {
      return { ...state, formLoading: false, formError: null };
    }
    case auth.SIGNIN_FAILURE:
    case auth.SIGNUP_FAILURE: {
      return { ...state, formError: action.payload, formLoading: false };
    }
    case auth.SIGNUP:
    case auth.SIGNIN: {
      return { ...state, formLoading: true };
    }
    case auth.SIGNOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getFormLoading = (state: State) => state.formLoading;
export const getFormError = (state: State) => state.formError;
