import * as fromAuth from './auth';
import * as auth from '../actions';


describe('AuthReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromAuth;
      const action = {} as any;
      const state = fromAuth.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });

  describe('SIGNOUT action', () => {
    it('should return default state', () => {
      const { initialState } = fromAuth;
      const action = new auth.Signout();
      const state = fromAuth.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });

  // describe('SIGNIN_SUCCESS and LOAD_LOCAL_AUTH_DATA action', () => {

  //   const user = { email: 'abc@abc.com', id: 1 };
  //   const token = 'abc123';

  //   it('SIGNIN_SUCCESS should set user, token, formLoading, and loggedIn', () => {
  //     const { initialState } = fromAuth;
  //     const action = new auth.SigninSuccess({ user, token });
  //     const state = fromAuth.reducer(initialState, action);

  //     expect(state.user.email).toEqual(user.email);
  //     expect(state.token).toEqual(token);
  //     expect(state.loggedIn).toBeTruthy();
  //     expect(state.formLoading).toBeFalsy();
  //   });

  //   it('LOAD_LOCAL_AUTH_DATA should set user, token, formLoading, and loggedIn', () => {
  //     const { initialState } = fromAuth;
  //     const action = new auth.LoadLocalAuthData({ user, token });
  //     const state = fromAuth.reducer(initialState, action);

  //     expect(state.user.email).toEqual(user.email);
  //     expect(state.token).toEqual(token);
  //     expect(state.loggedIn).toBeTruthy();
  //     expect(state.formLoading).toBeFalsy();
  //   });
  // });

  // describe('SIGNUP_FAILURE action', () => {
  //   it('Should set error and set formLoading to false', () => {
  //     const { initialState } = fromAuth;
  //     const errorMessage = 'An error';
  //     const action = new auth.SignupFailure(errorMessage);
  //     const state = fromAuth.reducer(initialState, action);

  //     expect(state.formLoading).toBeFalsy();
  //     expect(state.error).toEqual(errorMessage);
  //   });
  // });

  // describe('SIGNUP and SIGNIN actions', () => {
  //   const userInfo = { email: 'abc@abc.com', password: 'abc123' };

  //   it('SIGNUP should set formLoading to true', () => {
  //     const { initialState } = fromAuth;
  //     const action = new auth.Signup(userInfo);
  //     const state = fromAuth.reducer(initialState, action);

  //     expect(state.formLoading).toBeTruthy();
  //   });

  //   it('SIGNIN should set formLoading to true', () => {
  //     const { initialState } = fromAuth;
  //     const action = new auth.Signin(userInfo);
  //     const state = fromAuth.reducer(initialState, action);

  //     expect(state.formLoading).toBeTruthy();
  //   });
  // });

  // describe('SIGNUP_SUCCESS action', () => {
  //   it('should set formLoading to false', () => {
  //     const { initialState } = fromAuth;
  //     const action = new auth.SignupSuccess();
  //     const state = fromAuth.reducer(initialState, action);

  //     expect(state.formLoading).toBeFalsy();
  //   });
  // });
});


