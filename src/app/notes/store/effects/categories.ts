
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as routerActions from '../../../store/router-actions';

import { NotesService } from '../../notes.service';

import {
  CategoriesActionTypes,
  Fetch,
  FetchSuccess,
  FetchFailure,
  AddCategory,
  AddCategorySuccess,
  AddCategoryFailure,
  DeleteCategory,
  DeleteCategorySuccess,
  DeleteCategoryFailure,
} from '../actions/categories';
import { Category } from 'app/notes/models/category.model';


@Injectable()
export class CategoriesEffects {

  @Effect()
  fetchCategories: Observable<Action> = this.actions.ofType(CategoriesActionTypes.Fetch).pipe(
    switchMap((action: Fetch) => {
      return this.notes.fetchCategories();
    }),
    map((categories) => {
      return new FetchSuccess(categories);
    }),
    catchError((err) => of(new FetchFailure(err.error)))
  );

  @Effect()
  addCategory: Observable<Action> = this.actions.ofType(CategoriesActionTypes.AddCategory).pipe(
    switchMap((action: AddCategory) => {
      return this.notes.addCategory(action.payload);
    }),
    map((category: Category) => {
      return new AddCategorySuccess(category);
    }),
    catchError((err) => of(new AddCategoryFailure(err.error)))
  );


  @Effect()
  deleteCategory = this.actions.ofType(CategoriesActionTypes.DeleteCategory).pipe(
    switchMap((action: DeleteCategory) => {
      return this.notes.deleteCategory(action.payload);
    }),
    map((categoryId: number) => {
      return new DeleteCategorySuccess(categoryId);
    }),
    catchError((err) => of(new DeleteCategoryFailure(err.error)))
  );

  @Effect()
  deleteCategorySuccess: Observable<Action> = this.actions.ofType(CategoriesActionTypes.DeleteCategorySuccess).pipe(
    map((action: DeleteCategorySuccess) => {
      return new routerActions.Go({ path: ['/notes'] });
    })
  );

  constructor(private actions: Actions, private notes: NotesService) { }
}
