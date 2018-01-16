import { Action } from '@ngrx/store';
import { Share } from '../../models/share.model';

export enum SharesActionTypes {
  LoadShare = '[Shares] Load Share',
  LoadShareSuccess = '[Shares] Load Share Success',
  LoadShareFailure = '[Shares] Load Share Failure',
  CreateShare = '[Shares] Create Share',
  CreateShareSuccess = '[Shares] Create Share Success',
  CreateShareFailure = '[Shares] Create Share Failure',
}


export class LoadShare implements Action {
  readonly type = SharesActionTypes.LoadShare;
  constructor(public payload: string) { }
}

export class LoadShareSuccess implements Action {
  readonly type = SharesActionTypes.LoadShareSuccess;
  constructor(public payload: Share) { }
}

export class LoadShareFailure implements Action {
  readonly type = SharesActionTypes.LoadShareFailure;
  constructor(public payload: string) { }
}

export class CreateShare implements Action {
  readonly type = SharesActionTypes.CreateShare;
  constructor(public payload: number) { }
}

export class CreateShareSuccess implements Action {
  readonly type = SharesActionTypes.CreateShareSuccess;
  constructor(public payload: Share) { }
}

export class CreateShareFailure implements Action {
  readonly type = SharesActionTypes.CreateShareFailure;
  constructor(public payload: string) { }
}


export type SharesActions =
LoadShare |
LoadShareFailure |
LoadShareSuccess |
CreateShare |
CreateShareFailure |
CreateShareSuccess;
