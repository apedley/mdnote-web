import { createSelector } from '@ngrx/store';

import { SharesActions, SharesActionTypes, LoadShare, LoadShareFailure, LoadShareSuccess } from '../actions/shares';
import { Share } from '../../models/share.model';

export interface State {
  share: Share;
  createdShare: Share;
  loading: boolean;
  error: string;
}

export const initialState: State = {
  share: null,
  createdShare: null,
  loading: false,
  error: ''
};

export function reducer(state = initialState, action: SharesActions): State {
  switch (action.type) {
    case(SharesActionTypes.LoadShare):
    case(SharesActionTypes.CreateShare): {
      return { ...state, loading: true };
    }

    case(SharesActionTypes.LoadShareSuccess): {
      return { ...state, share: action.payload, loading: false };
    }


    case(SharesActionTypes.LoadShareFailure):
    case(SharesActionTypes.CreateShareFailure): {
      return { ...state, error: action.payload, share: null, loading: false };
    }

    case(SharesActionTypes.CreateShareSuccess): {
      return { ...state, createdShare: action.payload, loading: false };
    }
    case(SharesActionTypes.CreateShareFailure): {
      return { ...state, error: action.payload, createdShare: null, loading: false };
    }

    default: {
      return state;
    }
  }
}

export const getShare = (state: State) => state.share;
export const getCreatedShare = (state: State) => state.createdShare;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
