import { Action } from '@ngrx/store';
import { Category } from '../../models/category.model';

export enum CategoriesActionTypes {
  AddCategory = '[Categories] Add Category',
  AddCategorySuccess = '[Categories] Add Category Success',
  AddCategoryFailure = '[Categories] Add Category Failure',
  Select = '[Categories] Select',
  Fetch = '[Categories] Fetch',
  FetchSuccess = '[Categories] Fetch Success',
  FetchFailure = '[Categories] Fetch Failure',
}

export class AddCategory implements Action {
  readonly type = CategoriesActionTypes.AddCategory;
  constructor(public payload: Category) { }
}

export class AddCategorySuccess implements Action {
  readonly type = CategoriesActionTypes.AddCategorySuccess;
  constructor(public payload: Category) { }
}

export class AddCategoryFailure implements Action {
  readonly type = CategoriesActionTypes.AddCategoryFailure;
  constructor(public payload: string) { }
}

export class Select implements Action {
  readonly type = CategoriesActionTypes.Select;
  constructor(public payload: number) { }
}

export class Fetch implements Action {
  readonly type = CategoriesActionTypes.Fetch;
}

export class FetchSuccess implements Action {
  readonly type = CategoriesActionTypes.FetchSuccess;
  constructor(public payload: Category[]) { }
}

export class FetchFailure implements Action {
  readonly type = CategoriesActionTypes.FetchFailure;
  constructor(public payload: string) { }
}

export type CategoriesActions =
Fetch |
FetchSuccess |
FetchFailure |
Select |
AddCategory |
AddCategorySuccess |
AddCategoryFailure;
