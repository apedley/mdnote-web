import * as fromAuth from './reducers';
import * as auth from './actions';


describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const {initialState} = fromAuth;
      const action = {} as any;
      const state = fromAuth.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });
});
