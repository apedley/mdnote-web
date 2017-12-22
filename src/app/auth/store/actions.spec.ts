import * as fromAuth from './actions';

const userInfo = {
  email: 'test123@test.com',
  password: 'test123'
};
const error = {error: 'error'};

describe('Auth Actions', () => {
  describe('Sign Up Actions', () => {
    describe('Signup', () => {
      it('should create an action', () => {
        const action = new fromAuth.Signup(userInfo);
        expect({...action}).toEqual({
          type: fromAuth.SIGNUP,
          payload: userInfo
        });
      });
    });

    describe('SignupSuccess', () => {
      it('should create an action', () => {
        const action = new fromAuth.SignupSuccess();
        expect({...action}).toEqual({
          type: fromAuth.SIGNUP_SUCCESS
        });
      });
    });

    describe('SignupFailure', () => {
      it('should create an action', () => {
        const action = new fromAuth.SignupFailure(error);
        expect({...action}).toEqual({
          type: fromAuth.SIGNUP_FAILURE,
          payload: error
        });
      });
    });
  });

  describe('Sign In Actions', () => {
    describe('Signin', () => {
      it('should create an action', () => {
        const action = new fromAuth.Signin(userInfo);
        expect({...action}).toEqual({
          type: fromAuth.SIGNIN,
          payload: userInfo
        });
      });
    });
    describe('SigninSuccess', () => {
      it('should create an action', () => {
        const payload = { user: userInfo, token: 'abc'};
        const action = new fromAuth.SigninSuccess(payload);
        expect({...action}).toEqual({
          type: fromAuth.SIGNIN_SUCCESS,
          payload: { user: userInfo, token: 'abc'}
        });
      });
    });

    describe('SigninRedirect', () => {
      it('should create an action', () => {
        const action = new fromAuth.SigninRedirect();
        expect({...action}).toEqual({
          type: fromAuth.SIGNIN_REDIRECT
        });
      });
    });

    describe('SigninFailure', () => {
      it('should create an action', () => {
        const action = new fromAuth.SigninFailure(error);
        expect({...action}).toEqual({
          type: fromAuth.SIGNIN_FAILURE,
          payload: error
        });
      });
    });
  });

  describe('Signout', () => {
    it('should create an action', () => {
      const action = new fromAuth.Signout();
      expect({...action}).toEqual({
        type: fromAuth.SIGNOUT
      });
    });
  });

  describe('Local Auth Data Actions', () => {
    describe('ReadLocalAuthData', () => {
      it('should create an action', () => {
        const action = new fromAuth.ReadLocalAuthData();
        expect({...action}).toEqual({
          type: fromAuth.READ_LOCAL_AUTH_DATA
        });
      });
    });

    describe('LoadLocalAuthData', () => {
      it('should create an action', () => {
        const payload = { user: userInfo, token: 'abc'};
        const action = new fromAuth.LoadLocalAuthData(payload);
        expect({...action}).toEqual({
          type: fromAuth.LOAD_LOCAL_AUTH_DATA,
          payload: payload
        });
      });
    });
  });
});
