import { Action } from '@ngrx/store';
import { Note } from '../../models/note.model';
import { Share } from 'app/notes/models/share.model';

export const LOAD = '[Notes] Load';
export const LOAD_SUCCESS = '[Notes] Load Success';
export const LOAD_FAIL = '[Notes] Load Fail';
export const SELECT = '[Notes] Select';
export const DESELECT = '[Notes] Deelect';
export const CREATE = '[Notes] Create';
export const CREATE_SUCCESS = '[Notes] Create Success';
export const CREATE_FAIL = '[Notes] Create Fail';
export const EDIT = '[Notes] Edit';
export const EDIT_SUCCESS = '[Notes] Edit Success';
export const EDIT_FAIL = '[Notes] Edit Fail';
export const DELETE = '[Notes] Delete';
export const DELETE_SUCCESS = '[Notes] Delete Success';
export const DELETE_FAIL = '[Notes] Delete Fail';
export const SEARCH = '[Notes] Search';
export const SEARCH_SUCCESS = '[Notes] Search Success';
export const SEARCH_FAIL = '[Notes] Search Fail';
export const LOAD_SHARE = '[Notes] Load share';
export const LOAD_SHARE_SUCCESS = '[Notes] Load Share Success';
export const LOAD_SHARE_FAIL = '[Notes] Load Share Fail';

export class Load implements Action {
  readonly type = LOAD;
}


export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Note[]) {}
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}


export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: string) {}
}


export class Deselect implements Action {
  readonly type = DESELECT;
}

export class Create implements Action {
  readonly type = CREATE;

  constructor(public payload: Note) {}
}

export class CreateFail implements Action {
  readonly type = CREATE_FAIL;

  constructor(public payload: any) {}
}

export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;

  constructor(public payload: Note) {}
}

export class Edit implements Action {
  readonly type = EDIT;

  constructor(public noteId: number, public payload: Note) {}
}

export class EditFail implements Action {
  readonly type = EDIT_FAIL;

  constructor(public payload: any) {}
}

export class EditSuccess implements Action {
  readonly type = EDIT_SUCCESS;

  constructor(public noteId: number, public payload: Note) {}
}


export class Delete implements Action {
  readonly type = DELETE;

  constructor(public noteId: number) {}
}

export class DeleteFail implements Action {
  readonly type = DELETE_FAIL;

  constructor(public payload: any) {}
}

export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
}

export class Search implements Action {
  readonly type = SEARCH;

  constructor(public searchString: string) {}
}

export class SearchFail implements Action {
  readonly type = SEARCH_FAIL;

  constructor(public payload: any) {}
}

export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;

  constructor(public notes: Note[]) { }
}


export class LoadShare implements Action {
  readonly type = LOAD_SHARE;

  constructor(public url: string) {}
}


export class LoadShareSuccess implements Action {
  readonly type = LOAD_SHARE_SUCCESS;

  constructor(public share: Share) {}
}


export class LoadShareFail implements Action {
  readonly type = LOAD_SHARE_FAIL;

  constructor(public payload: string) {}
}


export type actions =
  Load |
  LoadSuccess |
  LoadFail |
  Select |
  Deselect |
  Create |
  CreateFail |
  CreateSuccess |
  Edit |
  EditFail |
  EditSuccess |
  Search |
  SearchFail |
  SearchSuccess |
  Delete |
  DeleteFail |
  DeleteSuccess |
  LoadShare |
  LoadShareSuccess |
  LoadShareFail;
