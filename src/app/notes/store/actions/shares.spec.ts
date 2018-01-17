import { testPayloadAction } from '../../../../../testing/action-helpers';
import { SharesActionTypes, CreateShare, LoadShareSuccess, LoadShareFailure, LoadShare, CreateShareSuccess, CreateShareFailure } from './shares';

const share = {
  title: 'title',
  body: 'body',
  created_at: '12-25',
  updated_at: '12-25',
  id: 15,
  noteId: 1,
  url: 'abc123'
};

describe('Shares Actions', () => {
  describe('Loading Actions', () => {

    describe('LoadShare', () => {
      it('should create an action', () => {
        testPayloadAction(SharesActionTypes.LoadShare, LoadShare, 'abc123');
      });
    });

    describe('LoadShareSuccess', () => {
      it('should create an action', () => {

        testPayloadAction(SharesActionTypes.LoadShareSuccess, LoadShareSuccess, share);
      });
    });

    describe('LoadShareFailure', () => {
      it('should create an action', () => {
        testPayloadAction(SharesActionTypes.LoadShareFailure, LoadShareFailure, 'error');
      });
    });


  });

  describe('Creating Actions', () => {

    describe('CreateShare', () => {
      it('should create an action', () => {
        testPayloadAction(SharesActionTypes.CreateShare, CreateShare, 12);
      });
    });

    describe('CreateShareSuccess', () => {
      it('should create an action', () => {

        testPayloadAction(SharesActionTypes.CreateShareSuccess, CreateShareSuccess, share);
      });
    });

    describe('CreateShareFailure', () => {
      it('should create an action', () => {
        testPayloadAction(SharesActionTypes.CreateShareFailure, CreateShareFailure, 'error');
      });
    });


  });

});


