import { Action } from '@ngrx/store';
import { Category } from '../../models/category.model';

export enum CategoriesActionTypes {
  Select = '[Categories] Select',
  Fetch = '[Categories] Fetch',
  FetchSuccess = '[Categories] Fetch Success',
  FetchFailure = '[Categories] Fetch Failure',
  AddCategory = '[Categories] Add Category',
  AddCategorySuccess = '[Categories] Add Category Success',
  AddCategoryFailure = '[Categories] Add Category Failure',
  DeleteCategory = '[Categories] Delete Category',
  DeleteCategorySuccess = '[Categories] Delete Category Success',
  DeleteCategoryFailure = '[Categories] Delete Category Failure',
  ToggleCategory = '[Categories] Toggle',
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

export class ToggleCategory implements Action {
  readonly type = CategoriesActionTypes.ToggleCategory;
  constructor(public payload: number) { }
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


export class DeleteCategory implements Action {
  readonly type = CategoriesActionTypes.DeleteCategory;
  constructor(public payload: number) { }
}

export class DeleteCategorySuccess implements Action {
  readonly type = CategoriesActionTypes.DeleteCategorySuccess;
  constructor(public payload: number) { }
}

export class DeleteCategoryFailure implements Action {
  readonly type = CategoriesActionTypes.DeleteCategoryFailure;
  constructor(public payload: string) { }
}

export type CategoriesActions =
Fetch |
FetchSuccess |
FetchFailure |
Select |
AddCategory |
AddCategorySuccess |
AddCategoryFailure |
DeleteCategory |
DeleteCategorySuccess |
DeleteCategoryFailure |
ToggleCategory;
