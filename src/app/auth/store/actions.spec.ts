import * as Auth from './actions';
import { testEmptyAction, testPayloadAction } from '../../../../testing/action-helpers';

const userInfo = {
  email: 'test123@test.com',
  password: 'test123'
};

const user = {
  email: 'abc@gmail.com',
  tokens: [],
  created_at: '12-25',
  updated_at: '12-25'
};

const error = {error: 'error'};

describe('Auth Actions', () => {

  describe('Signup Actions', () => {

    describe('Signup', () => {
      it('should create an action', () => {
        testPayloadAction(Auth.SIGNUP, Auth.Signup, userInfo);
      });
    });

    describe('SignupSuccess', () => {
      it('should create an action', () => {
        const payload = {
          user,
          token: 'abcdef'
        };
        testPayloadAction(Auth.SIGNUP_SUCCESS, Auth.SignupSuccess, payload);
      });
    });

    describe('SignupFailure', () => {
      it('should create an action', () => {
        testPayloadAction(Auth.SIGNUP_FAILURE, Auth.SignupFailure, 'an error');
      });
    });

  });

  describe('Signin Actions', () => {

    describe('Signin', () => {
      it('should create an action', () => {
        testPayloadAction(Auth.SIGNIN, Auth.Signin, userInfo);
      });
    });

    describe('SigninSuccess', () => {
      it('should create an action', () => {
        const payload = {
          user,
          token: 'abcdef'
        };
        testPayloadAction(Auth.SIGNIN_SUCCESS, Auth.SigninSuccess, payload);
      });
    });

    describe('SigninFailure', () => {
      it('should create an action', () => {
        testPayloadAction(Auth.SIGNIN_FAILURE, Auth.SigninFailure, 'an error');
      });
    });

  });


  describe('Local Data Actions', () => {

    describe('ReadLocalAuthData', () => {
      it('should create an action', () => {
        testEmptyAction(Auth.READ_LOCAL_AUTH_DATA, Auth.ReadLocalAuthData);
      });
    });

    describe('LoadLocalAuthData', () => {
      it('should create an action', () => {
        const payload = {
          user,
          token: 'abcdef'
        };

        testPayloadAction(Auth.LOAD_LOCAL_AUTH_DATA, Auth.LoadLocalAuthData, payload);
      });
    });
  });
});
