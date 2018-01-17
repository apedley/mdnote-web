import * as Router from './router-actions';
import { testPayloadAction, testEmptyAction } from '../../../testing/action-helpers';


describe('Router Actions', () => {
  describe('Navigation Actions', () => {

    describe('Go', () => {
      it('should create an action', () => {
        const destination = { path: ['/place'] };
        testPayloadAction(Router.GO, Router.Go, destination);
      });
    });

    describe('Back', () => {
      it('should create an action', () => {
        testEmptyAction(Router.BACK, Router.Back);
      });
    });

    describe('Forward', () => {
      it('should create an action', () => {
        testEmptyAction(Router.FORWARD, Router.Forward);
      });
    });

  });
});


