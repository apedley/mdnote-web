import { Action } from '@ngrx/store';
import { Category } from '../../models/category.model';

export const LOAD = '[Category] Load';
export const LOAD_SUCCESS = '[Category] Load Success';
export const LOAD_FAIL = '[Category] Load Fail';
export const SELECT = '[Category] Select';
export const CREATE = '[Category] Create';
export const CREATE_SUCCESS = '[Category] Create Success';
export const CREATE_FAIL = '[Category] Create Fail';
export const DELETE = '[Category] Delete';
export const DELETE_SUCCESS = '[Category] Delete Success';
export const DELETE_FAIL = '[Category] Delete Fail';

export class Load implements Action {
  readonly type = LOAD;
}


export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Category[]) {}
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: string) {}
}


export class Create implements Action {
  readonly type = CREATE;

  constructor(public payload: string) {}
}

export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;

  constructor(public payload: Category) {}
}

export class CreateFail implements Action {
  readonly type = CREATE_FAIL;

  constructor(public payload: any) {}
}


export class Delete implements Action {
  readonly type = DELETE;

  constructor(public categoryId: number) {}
}

export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
}

export class DeleteFail implements Action {
  readonly type = DELETE_FAIL;

  constructor(public payload: any) {}
}
export type actions =
  Load |
  LoadSuccess |
  LoadFail |
  Create |
  CreateSuccess |
  CreateFail |
  Delete |
  DeleteSuccess |
  DeleteFail |
  Select;

